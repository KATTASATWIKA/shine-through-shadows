// Data for articles and categories
const articles = [
  {
    id: "1",
    title: "Understanding Depression: The Signs, Symptoms, and Treatment Options",
    excerpt: "Depression affects millions worldwide. Learn to identify the warning signs and discover effective coping mechanisms and treatment approaches.",
    image: "https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=1974&auto=format&fit=crop",
    category: "Depression",
    tags: ["Mental Health", "Depression", "Treatment"],
    readTime: "8 min",
    publishDate: "2023-07-15",
    featured: true,
    content: "Depression is a common but serious mood disorder that causes severe symptoms that affect how you feel, think, and handle daily activities. More than just feeling 'blue' for a few days, depression symptoms must persist for at least two weeks for a diagnosis. Depression is one of the most common mental disorders in the United States, affecting an estimated 17.3 million adults.\n\nSymptoms of depression can vary from mild to severe and may include feeling sad or having a depressed mood, loss of interest or pleasure in activities once enjoyed, changes in appetite, trouble sleeping or sleeping too much, loss of energy or increased fatigue, increase in purposeless physical activity or slowed movements and speech, feeling worthless or guilty, difficulty thinking, concentrating or making decisions, and thoughts of death or suicide.\n\nDepression is caused by a combination of genetic, biological, environmental, and psychological factors. Risk factors include personal or family history of depression, major life changes, trauma, or stress, and certain physical illnesses and medications.\n\nTreatment options for depression include medications, psychotherapy, or a combination of the two. Antidepressants primarily work on brain chemicals called neurotransmitters, especially serotonin and norepinephrine. These medications are not sedatives, 'uppers,' or tranquilizers. They are not habit-forming, even if they may require several weeks to work.\n\nPsychotherapy, or 'talk therapy,' can also help treat depression. Cognitive-behavioral therapy (CBT) has been found to be effective in treating depression. CBT is a form of therapy focused on the present and problem-solving. It helps a person recognize distorted thinking and then change behaviors and thinking.\n\nIf you think you may be suffering from depression, it's important to seek help from a healthcare provider. Remember, depression is a real illness that requires treatment, and most people who experience it need treatment to get better."
  },
  {
    id: "2",
    title: "The Science of Mindfulness: How Meditation Changes Your Brain",
    excerpt: "Recent research reveals how mindfulness practices physically reshape brain structures, improving focus, emotional regulation, and overall mental well-being.",
    image: "https://images.unsplash.com/photo-1526659666037-96f63c2fbf33?q=80&w=1974&auto=format&fit=crop",
    category: "Mindfulness",
    tags: ["Meditation", "Neuroscience", "Self-Care"],
    readTime: "6 min",
    publishDate: "2023-08-03",
    content: "Mindfulness meditation has been practiced for thousands of years, but it's only in the last few decades that scientists have begun to rigorously study its effects on the brain. What they've discovered is remarkable: meditation doesn't just make you feel better mentally—it actually changes the physical structure of your brain.\n\nUsing technologies like functional MRI (fMRI) and electroencephalography (EEG), researchers have found that regular mindfulness practice leads to increased gray matter density in brain regions associated with attention, emotional regulation, and self-awareness. The amygdala, which plays a key role in stress and anxiety, has been shown to decrease in size and activity with consistent meditation practice.\n\nOne of the most significant findings comes from studies on the prefrontal cortex—the brain region responsible for executive functions like planning, decision-making, and self-control. Regular meditators show enhanced connectivity and increased cortical thickness in this area, which correlates with improved attention and focus in daily life.\n\nThe default mode network (DMN), sometimes called the 'me center' because it's active when we're lost in self-referential thoughts, also shows interesting changes. Meditation helps quiet this network, reducing mind-wandering and negative rumination that often contribute to anxiety and depression.\n\nEven more remarkable is that these changes begin to occur relatively quickly. While profound structural changes may take months or years of consistent practice, measurable changes in brain function can be detected after just eight weeks of regular meditation practice.\n\nThe practical implications of these findings are significant. By incorporating just 10-20 minutes of mindfulness practice into your daily routine, you can begin to reshape your brain in ways that promote greater emotional resilience, sharper focus, and improved overall mental well-being."
  },
  {
    id: "3",
    title: "Breaking the Stigma: Why We Need to Talk About Mental Health",
    excerpt: "Mental health stigma prevents many from seeking help. This article explores how open conversations can break down barriers and save lives.",
    image: "https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=1935&auto=format&fit=crop",
    category: "Awareness",
    tags: ["Stigma", "Advocacy", "Communication"],
    readTime: "5 min",
    publishDate: "2023-06-22",
    content: "Mental health stigma remains one of the most significant barriers preventing people from seeking the help they need. Despite affecting nearly one in five adults in the United States, mental illness continues to be shrouded in misconceptions, fear, and shame. This silence doesn't just hurt individuals—it has profound societal consequences.\n\nThe cost of stigma is measured in human lives. Research shows that the average delay between the onset of mental health symptoms and treatment is 11 years. During this critical time, conditions often worsen, relationships suffer, and the risk of self-harm increases. For many, the fear of being labeled, judged, or discriminated against outweighs the potential benefits of seeking professional help.\n\nStigma manifests in various harmful ways. Self-stigma causes individuals to internalize negative stereotypes, leading to diminished self-esteem and self-efficacy. Public stigma results in discrimination in employment, housing, and social settings. Structural stigma appears in policies and institutional practices that limit opportunities for people with mental health conditions.\n\nBreaking this cycle requires collective action. Every conversation about mental health helps normalize these experiences and challenges harmful stereotypes. When public figures share their struggles with depression, anxiety, or other conditions, they help millions feel less alone and more empowered to seek support.\n\nEducation is another powerful tool against stigma. Understanding that mental illnesses are medical conditions—not character flaws or personal weaknesses—helps shift perceptions. Learning about the biological, psychological, and environmental factors that contribute to mental health conditions can replace judgment with empathy.\n\nLanguage matters too. Using person-first language (saying 'a person with schizophrenia' rather than 'a schizophrenic') helps remind us that individuals are not defined by their diagnosis. Avoiding terms like 'crazy,' 'psycho,' or 'nuts' in casual conversation helps eliminate the negative associations that contribute to stigma.\n\nBy fostering open, compassionate conversations about mental health, we create spaces where people feel safe seeking help before reaching crisis points. In doing so, we move toward a future where mental health is treated with the same importance and respect as physical health—because, in reality, they've always been inseparable."
  },
  {
    id: "4",
    title: "Cognitive Behavioral Therapy: Rewiring Thought Patterns for Better Mental Health",
    excerpt: "CBT is one of the most effective therapeutic approaches for various mental health conditions. Learn how it works and how you can apply its principles.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1970&auto=format&fit=crop",
    category: "Therapy",
    tags: ["CBT", "Therapy", "Techniques"],
    readTime: "7 min",
    publishDate: "2023-07-28",
    content: "Cognitive Behavioral Therapy (CBT) stands as one of psychology's most evidence-based and effective treatment approaches. Developed in the 1960s, this practical, goal-oriented therapy has helped millions overcome depression, anxiety, PTSD, and numerous other mental health challenges.\n\nAt its core, CBT is built on a simple yet profound premise: our thoughts, feelings, and behaviors are interconnected, and by changing one, we can positively influence the others. Unlike therapies that focus primarily on childhood experiences or unconscious motivations, CBT concentrates on present difficulties and practical solutions.\n\nThe 'cognitive' component of CBT addresses thinking patterns. We all develop cognitive distortions—systematic ways our minds convince us of something that isn't true. Common distortions include catastrophizing (assuming the worst possible outcome), black-and-white thinking (seeing situations as all good or all bad), and overgeneralization (applying one negative experience to all similar situations).\n\nCBT helps identify these distortions and replace them with more balanced, realistic thoughts. For example, someone with social anxiety might automatically think, 'Everyone at this party will judge me.' Through CBT, they learn to challenge this thought: 'Some people might judge me, others won't care, and some might like me. I can handle whatever happens.'\n\nThe 'behavioral' element focuses on changing unhelpful behavioral patterns. This might involve gradually facing feared situations (exposure), developing new coping skills, or breaking cycles of avoidance that maintain anxiety or depression.\n\nA typical CBT session is structured and educational. Therapists often assign 'homework'—practical exercises to apply what you've learned in therapy to real-world situations. This emphasis on skill-building makes CBT particularly empowering; clients develop tools they can use long after therapy ends.\n\nWhile working with a trained therapist offers the most comprehensive approach, many CBT principles can be applied independently. Start by keeping a thought record: when you feel intense negative emotions, write down the situation, your automatic thoughts, and the emotions they trigger. Then challenge those thoughts by looking for evidence for and against them, and generate more balanced alternatives.\n\nThe beauty of CBT lies in its adaptability and proven effectiveness. Whether you're dealing with clinical depression or simply want to develop healthier thought patterns, the principles of cognitive behavioral therapy offer a roadmap for lasting mental health improvement."
  },
  {
    id: "5",
    title: "The Connection Between Physical Exercise and Mental Well-being",
    excerpt: "Regular physical activity doesn't just strengthen your body—it's also a powerful tool for managing stress, anxiety, and depression.",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1770&auto=format&fit=crop",
    category: "Self-Care",
    tags: ["Exercise", "Wellness", "Mood"],
    readTime: "4 min",
    publishDate: "2023-08-10",
    content: "The mind-body connection is powerful, and nowhere is this more evident than in the relationship between physical exercise and mental health. While most people understand that regular physical activity is essential for physical health, its profound impact on mental well-being is equally important yet often overlooked.\n\nExercise triggers the release of endorphins—natural chemicals in the brain that act as painkillers and mood elevators. This explains the phenomenon known as 'runner's high,' but you don't need to run a marathon to benefit. Studies show that just 30 minutes of moderate exercise can trigger these mood-enhancing effects.\n\nBeyond the immediate chemical changes, regular physical activity has been shown to reduce inflammation and promote neural growth—factors that play crucial roles in brain health and emotional regulation. Exercise also increases levels of brain-derived neurotrophic factor (BDNF), a protein that supports the survival of existing neurons and encourages the growth of new neurons and synapses, which may help alleviate depression and anxiety.\n\nFor those with clinically diagnosed depression, research indicates that regular exercise can be as effective as antidepressant medication for mild to moderate cases. A landmark study found that people who exercised regularly were 25% less likely to develop depression or anxiety over the next five years.\n\nAnxiety disorders also respond well to physical activity. Exercise helps break the cycle of anxiety by diverting your attention from triggers, reducing muscle tension, changing brain chemistry, and building resilience through the controlled introduction of physical stress.\n\nSleep quality—a critical factor in mental health—also improves with regular exercise. Physical activity helps regulate circadian rhythms and can increase the amount of slow-wave (deep) sleep you get, though it's best to avoid vigorous exercise close to bedtime.\n\nThe type of exercise matters less than consistency. Whether you prefer walking, swimming, dancing, yoga, or weight training, the key is finding activities you enjoy enough to stick with. Even short bursts of activity—a 10-minute walk or quick bodyweight exercise session—can provide immediate benefits.\n\nIf you're currently inactive, start gently. Walking is an ideal first activity—it requires no special equipment and can be easily integrated into daily routines. Gradually increase duration and intensity as your fitness improves.\n\nFor those dealing with depression, the hardest part is often getting started. Setting small, achievable goals and finding an exercise buddy can help overcome the inertia that often accompanies depression.\n\nRemember that exercise is not a replacement for professional treatment if you're experiencing serious mental health issues, but rather a powerful complement to therapy and/or medication. Always consult healthcare providers when making decisions about managing mental health conditions."
  },
  {
    id: "6",
    title: "Navigating Grief and Loss: A Path Through Darkness",
    excerpt: "Grief is a natural response to loss, but it can be overwhelming. This guide offers compassionate strategies for coping with grief and finding meaning again.",
    image: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=1770&auto=format&fit=crop",
    category: "Grief",
    tags: ["Loss", "Coping", "Healing"],
    readTime: "9 min",
    publishDate: "2023-06-05",
    content: "Grief is perhaps the most universal human experience—a journey we will all face at various points in our lives. Yet despite its universality, grief often feels isolating, as if no one could possibly understand the depth of our particular loss.\n\nWhether mourning the death of a loved one, the end of a significant relationship, the loss of a job or home, or even the disappearance of a familiar way of life, grief encompasses a complex array of emotions that can include shock, anger, disbelief, guilt, and profound sadness.\n\nFor decades, grief was often described through Elisabeth Kübler-Ross's famous five stages: denial, anger, bargaining, depression, and acceptance. While this model has provided helpful language for discussing grief, modern understanding recognizes that grief rarely follows a predictable sequence. Instead, it's more like an unpredictable ocean—sometimes calm, sometimes stormy, with waves that can suddenly overwhelm even when you thought the waters had settled.\n\nCurrent grief research emphasizes several important truths: there is no 'right way' to grieve, no timeline for when you should feel better, and no requirement to reach a state of 'closure.' Some losses become integrated into our lives rather than resolved.\n\nOne helpful contemporary model is the 'dual process' theory, which suggests we oscillate between loss-oriented activities (feeling the grief, remembering the past) and restoration-oriented activities (adjusting to changes, developing new identities and relationships). Both are necessary parts of healthy grieving.\n\nWhile grief is normal and natural, there are approaches that can help navigate this difficult terrain:\n\n1. **Acknowledge your feelings**: Allow yourself to feel whatever emotions arise without judgment. There's no benefit in telling yourself you 'shouldn't' feel a certain way.\n\n2. **Take care of physical needs**: Grief is physically exhausting. Prioritize sleep, nutrition, and gentle movement to support your body during this demanding time.\n\n3. **Express your grief**: Whether through talking, writing, art, music, or other forms of expression, finding outlets for your emotions can prevent them from becoming trapped inside.\n\n4. **Seek connection**: While isolation often feels safer, research consistently shows that social support is crucial for navigating loss. This doesn't mean you need to share everything with everyone, but having at least a few people who can witness your pain makes a difference.\n\n5. **Honor the loss**: Finding meaningful ways to memorialize what you've lost—whether through rituals, creative projects, charitable actions, or simply setting aside time for remembrance—can help integrate the loss into your ongoing life.\n\n6. **Find professional support when needed**: Grief counselors, therapists, and support groups can provide valuable guidance, especially if grief becomes overwhelming or persists without any signs of gradually adapting.\n\nComplicated grief, sometimes called prolonged grief disorder, may require professional intervention. Warning signs include persistent difficulty accepting the loss, intense longing that doesn't diminish over time, inability to engage in daily activities, or persistent thoughts of joining the deceased (in cases of bereavement).\n\nUltimately, grief transforms rather than disappears. With time and support, most people find ways to honor their losses while also building meaningful lives that can still include joy, purpose, and connection. As the grief expert David Kessler suggests, finding meaning—not in the loss itself, but in how we respond to it—can be a powerful sixth stage that helps us move forward while carrying our losses with us."
  },
  {
    id: "7",
    title: "Social Media and Mental Health: Finding Balance in a Digital World",
    excerpt: "While social platforms connect us, they can also harm our psychological well-being. Learn to develop a healthier relationship with technology.",
    image: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=1771&auto=format&fit=crop",
    category: "Digital Wellness",
    tags: ["Social Media", "Technology", "Boundaries"],
    readTime: "6 min",
    publishDate: "2023-07-19",
    content: "In just over a decade, social media has fundamentally transformed how we communicate, consume information, and present ourselves to the world. While these platforms offer unprecedented connectivity and opportunity, growing research suggests they may also be contributing to a global mental health crisis, particularly among younger users.\n\nStudies have linked heavy social media use to increased rates of depression, anxiety, loneliness, and poor body image. A 2019 study published in JAMA Psychiatry found that adolescents who spend more than three hours daily on social media face a significantly higher risk of developing mental health problems.\n\nSeveral mechanisms help explain this relationship. Social comparison—seeing carefully curated highlights of others' lives—can trigger feelings of inadequacy about one's own life. The constant quest for external validation through likes and comments can create unhealthy attachment to digital approval. Fear of missing out (FOMO) generates anxiety as we witness events and gatherings we weren't involved in. Additionally, the dopamine-driven feedback loops engineered into these platforms can lead to compulsive checking and usage that resembles addiction.\n\nSleep disruption represents another significant pathway between social media and poor mental health. Not only does nighttime device use expose us to sleep-disrupting blue light, but the emotional arousal from scrolling can make it harder to settle into restful sleep.\n\nDespite these concerns, complete abstention from social media isn't realistic or necessary for most people. The goal instead should be establishing a healthier relationship with these technologies. Here are evidence-based strategies to consider:\n\n1. **Conduct a usage audit**: Use screen time tracking tools to honestly assess how much time you're spending on various platforms.\n\n2. **Set intentional boundaries**: Designate specific tech-free times (meals, the first hour after waking, the hour before bed) and spaces (bedroom, dining area).\n\n3. **Curate your feeds**: Regularly audit who you follow. Unfollow or mute accounts that consistently make you feel inadequate, anxious, or negative.\n\n4. **Disable notifications**: Push notifications are designed to pull you back into apps. Turning them off allows you to engage on your own schedule.\n\n5. **Practice mindful usage**: Before opening a social app, pause and ask: Why am I doing this right now? What am I hoping to get from it? This simple practice can break unconscious habits.\n\n6. **Balance consumption with creation**: If you must use social media, try to spend more time actively creating content meaningful to you rather than passively consuming others' posts.\n\n7. **Prioritize real-world connections**: Make consistent efforts to engage in face-to-face social activities, which research shows provide more authentic connection and greater mental health benefits.\n\nFor parents concerned about children's social media use, open communication trumps strict prohibition. Discuss potential risks, model healthy technology habits, and consider tools that help monitor and limit usage appropriately for different ages.\n\nRemember that social media platforms are designed to maximize engagement—often at the expense of our well-being. Taking back control requires conscious effort, but the mental health benefits make it well worth the adjustment."
  },
  {
    id: "8",
    title: "Sleep and Mental Health: The Vital Connection",
    excerpt: "Quality sleep is essential for psychological well-being. Discover the bidirectional relationship between sleep and mental health, with practical tips for better rest.",
    image: "https://images.unsplash.com/photo-1560333558-e76984b8221d?q=80&w=1770&auto=format&fit=crop",
    category: "Sleep",
    tags: ["Insomnia", "Rest", "Recovery"],
    readTime: "7 min",
    publishDate: "2023-08-01",
    content: "The relationship between sleep and mental health is bidirectional and profound. Poor sleep exacerbates mental health conditions, while mental health issues often disrupt sleep—creating a cycle that can be challenging to break. Understanding this complex relationship is the first step toward better psychological and physical well-being.\n\nDuring healthy sleep, the brain cycles through different stages, including deep slow-wave sleep and REM (rapid eye movement) sleep. These stages play crucial roles in cognitive functions like learning and memory consolidation. They also allow the brain to clear out waste products that accumulate during waking hours—including beta-amyloid, a protein associated with Alzheimer's disease.\n\nChronically disrupted sleep affects nearly every aspect of mental functioning. Even a single night of poor sleep can increase anxiety levels by up to 30%, according to research from UC Berkeley. Persistent sleep problems significantly raise the risk of developing depression, with insomnia patients showing a twofold risk of developing major depression compared to those who sleep well.\n\nThe relationship works in reverse as well. Approximately 65-90% of adults with major depression experience sleep problems, and addressing sleep issues improves both depression outcomes and quality of life. For those with bipolar disorder, sleep disruptions can trigger manic episodes, while stabilizing sleep patterns helps maintain mood stability.\n\nAnxiety disorders and PTSD frequently co-occur with insomnia, with nighttime often bringing heightened worry and intrusive thoughts. Treating sleep problems in these populations requires addressing both the sleep disruption and the underlying anxiety.\n\nFortunately, improving sleep quality is one of the most actionable ways to boost mental health. Evidence-based strategies include:\n\n1. **Maintain consistent sleep-wake times**: The body's circadian rhythm functions best when you go to bed and wake up at approximately the same times every day—even on weekends.\n\n2. **Create a sleep-promoting environment**: Your bedroom should be cool (65-68°F/18-20°C), dark, and quiet. Consider blackout curtains, white noise machines, or earplugs if needed.\n\n3. **Establish a wind-down routine**: Begin relaxing 30-60 minutes before bedtime with activities like reading (not on screens), gentle stretching, or meditation.\n\n4. **Limit screen exposure**: The blue light from phones, tablets, and computers suppresses melatonin production. Avoid screens for at least an hour before bed or use night mode and blue light filters.\n\n5. **Watch caffeine and alcohol intake**: Caffeine's effects can last 6+ hours, so avoid it after mid-afternoon. While alcohol might help you fall asleep initially, it disrupts sleep quality and REM sleep.\n\n6. **Exercise regularly**: Physical activity promotes deeper sleep, though it's best completed at least 3 hours before bedtime.\n\n7. **Manage worry**: If racing thoughts keep you awake, try keeping a 'worry journal' before bed to externalize concerns. Schedule time tomorrow to address solvable problems.\n\n8. **Consider cognitive behavioral therapy for insomnia (CBT-I)**: This evidence-based approach helps retrain the brain and body for better sleep and is now the first-line recommended treatment for chronic insomnia.\n\nFor those with persistent sleep problems, consulting a healthcare provider is important. Untreated sleep disorders like sleep apnea, restless legs syndrome, or narcolepsy can significantly impact mental health.\n\nIn our achievement-oriented society, sleep is often sacrificed, but this approach is counterproductive. Quality sleep isn't a luxury—it's a biological necessity and one of the strongest foundations for robust mental health. By prioritizing sleep and addressing sleep problems when they arise, we can significantly improve our psychological resilience and overall well-being."
  },
  {
    id: "9",
    title: "Supporting a Loved One With Depression: What to Say and Do",
    excerpt: "When someone you care about is struggling with depression, knowing how to help can be challenging. This guide provides practical advice for being a supportive presence.",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1770&auto=format&fit=crop",
    category: "Relationships",
    tags: ["Support", "Communication", "Caregiving"],
    readTime: "8 min",
    publishDate: "2023-06-18",
    content: "When someone you care about is struggling with depression, it can feel overwhelming. You want to help, but may worry about saying the wrong thing or making matters worse. This uncertainty is normal—depression is complex, and there's no one-size-fits-all approach to supporting someone through it. However, research and lived experience offer valuable guidance for being a helpful presence during someone's darkest times.\n\nFirst, it's crucial to understand what depression is—and isn't. Depression isn't simply sadness or a bad mood that someone can 'snap out of' with enough willpower. It's a serious medical condition that affects how a person thinks, feels, and functions. The brain chemistry, thought patterns, and energy levels of someone with depression are significantly altered, making even basic tasks feel overwhelming.\n\nWith this understanding as a foundation, here are evidence-based ways to support someone with depression:\n\n**1. Listen without judgment or quick solutions**\n\nOne of the most powerful things you can offer is your presence and attention. Depression often comes with feelings of worthlessness, and truly being heard can counteract the sense of isolation.\n\nHelpful approaches include:\n- \"I'm here for you. I might not understand exactly what you're going through, but I care and want to listen.\"\n- \"You don't need to pretend you're okay with me. I'm here for the hard stuff too.\"\n\nUnhelpful approaches include:\n- \"Just think positive!\"\n- \"Others have it worse.\"\n- Immediately jumping to solutions before they feel understood\n\n**2. Validate their experience**\n\nAcknowledging the reality and difficulty of their depression shows respect for their experience.\n\nHelpful approaches include:\n- \"That sounds really difficult. It makes sense that you'd feel overwhelmed.\"\n- \"I can see you're really struggling, and I'm glad you told me.\"\n\nUnhelpful approaches include:\n- \"You have so much to be thankful for.\"\n- \"It's all in your head.\"\n\n**3. Offer specific, practical help**\n\nDepression can make basic tasks feel insurmountable. Instead of the vague \"Let me know if you need anything,\" offer specific assistance.\n\nHelpful approaches include:\n- \"I'm going to the grocery store tomorrow. Can I pick anything up for you?\"\n- \"Would it help if I came over Tuesday and did a load of laundry?\"\n- \"I made extra dinner. Can I drop some off tonight?\"\n\n**4. Encourage professional support**\n\nYour support is valuable but not a substitute for professional help. Gently encourage treatment if they're not receiving it.\n\nHelpful approaches include:\n- \"Have you thought about talking to someone who specializes in this? I'd be happy to help you find someone or go with you to the first appointment.\"\n- \"There are really effective treatments for what you're experiencing. You deserve that kind of support.\"\n\nUnhelpful approaches include:\n- Pressuring or ultimatums\n- Suggesting they should be able to handle it without professional help\n\n**5. Maintain connection even when it's difficult**\n\nDepression often causes people to withdraw. Consistent, gentle outreach—without expectation of immediate response—shows you're there for the long haul.\n\nHelpful approaches include:\n- Regular, no-pressure check-ins: \"Just thinking of you. No need to respond.\"\n- Invitations that make participation easy: \"I'm going for a short walk at the park Saturday. You're welcome to join—no pressure either way.\"\n\n**6. Take care of yourself**\n\nSupporting someone with depression can be emotionally taxing. Maintaining your own well-being isn't selfish—it's necessary for sustainable support.\n\n- Set reasonable boundaries\n- Seek your own support network\n- Remember you can't \"fix\" their depression\n\n**7. Learn the warning signs of suicidal thoughts**\n\nDepression increases suicide risk. Take statements about death or suicide seriously and know how to respond:\n\n- Ask directly: \"Are you having thoughts about harming yourself?\"\n- Know crisis resources: National Suicide Prevention Lifeline (988) or Crisis Text Line (text HOME to 741741)\n- In imminent danger situations, call emergency services or take them to an emergency room\n\nRemember that recovery from depression often isn't linear. There may be setbacks along with improvements. Your consistent, compassionate presence through these fluctuations is invaluable. With appropriate professional treatment and strong social support, most people with depression do improve over time."
  },
  {
    id: "10",
    title: "Art Therapy: Expressing Emotions Through Creative Processes",
    excerpt: "Art therapy offers a powerful outlet for processing complex feelings. Learn how creative expression can complement traditional therapeutic approaches.",
    image: "https://images.unsplash.com/photo-1616764564151-d2a17f966fc6?q=80&w=1770&auto=format&fit=crop",
    category: "Therapy",
    tags: ["Art", "Creativity", "Expression"],
    readTime: "5 min",
    publishDate: "2023-07-25",
    content: "When words fail to capture the complexity of our inner experiences, art can provide a powerful alternative language. Art therapy harnesses this expressive potential as a formal therapeutic approach that uses creative processes to improve mental, emotional, and physical well-being.\n\nUnlike casual arts and crafts, art therapy is facilitated by trained professionals who understand both artistic processes and psychological principles. The focus isn't on creating aesthetically pleasing work—technical skill is irrelevant. Instead, art therapy emphasizes self-expression, exploration, and insight through the creative process itself.\n\nThis approach works on multiple levels. Creating art activates different parts of the brain than verbal communication, potentially bypassing intellectual defenses and accessing emotions and memories that might otherwise remain inaccessible. The tangible nature of artwork also provides a concrete representation of internal experiences, allowing both client and therapist to literally see thoughts and feelings that might be difficult to verbalize.\n\nResearch demonstrates art therapy's effectiveness across diverse populations and conditions. For those experiencing trauma, creating art can help process experiences without requiring verbal recounting, which might be too overwhelming initially. The distance provided by working through symbolic imagery allows gradual engagement with difficult material.\n\nPeople with depression often benefit from art therapy's ability to externalize negative thoughts and provide sensory engagement that counteracts the emotional numbness depression can cause. For anxiety disorders, the focused attention required during art-making can interrupt rumination cycles and provide a healthy outlet for excess energy and worry.\n\nMany art therapists work from a strengths-based perspective, helping clients discover and build upon their inherent capacities for resilience and growth. The visible record of artwork created over time can serve as powerful evidence of personal progress and change.\n\nCommon art therapy interventions include:\n\n- **Mandala creation**: Drawing within circular boundaries to promote focus and represent wholeness\n- **Body mapping**: Creating visual representations of physical sensations and emotions\n- **Collage work**: Using existing imagery to express feelings when creating from scratch feels too intimidating\n- **Mask-making**: Exploring different aspects of identity and the personas we present to others\n- **Visual journaling**: Combining images and words to process daily experiences\n\nWhile formal art therapy requires a certified art therapist, many of its principles can be incorporated into personal self-care practices. Creating a dedicated space for regular creative expression—without judgment or expectations—can provide many of the same benefits:\n\n1. **Start small**: Even 10-15 minutes of creative activity can provide mental health benefits\n2. **Focus on process, not product**: Remember, the goal is expression, not creating museum-worthy art\n3. **Experiment with materials**: Different media offer different experiences—fluid materials like watercolors can help access emotions, while structured materials like colored pencils provide more control\n4. **Notice without judgment**: Pay attention to your choices of color, pressure, imagery, and how the process makes you feel\n\nWhether engaged in formally with a therapist or as a personal practice, creative expression offers a valuable complement to traditional talk therapy and medication. In a world where we're often expected to articulate our feelings neatly, art provides a welcome reminder that human experience is complex, sometimes contradictory, and not always best expressed in words."
  },
  {
    id: "11",
    title: "Nutrition and Mental Health: How Diet Affects Your Mood",
    excerpt: "Emerging research shows that what you eat directly impacts your brain function and emotional state. Discover dietary approaches that support mental wellness.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1770&auto=format&fit=crop",
    category: "Nutrition",
    tags: ["Diet", "Food", "Brain Health"],
    readTime: "7 min",
    publishDate: "2023-08-08",
    content: "The connection between what we eat and how we feel emotionally has moved from folk wisdom to scientific fact. A rapidly growing body of research now confirms that nutrition significantly impacts mental health, offering new pathways for supporting psychological well-being alongside traditional approaches.\n\nThe emerging field of nutritional psychiatry examines how dietary patterns influence mental health conditions. Multiple studies have found that diets high in processed foods, refined sugars, and unhealthy fats correlate with higher rates of depression and anxiety. Conversely, diets rich in fresh produce, whole grains, lean proteins, and healthy fats are associated with lower risk of mental health disorders.\n\nThese connections make biological sense. The brain is the most metabolically active organ in the body, requiring a constant supply of nutrients to function optimally. Furthermore, about 95% of serotonin—a neurotransmitter that regulates mood, appetite, and sleep—is produced in the gastrointestinal tract, which is lined with neurons influenced by intestinal microbes (the gut microbiome).\n\nThese gut bacteria play a crucial role in health, affecting the production of neurotransmitters and the inflammatory response throughout the body. Diet directly shapes the microbiome's composition, potentially explaining the link between nutrition and mood disorders.\n\nInflammation represents another important pathway connecting diet and mental health. Processed foods high in sugar and unhealthy fats promote systemic inflammation, which has been strongly linked to depression. Anti-inflammatory foods like fatty fish, berries, and leafy greens may help counteract this effect.\n\nSpecific nutrients appear particularly important for brain health:\n\n**Omega-3 fatty acids**: Found in fatty fish, flaxseeds, and walnuts, these essential fats are crucial for brain cell structure and function. Multiple studies suggest omega-3 supplementation may help alleviate depression symptoms.\n\n**B vitamins**: Particularly folate (B9) and B12, these vitamins support the production of mood-regulating neurotransmitters. Deficiencies are associated with increased depression risk. Sources include leafy greens, legumes, and fortified grains.\n\n**Zinc and magnesium**: These minerals modulate the activity of NMDA receptors, which influence anxiety, depression, and learning. Sources include nuts, seeds, whole grains, and dark chocolate.\n\n**Probiotics and prebiotics**: Fermented foods containing probiotics (like yogurt, kimchi, and sauerkraut) and prebiotic fiber (found in onions, garlic, bananas, and oats) support gut health, potentially improving mood regulation.\n\n**Antioxidants**: Colorful fruits and vegetables contain polyphenols and other antioxidants that protect brain cells from oxidative stress. Berries, dark chocolate, and green tea are particularly rich sources.\n\nRather than focusing on individual nutrients, research suggests adopting overall healthy dietary patterns offers the greatest benefits. The Mediterranean diet—rich in vegetables, fruits, whole grains, olive oil, and lean proteins—shows particularly strong associations with reduced depression risk.\n\nImplementing dietary changes to support mental health is most effective with a gradual approach:\n\n1. **Focus on addition before subtraction**: Begin by adding nutrient-dense foods rather than eliminating favorites\n2. **Start with breakfast**: Morning meals particularly impact energy and mood throughout the day\n3. **Plan for challenges**: Identify potential obstacles and prepare strategies for navigating them\n4. **Notice connections**: Keep a simple food-mood journal to identify personal patterns between diet and emotional states\n\nImportantly, while nutrition can significantly support mental health, diet changes shouldn't replace appropriate medical care for mental health conditions. Instead, they offer a valuable complementary approach that addresses biological factors while potentially enhancing the effectiveness of conventional treatments.\n\nAs research in nutritional psychiatry continues to advance, the message becomes increasingly clear: what we eat doesn't just affect our physical health—it plays a fundamental role in how we think and feel."
  },
  {
    id: "12",
    title: "Trauma-Informed Care: Understanding the Impact of Past Experiences",
    excerpt: "Trauma shapes how we respond to the world. This article explores trauma-informed approaches to healing and building resilience.",
    image: "https://images.unsplash.com/photo-1603766682004-33b13760d6d4?q=80&w=1770&auto=format&fit=crop",
    category: "Trauma",
    tags: ["PTSD", "Recovery", "Resilience"],
    readTime: "10 min",
    publishDate: "2023-06-10",
    content: "Trauma-informed care represents a fundamental shift in how we understand human suffering and resilience. Rather than asking 'What's wrong with you?', this approach asks 'What happened to you?'—recognizing that many psychological and behavioral challenges originate in past traumatic experiences rather than personal defects or pathologies.\n\nTrauma itself is increasingly understood as any experience that overwhelms a person's capacity to cope, leaving them feeling helpless, frightened, or out of control. This can include obvious events like combat exposure, physical or sexual assault, or natural disasters. However, it also encompasses less visible forms like emotional neglect, witnessing violence, systemic discrimination, or the accumulation of smaller adverse experiences over time.\n\nThe groundbreaking Adverse Childhood Experiences (ACE) study demonstrated that childhood trauma significantly increases the risk of both mental and physical health problems throughout life. This research found dose-dependent relationships between traumatic experiences and later depression, substance use disorders, heart disease, and even early death.\n\nThese connections exist because trauma fundamentally changes how the brain and body function. The autonomic nervous system, which controls our fight-flight-freeze response, may remain chronically activated in people who've experienced trauma. This persistent state of physiological alertness contributes to anxiety, hypervigilance, sleep disturbances, and difficulty regulating emotions.\n\nThe impacts of trauma are often misunderstood or misdiagnosed. Hypervigilance may be labeled as paranoia, emotional dysregulation as bipolar disorder, or dissociation as inattentiveness. Trauma-informed approaches recognize these responses as adaptations that once helped survive threatening situations but may no longer serve the individual.\n\nTrauma-informed care is built on several core principles:\n\n**1. Safety**: Establishing environments—physical, emotional, social—where people feel secure and protected.\n\n**2. Trustworthiness and transparency**: Building relationships through clear communication and consistency.\n\n**3. Peer support**: Providing opportunities for connection with others who have similar experiences.\n\n**4. Collaboration**: Sharing power and decisions rather than imposing authority.\n\n**5. Empowerment**: Recognizing and building upon individual strengths rather than focusing solely on deficits.\n\n**6. Cultural, historical and gender considerations**: Acknowledging and addressing the specific contexts that shape traumatic experiences and responses.\n\nEffective trauma treatment often involves a phase-based approach:\n\n**Stabilization**: Learning to manage overwhelming emotions and establish safety before processing traumatic memories. Techniques like grounding, mindfulness, and emotion regulation skills provide essential foundations.\n\n**Processing**: Working through traumatic memories with evidence-based approaches such as Eye Movement Desensitization and Reprocessing (EMDR), Trauma-Focused Cognitive Behavioral Therapy, or Prolonged Exposure therapy. These approaches help the brain process and integrate traumatic experiences rather than remaining stuck in them.\n\n**Integration**: Developing a cohesive narrative that acknowledges traumatic experiences while recognizing they are past events rather than current threats. This phase focuses on post-traumatic growth and building a meaningful future.\n\nBeyond formal treatment, trauma-informed principles apply broadly across healthcare, education, social services, and even workplaces. Organizations implementing trauma-informed approaches train staff to recognize trauma symptoms, avoid practices that might retrigger traumatic responses, and create environments that support healing and resilience.\n\nFor individuals supporting trauma survivors, whether professionally or personally, several strategies are helpful:\n\n- Prioritize the person's choice and control whenever possible\n- Provide clear information about what to expect in any situation\n- Recognize that seemingly disproportionate reactions may be trauma responses rather than personal attacks\n- Maintain consistent boundaries that provide predictability and safety\n- Focus on strengths and resilience alongside vulnerabilities\n\nThe shift toward trauma-informed approaches represents not just a change in clinical practice, but a broader social recognition that human suffering often has understandable origins in lived experience. This perspective offers pathways to healing that honor both the pain of trauma and the remarkable human capacity for resilience and growth."
  },
  {
    id: "13",
    title: "Mindfulness Practices for Everyday Anxiety Management",
    excerpt: "Simple mindfulness techniques you can incorporate into your daily routine to reduce anxiety and increase your sense of calm and control.",
    image: "https://images.unsplash.com/photo-1520867012516-97b8b0b91e67?q=80&w=1770&auto=format&fit=crop",
    category: "Anxiety",
    tags: ["Mindfulness", "Stress", "Practices"],
    readTime: "6 min",
    publishDate: "2023-07-05",
    content: "In our constantly connected world, anxiety has become an increasingly common experience. While occasional anxiety is a normal part of life, persistent worry and fear can interfere with daily functioning and diminish quality of life. Mindfulness—the practice of bringing non-judgmental awareness to the present moment—offers accessible, evidence-based strategies for managing anxiety in everyday situations.\n\nRather than requiring extended meditation sessions, mindfulness can be integrated into daily activities in ways that are practical and immediately beneficial. Research suggests even brief mindfulness practices can reduce anxiety by activating the parasympathetic nervous system (the 'rest and digest' state) while helping us disengage from ruminative thought patterns that fuel anxiety.\n\nHere are science-backed mindfulness techniques specifically designed to manage anxiety in different contexts:\n\n**1. Mindful Breathing for Immediate Anxiety Relief**\n\nWhen anxiety spikes, the breath often becomes shallow and rapid, reinforcing the body's stress response. The 4-7-8 breathing technique can quickly shift this pattern:\n\n- Inhale quietly through your nose for 4 seconds\n- Hold your breath for 7 seconds\n- Exhale completely through your mouth for 8 seconds, making a whooshing sound\n- Repeat 3-4 times\n\nThis pattern helps regulate the autonomic nervous system and can be performed discreetly almost anywhere—during a stressful meeting, before an important conversation, or while stuck in traffic.\n\n**2. Body Scan for Physical Tension**\n\nAnxiety often manifests as physical tension that we carry unconsciously. A brief body scan helps release this tension:\n\n- Begin at the top of your head, bringing awareness to any tension in your scalp or forehead\n- Slowly move your attention downward through your body: jaw, neck, shoulders, arms, torso, hips, legs, and feet\n- At each area, notice any tension without trying to change it\n- After observing the tension, imagine breath flowing into that area as you inhale and the tension dissolving as you exhale\n- Continue until you've scanned your entire body\n\nThis practice can be done in as little as 3-5 minutes and is particularly helpful before sleep or during breaks.\n\n**3. The 5-4-3-2-1 Grounding Technique**\n\nWhen anxiety pulls you into worries about the future or rumination about the past, this sensory awareness exercise anchors you firmly in the present:\n\n- Notice 5 things you can see\n- Notice 4 things you can touch or feel (including the sensation of your clothes against your skin or your feet on the floor)\n- Notice 3 things you can hear\n- Notice 2 things you can smell (or like to smell)\n- Notice 1 thing you can taste (or like to taste)\n\nThis technique is particularly effective for anxiety that includes dissociative elements or racing thoughts.\n\n**4. Mindful Daily Activities**\n\nTransforming routine activities into mindfulness practices creates multiple opportunities throughout the day to step out of anxiety:\n\n**Mindful eating**: Choose one meal or snack daily to eat with full attention. Notice the appearance, smell, texture, and taste of the food. When your mind wanders to worries, gently bring it back to the sensory experience.\n\n**Mindful movement**: During exercise or simple activities like walking to your car, shift attention to the physical sensations—feet touching the ground, muscles engaging, breath moving.\n\n**Mindful transitions**: Use the moments between activities (entering/leaving your home, starting/ending work) as mindfulness bells. Take three conscious breaths and notice how you're feeling before moving to the next activity.\n\n**5. Brief Meditation for Anxiety Management**\n\nEven short, formal meditation practices can significantly reduce anxiety when done consistently:\n\n**Worry postponement meditation**: When caught in a worry cycle, set a timer for 3-5 minutes. During this time, allow yourself to fully experience any anxious thoughts without trying to solve them. Notice where you feel anxiety in your body. When the timer ends, consciously decide whether to take action on the worry or return to it during a dedicated 'worry time' later.\n\n**Loving-kindness for anxiety**: Anxiety often includes self-criticism. Counteract this by sitting quietly for a few minutes and repeating phrases like: \"May I be safe. May I be peaceful. May I be kind to myself in this difficult moment.\"\n\nFor maximum benefit, approach mindfulness with an attitude of curiosity rather than as another task to perfect. Each moment of mindful awareness—even just a few conscious breaths—interrupts anxiety's momentum and creates space for a different response. Over time, these small practices build a more resilient relationship with anxiety, where we can acknowledge difficult feelings without being overwhelmed by them."
  }
];

const categories = [
  "All",
  "Depression",
  "Anxiety",
  "Mindfulness",
  "Therapy",
  "Self-Care",
  "Trauma",
  "Grief",
  "Relationships",
  "Nutrition",
  "Sleep",
  "Digital Wellness",
  "Awareness"
];

// DOM Elements
const categoryFiltersContainer = document.getElementById('category-filters');
const articlesGrid = document.getElementById('articles-grid');
const featuredArticleContainer = document.getElementById('featured-article');
const loadMoreBtn = document.getElementById('load-more-btn');
const noArticlesMessage = document.getElementById('no-articles');
const currentYearSpan = document.getElementById('current-year');
const articleModal = document.getElementById('article-modal');
const closeModalBtn = document.querySelector('.close-modal');
const articleDetailContent = document.getElementById('article-detail-content');

// Global variables
let selectedCategory = "All";
let filteredArticles = [];
let visibleCount = 6;
const featuredArticle = articles.find(article => article.featured);

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  currentYearSpan.textContent = new Date().getFullYear();
  
  // Initialize category filters
  initializeCategoryFilters();
  
  // Load featured article
  loadFeaturedArticle();
  
  // Filter articles and display initial set
  filterArticles();
  
  // Add event listeners
  addEventListeners();
});

// Initialize category filters
function initializeCategoryFilters() {
  categories.forEach(category => {
    const categoryBtn = document.createElement('button');
    categoryBtn.classList.add('category-pill');
    categoryBtn.textContent = category;
    
    if (category === selectedCategory) {
      categoryBtn.classList.add('active');
    }
    
    categoryBtn.addEventListener('click', () => {
      // Update active class
      document.querySelectorAll('.category-pill').forEach(btn => {
        btn.classList.remove('active');
      });
      categoryBtn.classList.add('active');
      
      // Update selected category
      selectedCategory = category;
      
      // Reset visible count
      visibleCount = 6;
      
      // Filter articles
      filterArticles();
    });
    
    categoryFiltersContainer.appendChild(categoryBtn);
  });
}

// Load featured article
function loadFeaturedArticle() {
  if (featuredArticle) {
    const featuredHtml = `
      <div class="featured-img-container">
        <img src="${featuredArticle.image}" alt="${featuredArticle.title}" class="featured-img">
      </div>
      <div class="featured-content">
        <span class="featured-category">${featuredArticle.category}</span>
        <h3 class="featured-title">${featuredArticle.title}</h3>
        <p class="featured-excerpt">${featuredArticle.excerpt}</p>
        <div class="featured-meta">
          <div class="read-time">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
            <span>${featuredArticle.readTime} read</span>
          </div>
          <a href="#" class="read-more" data-id="${featuredArticle.id}">Read more →</a>
        </div>
      </div>
    `;
    
    featuredArticleContainer.innerHTML = featuredHtml;
    
    // Add event listener to the "Read more" link
    featuredArticleContainer.querySelector('.read-more').addEventListener('click', (event) => {
      event.preventDefault();
      const articleId = event.target.getAttribute('data-id');
      openArticleDetail(articleId);
    });
  }
}

// Filter articles based on selected category
function filterArticles() {
  // Filter articles
  filteredArticles = articles.filter(article => {
    if (featuredArticle && article.id === featuredArticle.id) {
      return false; // Exclude featured article
    }
    
    return selectedCategory === "All" || article.category === selectedCategory;
  });
  
  // Display articles
  displayArticles();
}

// Display articles in the grid
function displayArticles() {
  // Clear grid
  articlesGrid.innerHTML = '';
  
  // Check if there are any articles to display
  if (filteredArticles.length === 0) {
    loadMoreBtn.style.display = 'none';
    noArticlesMessage.style.display = 'block';
    return;
  }
  
  // Hide "no articles" message
  noArticlesMessage.style.display = 'none';
  
  // Display articles up to the visible count
  const articlesToShow = filteredArticles.slice(0, visibleCount);
  
  articlesToShow.forEach((article, index) => {
    const articleCard = document.createElement('div');
    articleCard.classList.add('article-card');
    articleCard.classList.add('fade-in');
    articleCard.style.animationDelay = `${0.1 * index}s`;
    
    articleCard.innerHTML = `
      <div class="article-img-container">
        <img src="${article.image}" alt="${article.title}" class="article-img">
      </div>
      <span class="article-category">${article.category}</span>
      <h3 class="article-title">${article.title}</h3>
      <p class="article-excerpt">${article.excerpt}</p>
      <div class="article-meta">
        <div class="article-read-time">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
          <span>${article.readTime} read</span>
        </div>
        <a href="#" class="article-read-more" data-id="${article.id}">Read more →</a>
      </div>
    `;
    
    articlesGrid.appendChild(articleCard);
  });
  
  // Add event listeners to the "Read more" links
  document.querySelectorAll('.article-read-more').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const articleId = event.target.getAttribute('data-id');
      openArticleDetail(articleId);
    });
  });
  
  // Show or hide "Load More" button
  if (visibleCount < filteredArticles.length) {
    loadMoreBtn.style.display = 'inline-block';
  } else {
    loadMoreBtn.style.display = 'none';
  }
}

// Open article detail modal
function openArticleDetail(articleId) {
  const article = articles.find(article => article.id === articleId);
  
  if (article) {
    articleDetailContent.innerHTML = `
      <img src="${article.image}" alt="${article.title}" class="article-detail-image">
      <div class="article-detail-content">
        <h1 class="article-detail-title">${article.title}</h1>
        <div class="article-detail-meta">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
          <span>${article.readTime} read</span>
        </div>
        <div class="article-detail-text">
          ${formatContent(article.content)}
        </div>
        <a href="#" class="back-to-articles" id="close-detail">Back to Articles</a>
      </div>
    `;
    
    // Show modal
    articleModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Add event listener to the "Back to Articles" button
    document.getElementById('close-detail').addEventListener('click', (event) => {
      event.preventDefault();
      closeArticleDetail();
    });
  }
}

// Format article content with paragraphs
function formatContent(content) {
  if (!content) return '';
  return content.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('');
}

// Close article detail modal
function closeArticleDetail() {
  articleModal.style.display = 'none';
  document.body.style.overflow = ''; // Restore scrolling
}

// Add global event listeners
function addEventListeners() {
  // Load more articles
  loadMoreBtn.addEventListener('click', () => {
    visibleCount += 3;
    displayArticles();
  });
  
  // Close modal when clicking the X
  closeModalBtn.addEventListener('click', closeArticleDetail);
  
  // Close modal when clicking outside of content
  window.addEventListener('click', (event) => {
    if (event.target === articleModal) {
      closeArticleDetail();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && articleModal.style.display === 'block') {
      closeArticleDetail();
    }
  });
  
  // Mobile menu toggle (placeholder)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      alert(`Thank you for subscribing with ${emailInput.value}! You'll receive our next newsletter soon.`);
      emailInput.value = '';
    });
  }
}