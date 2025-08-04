const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Basic route for testing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Server is working!' });
});

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/shadowsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Gemini AI Init
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-preview-05-20' });

// Define helper functions
function getDepressionLevel(score) {
  if (score <= 10) return 'Minimal';
  if (score <= 20) return 'Mild';
  if (score <= 30) return 'Moderate';
  if (score <= 40) return 'Moderately Severe';
  return 'Severe';
}

function generateSummary(score, level) {
  const summaries = {
    'Minimal': 'Your responses indicate minimal symptoms of depression. Continue maintaining your healthy lifestyle and self-care practices.',
    'Mild': 'Your responses suggest mild symptoms of depression. Consider implementing some self-care strategies and reaching out to your support network.',
    'Moderate': 'Your responses indicate moderate symptoms of depression. Professional support would be beneficial. Consider speaking with a mental health professional.',
    'Moderately Severe': 'Your responses suggest moderately severe symptoms of depression. Professional help is strongly recommended. Please reach out to a mental health professional.',
    'Severe': 'Your responses indicate severe symptoms of depression. Immediate professional help is crucial. Please contact a mental health professional or crisis hotline right away.'
  };
  return summaries[level] || 'Please consult with a mental health professional for personalized guidance.';
}

function getRecommendations(level) {
  const recommendations = {
    'Minimal': [
      'Continue your current healthy lifestyle practices',
      'Maintain regular exercise routine (20-30 minutes daily)',
      'Keep nurturing your social relationships',
      'Practice gratitude daily',
      'Prioritize quality sleep (7-9 hours)',
      'Engage in hobbies and activities you enjoy',
      'Consider mindfulness or meditation'
    ],
    'Mild': [
      'Start each day with one small positive action',
      'Create a simple daily routine',
      'Practice the "5-4-3-2-1" grounding technique',
      'Try journaling for 5-10 minutes daily',
      'Engage in regular physical activity',
      'Connect with supportive friends or family',
      'Consider self-help resources',
      'Limit alcohol and caffeine',
      'Practice deep breathing exercises',
      'Set small, achievable goals each day'
    ],
    'Moderate': [
      'Reach out to a mental health professional',
      'Consider joining a depression support group',
      'Establish a structured daily routine',
      'Practice "behavioral activation"',
      'Use the "HALT" check-in technique',
      'Try cognitive restructuring',
      'Maintain social connections',
      'Create a "mood toolkit"',
      'Practice relaxation techniques',
      'Keep a mood diary'
    ],
    'Moderately Severe': [
      'Schedule an appointment with a psychiatrist',
      'Consider intensive outpatient programs',
      'Discuss medication options with a healthcare provider',
      'Engage in evidence-based therapy',
      'Create a safety plan with your therapist',
      'Involve trusted family members or friends',
      'Maintain basic self-care routines',
      'Use crisis resources when needed',
      'Try to maintain some social contact',
      'Focus on very small, manageable goals'
    ],
    'Severe': [
      'Seek immediate professional help',
      'Contact crisis hotline if needed',
      'Reach out to trusted support system',
      'Consider psychiatric hospitalization if necessary',
      'Work with a psychiatrist for medication',
      'Engage in intensive therapy',
      'Accept help with basic needs',
      'Remove potentially harmful items',
      'Create a detailed safety plan',
      'Focus on surviving each day'
    ]
  };
  return recommendations[level] || ['Please consult with a mental health professional for personalized guidance.'];
}

function getRiskLevel(score) {
  if (score <= 20) return 'Low Risk';
  if (score <= 35) return 'Moderate Risk';
  return 'High Risk';
}

// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  age: Number,
  gender: String,
  medicalHistory: String,
  currentMedications: String,
  preferences: {
    notificationFrequency: String,
    therapyPreference: String,
    activityReminders: Boolean,
  },
  quizCompleted: Boolean,
  quizScore: Number,
  registrationDate: Date,
  moodEntries: [
    {
      value: Number,
      label: String,
      emoji: String,
      notes: String,
      date: { type: Date, default: Date.now },
    },
  ],
  diaryEntries: [
    {
      original: String,
      reframed: String,
      date: { type: Date, default: Date.now },
    },
  ],
  dailyTasks: [
    {
      task: String,
      time: String,
      completed: { type: Boolean, default: false },
      date: { type: Date, default: () => new Date(new Date().setHours(0, 0, 0, 0)) },
    },
  ],
  cbtReports: [{
    initialMoodRating: Number,
    currentMoodRating: Number,
    situation: String,
    automaticThought: String,
    emotions: String,
    cognitiveDistortion: String,
    reframedThought: String,
    sessionGoals: String,
    mainConcerns: String,
    createdAt: { type: Date, default: Date.now }
  }]
});

const User = mongoose.model('User', UserSchema);

// Chat endpoint with Gemini AI
app.post('/api/chat', async (req, res) => {
    const { message, sessionData } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    if (!process.env.GOOGLE_API_KEY) {
        console.error('Google API key is missing');
        return res.status(500).json({ error: 'Google API key is not configured' });
    }

    try {
        console.log('Sending request to Gemini...');

        // Create a context-aware prompt using session data
        const prompt = {
            contents: [{
                parts: [{
                    text: `As a concise CBT therapist, provide brief responses. Current context:
- Mood: ${sessionData?.moodRating}/10
- Concerns: ${sessionData?.mainConcerns}
- Goals: ${sessionData?.sessionGoals}

User message: ${message}

Respond briefly with:
1. Quick emotional validation (1 sentence)
2. One main cognitive distortion (1 sentence)
3. Simple reframe (1-2 sentences)
4. One practical suggestion (1 sentence)
Keep total response under 100 words.`
                }]
            }]
        };

        // Generate response with proper error handling
        const result = await model.generateContent(prompt);
        const response = await result.response;
        
        if (!response || !response.text) {
            throw new Error('Invalid response format from AI');
        }

        let reply = response.text();

        // Ensure we have a valid response
        if (!reply || reply.trim().length === 0) {
            throw new Error('Empty response from AI');
        }

        // Trim response if it's too long
        if (reply.length > 500) {
            reply = reply.substring(0, 500) + '...';
        }

        console.log('Gemini response received:', reply.substring(0, 100) + '...');
        res.json({ reply });
    } catch (error) {
        console.error('Detailed error:', error);
        
        // Send a more user-friendly error message
        let errorMessage;
        if (error.message.includes('Empty response')) {
            errorMessage = 'The AI system is currently having trouble generating a response. Please try again.';
        } else if (error.message.includes('Invalid response format')) {
            errorMessage = 'Received an unexpected response format. Please try again.';
        } else {
            errorMessage = 'There was an issue processing your message. Please try again in a moment.';
        }
            
        res.status(500).json({ 
            error: errorMessage,
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

// Save CBT Report endpoint
app.post('/api/cbt-report', async (req, res) => {
    const { email, report } = req.body;
    if (!email || !report) {
        return res.status(400).json({ error: 'Email and report data are required' });
    }

    try {
        const user = await User.findOneAndUpdate(
            { email },
            { $push: { cbtReports: report } },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'CBT report saved successfully' });
    } catch (error) {
        console.error('Error saving CBT report:', error);
        res.status(500).json({ error: 'Failed to save CBT report' });
    }
});

// Get CBT Reports endpoint
app.get('/api/cbt-reports/:email', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const reports = user.cbtReports.sort((a, b) => b.createdAt - a.createdAt);
        res.json(reports);
    } catch (error) {
        console.error('Error fetching CBT reports:', error);
        res.status(500).json({ error: 'Failed to fetch CBT reports' });
    }
});

// ---------------- AUTH ----------------

app.post('/api/register', async (req, res) => {
  try {
    const newUser = new User({ ...req.body, registrationDate: new Date() });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    if (error.code === 11000) return res.status(409).json({ error: 'Email already exists' });
    res.status(500).json({ error: 'Failed to register user' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password)
      return res.status(401).json({ error: 'Invalid credentials' });

    res.json({
      message: 'Login successful',
      user: {
        name: user.name,
        email: user.email,
        quizCompleted: user.quizCompleted,
        quizScore: user.quizScore,
        preferences: user.preferences,
        moodEntries: user.moodEntries.slice(-7),
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error during login' });
  }
});

// ---------------- QUIZ ----------------

app.post('/api/submit-quiz', async (req, res) => {
  const { email, responses } = req.body;
  const totalScore = Object.values(responses).reduce((sum, val) => sum + parseInt(val), 0);
  const level = getDepressionLevel(totalScore);

  console.log('Generating report with:', {
    totalScore,
    level,
    recommendations: getRecommendations(level)
  });

  const report = {
    timestamp: new Date(),
    quizScore: totalScore,
    level: level,
    summary: generateSummary(totalScore, level),
    riskLevel: getRiskLevel(totalScore),
    recommendations: getRecommendations(level),
    responses: responses
  };

  console.log('Generated report:', report);

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { 
        quizCompleted: true, 
        quizScore: totalScore,
        report: report
      },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ 
      message: 'Report generated successfully',
      report: report
    });
  } catch (err) {
    console.error('Error saving report:', err);
    res.status(500).json({ error: 'Failed to save report' });
  }
});


// ---------------- MOOD TRACKER ----------------

app.post('/api/mood', async (req, res) => {
  const { email, mood } = req.body;
  if (!email || !mood) return res.status(400).json({ error: 'Missing email or mood data' });

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const existingEntry = user.moodEntries.find(entry => {
      const entryDate = new Date(entry.date);
      return entryDate >= today && entryDate < tomorrow;
    });

    if (existingEntry) {
      await User.updateOne(
        { email, 'moodEntries._id': existingEntry._id },
        {
          $set: {
            'moodEntries.$.value': mood.value,
            'moodEntries.$.label': mood.label,
            'moodEntries.$.emoji': mood.emoji,
            'moodEntries.$.notes': mood.notes,
            'moodEntries.$.date': new Date(),
          },
        }
      );
    } else {
      await User.updateOne({ email }, { $push: { moodEntries: mood } });
    }

    res.json({ message: 'Mood logged successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save mood' });
  }
});

app.get('/api/mood-history/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email }, { moodEntries: 1 });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const sortedEntries = user.moodEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json({ moodEntries: sortedEntries });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch mood history' });
  }
});

// ---------------- DIARY ----------------

app.post('/api/diary', async (req, res) => {
  const { email, text } = req.body;
  if (!email || !text) return res.status(400).json({ error: 'Missing diary or email' });

  try {
    const prompt = `Reframe this diary entry positively but keep its meaning and tone similar:\n"${text}"`;
    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });

    const response = result.response.text().trim();
    const reframed = response || "You're doing your best. Keep going!";

    const updateResult = await User.updateOne(
      { email },
      { $push: { diaryEntries: { original: text, reframed, date: new Date() } } }
    );

    if (updateResult.modifiedCount === 0)
      return res.status(404).json({ error: 'User not found' });

    res.json({ reframed });
  } catch (error) {
    res.status(500).json({ error: 'Failed to reframe diary entry' });
  }
});

app.get('/api/diary/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const sorted = user.diaryEntries.sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json({ entries: sorted });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch diary entries' });
  }
});

// ---------------- DAILY TASKS ----------------

app.post('/api/tasks', async (req, res) => {
  const { email, task, time, date, completed } = req.body;
  if (!email || !task || !date) return res.status(400).json({ error: 'Missing task data' });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const taskDate = new Date(date);
    taskDate.setHours(0, 0, 0, 0);

    const existing = user.dailyTasks.find(t =>
      t.task === task && t.date.getTime() === taskDate.getTime()
    );

    if (existing) {
      await User.updateOne(
        { email, 'dailyTasks._id': existing._id },
        {
          $set: {
            'dailyTasks.$.completed': completed,
            'dailyTasks.$.time': time,
          },
        }
      );
    } else {
      await User.updateOne(
        { email },
        {
          $push: {
            dailyTasks: { task, time, completed, date: taskDate },
          },
        }
      );
    }

    res.json({ message: 'Task saved' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save task' });
  }
});

// Get grouped completed tasks by date
app.get('/api/tasks/:email', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const grouped = {};
    let xp = 0;
    let streak = 0;

    // Group tasks by date
    user.dailyTasks
      .filter(t => t.completed)
      .forEach(task => {
        const dateKey = task.date.toISOString().split("T")[0];
        if (!grouped[dateKey]) grouped[dateKey] = [];
        grouped[dateKey].push({
          task: task.task,
          time: task.time,
          completed: task.completed,
        });
        xp += 10; // 10 XP per completed task
      });

    // Calculate streak (consecutive days with completed tasks)
    const sortedDates = Object.keys(grouped).sort();
    for (let i = sortedDates.length - 1; i >= 1; i--) {
      const today = new Date(sortedDates[i]);
      const prev = new Date(sortedDates[i - 1]);
      const diff = (today - prev) / (1000 * 60 * 60 * 24);
      if (diff === 1) {
        streak++;
      } else {
        break;
      }
    }

    if (sortedDates.length > 0) streak += 1; // at least today counts

    res.json({
      groupedTasks: grouped,
      xp,
      streak,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

const PORT = process.env.PORT || 3000;

// Error handling for server
const server = app.listen(PORT, '0.0.0.0', (error) => {
    if (error) {
        console.error('Error starting server:', error);
        return;
    }
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Environment check:');
    console.log('- Google API Key present:', !!process.env.GOOGLE_API_KEY);
    console.log('- MongoDB URI:', process.env.MONGODB_URI || 'mongodb://localhost:27017/shadowsDB');
});

server.on('error', (error) => {
    console.error('Server error:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});