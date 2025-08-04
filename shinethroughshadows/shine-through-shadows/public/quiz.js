document.getElementById('quiz-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const responses = {};

  for (let [key, value] of formData.entries()) {
    responses[key] = value;
  }

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
    alert("User not logged in.");
    return;
  }

  try {
    const res = await fetch('http://localhost:3000/api/submit-quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: currentUser.email, responses }),
    });

    const result = await res.json();
    console.log('Quiz submission result:', result);

    if (res.ok) {
      if (!result.report || !result.report.recommendations) {
        console.error('Invalid report data received:', result);
        alert('Error: Invalid report data received. Please try again.');
        return;
      }

      console.log('Saving report to localStorage:', result.report);
      localStorage.setItem('latestReport', JSON.stringify(result.report));
      window.location.href = 'report.html';
    } else {
      console.error('Error submitting quiz:', result.error);
      alert(result.error || 'Could not submit quiz.');
    }
  } catch (err) {
    console.error('Error submitting quiz:', err);
    alert('Could not submit quiz.');
  }
});

