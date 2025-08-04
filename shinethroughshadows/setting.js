// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const menuItems = document.querySelectorAll('.menu-item');
  const settingsSections = document.querySelectorAll('.settings-section');
  const logoutBtn = document.getElementById('logout-btn');
  const logoutModal = document.getElementById('logout-modal');
  const cancelLogoutBtn = document.getElementById('cancel-logout');
  const confirmLogoutBtn = document.getElementById('confirm-logout');
  const closeModalBtn = document.querySelector('.close-modal');
  const themeOptions = document.querySelectorAll('.theme-option');
  const fontOptions = document.querySelectorAll('.font-option');
  
  // Toggle between settings sections
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all menu items
      menuItems.forEach(mi => mi.classList.remove('active'));
      // Add active class to clicked menu item
      this.classList.add('active');
      
      // Hide all settings sections
      settingsSections.forEach(section => section.classList.remove('active'));
      
      // Show the corresponding settings section
      const sectionId = this.getAttribute('data-section');
      document.getElementById(sectionId).classList.add('active');
    });
  });
  
  // Handle theme selection
  themeOptions.forEach(option => {
    option.addEventListener('click', function() {
      // Remove active class from all theme options
      themeOptions.forEach(opt => opt.classList.remove('active'));
      // Add active class to clicked theme option
      this.classList.add('active');
    });
  });
  
  // Handle font size selection
  fontOptions.forEach(option => {
    option.addEventListener('click', function() {
      // Remove active class from all font options
      fontOptions.forEach(opt => opt.classList.remove('active'));
      // Add active class to clicked font option
      this.classList.add('active');
    });
  });
  
  // Show logout confirmation modal
  logoutBtn.addEventListener('click', function() {
    logoutModal.style.display = 'block';
  });
  
  // Hide logout confirmation modal
  function hideModal() {
    logoutModal.style.display = 'none';
  }
  
  // Close modal when clicking the close button
  closeModalBtn.addEventListener('click', hideModal);
  
  // Close modal when clicking cancel button
  cancelLogoutBtn.addEventListener('click', hideModal);
  
  // Logout user when clicking confirm button
  confirmLogoutBtn.addEventListener('click', function() {
    // Simulate logout - in a real app, this would handle session termination
    console.log('User logged out');
    // Redirect to home page
    window.location.href = 'index.html';
  });
  
  // Close modal when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === logoutModal) {
      hideModal();
    }
  });
  
  // Handle form submissions
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Show a success message (in a real app, this would save the data)
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.textContent = 'Changes saved successfully!';
      successMessage.style.padding = '0.75rem';
      successMessage.style.marginTop = '1rem';
      successMessage.style.backgroundColor = 'rgba(117, 230, 218, 0.2)';
      successMessage.style.color = '#05445e';
      successMessage.style.borderRadius = '0.25rem';
      successMessage.style.animation = 'fadeIn 0.3s ease-out';
      
      // Add success message after the form
      this.appendChild(successMessage);
      
      // Remove success message after 3 seconds
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
    });
  });
  
  // Add animations to settings elements
  document.querySelectorAll('.settings-section:not(.active)').forEach(section => {
    section.style.display = 'none';
  });
});