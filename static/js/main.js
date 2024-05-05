document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('.main-content');
    const sidebarr = document.querySelector('.sidebar');
    // Add event listener for mouseover on main content
    mainContent.addEventListener('mouseover', function() {
      // Remove the 'activee' class from the sidebar
      sidebarr.classList.remove('activee');
    });
  });
  