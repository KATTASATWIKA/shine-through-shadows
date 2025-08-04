document.addEventListener('DOMContentLoaded', function () {
  const getStartedBtn = document.getElementById('get-started-btn');
  const authContainer = document.getElementById('auth-container');
  const switchToRegister = document.getElementById('switch-to-register');
  const switchToLogin = document.getElementById('switch-to-login');
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const loginBox = document.querySelector('.form-box.login');
  const registerBox = document.querySelector('.form-box.register');
  const togglePasswordBtns = document.querySelectorAll('.toggle-password');
  const registrationSteps = document.querySelectorAll('.registration-step');
  const nextButtons = document.querySelectorAll('.next-step');
  const prevButtons = document.querySelectorAll('.prev-step');
  const progressBar = document.querySelector('.progress-bar-inner');
  let currentStep = 0;

  // Toggle password visibility
  togglePasswordBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const inputId = this.getAttribute('data-for');
      const input = document.getElementById(inputId);
      if (input.type === 'password') {
        input.type = 'text';
        this.textContent = '👁️‍🗨️';
      } else {
        input.type = 'password';
        this.textContent = '👁️';
      }
    });
  });

  // Get Started button click
  getStartedBtn?.addEventListener('click', function () {
    authContainer.classList.add('active');
  });

  // Close auth modal
  authContainer?.addEventListener('click', function (e) {
    if (e.target === authContainer) {
      authContainer.classList.remove('active');
    }
  });

  // Switch to register
  switchToRegister?.addEventListener('click', function (e) {
    e.preventDefault();
    loginBox.classList.add('hide');
    registerBox.classList.remove('hide');
  });

  // Switch to login
  switchToLogin?.addEventListener('click', function (e) {
    e.preventDefault();
    registerBox.classList.add('hide');
    loginBox.classList.remove('hide');
  });

  // Next registration step
  nextButtons.forEach(button => {
    button.addEventListener('click', function () {
      const step = registrationSteps[currentStep];
      const inputs = step.querySelectorAll('input, select, textarea');
      let valid = true;

      inputs.forEach(input => {
        if (input.required && !input.value) {
          input.classList.add('error');
          valid = false;
        } else {
          input.classList.remove('error');
        }
      });

      if (!valid) return;

      registrationSteps[currentStep].classList.add('hide');
      currentStep++;
      registrationSteps[currentStep].classList.remove('hide');
      const progress = ((currentStep + 1) / registrationSteps.length) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;
    });
  });

  // Previous registration step
  prevButtons.forEach(button => {
    button.addEventListener('click', function () {
      registrationSteps[currentStep].classList.add('hide');
      currentStep--;
      registrationSteps[currentStep].classList.remove('hide');
      const progress = ((currentStep + 1) / registrationSteps.length) * 100;
      if (progressBar) progressBar.style.width = `${progress}%`;
    });
  });

  // Register form submit
  registerForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById('register-name').value.trim(),
      email: document.getElementById('register-email').value.trim(),
      password: document.getElementById('register-password').value,
      age: parseInt(document.getElementById('register-age').value),
      gender: document.getElementById('register-gender').value,
      medicalHistory: document.getElementById('medical-history').value.trim(),
      currentMedications: document.getElementById('current-medications').value.trim(),
      preferences: {
        notificationFrequency: document.querySelector('input[name="notification-frequency"]:checked')?.value || 'daily',
        therapyPreference: document.querySelector('input[name="therapy-preference"]:checked')?.value || 'self',
        activityReminders: document.getElementById('activity-reminders').checked,
      },
      registrationDate: new Date().toISOString(),
    };

    const confirmPassword = document.getElementById('register-confirm').value;
    if (formData.password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        // ✅ Store user in localStorage immediately
        localStorage.setItem('currentUser', JSON.stringify({
          name: formData.name,
          email: formData.email,
          quizCompleted: false,
          quizScore: 0
        }));

        alert('Registration successful! Redirecting to quiz...');
        window.location.href = 'quiz.html';
      } else {
        alert(result.error);
      }
    } catch (err) {
      console.error(err);
      alert('Registration failed: Server not reachable.');
    }
  });

  // Login form submit
  loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        localStorage.setItem('currentUser', JSON.stringify(result.user));
        alert('Login successful! Redirecting...');
        window.location.href = 'dashboard.html';
      } else {
        alert(result.error || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('Login failed: Server not reachable.');
    }
  });

  // Logo animation
  const logoText = document.querySelector('.logo-text');
  if (logoText) {
    logoText.innerHTML = logoText.textContent
      .split('')
      .map(
        char =>
          char === ' '
            ? ' '
            : `<span class="animate-float" style="animation-delay: ${Math.random() * 2}s; display: inline-block;">${char}</span>`
      )
      .join('');
  }
});
