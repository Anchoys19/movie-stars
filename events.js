// 1. Handler function for mouse events (to be assigned through property)
function handleMouseEvent(event) {
    console.log(`Mouse event triggered: ${event.type}`);
    this.style.borderColor = "darkred";
    
    // Reset after 1 second
    setTimeout(() => {
      this.style.borderColor = "";
    }, 1000);
  }
  
  // 2. Object handler with handleEvent method
  const buttonHandler = {
    handleEvent(event) {
      console.log(`Event handled by object: ${event.type}`);
      console.log(`Element that triggered event:`, event.currentTarget);
      
      // Add visual feedback
      event.currentTarget.style.backgroundColor = "rgba(139, 0, 0, 0.2)";
      
      // Reset after 1 second
      setTimeout(() => {
        event.currentTarget.style.backgroundColor = "";
      }, 1000);
    }
  };
  
  // Set up all event handlers when document loads
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Setting up event handlers');
    
    // Get common elements we want to apply events to
    const header = document.querySelector('.header');
    const contentSection = document.querySelector('.content-section');
    
    // Method 1: Assign handler through property
    header.onmouseover = handleMouseEvent;
    
    // Method 2: Use addEventListener for multiple handlers on same event
    contentSection.addEventListener('click', function(event) {
      console.log('First click handler for content section');
      this.style.backgroundColor = "rgba(0, 0, 139, 0.05)";
    });
    
    contentSection.addEventListener('click', function(event) {
      console.log('Second click handler for content section');
      
      // Reset background after 1 second
      setTimeout(() => {
        this.style.backgroundColor = "";
      }, 1000);
    });
    
    // Method 3: Use object as handler with handleEvent
    const interactiveButtons = document.querySelector('.interactive-buttons');
    if (interactiveButtons) {
      console.log('Setting up interactive buttons handler');
      interactiveButtons.addEventListener('mouseover', buttonHandler);
      
      // Example of removing event listener after 10 seconds
      setTimeout(() => {
        console.log('Removing event listener from interactive buttons');
        interactiveButtons.removeEventListener('mouseover', buttonHandler);
        
        // Add a notification that the handler was removed
        const notification = document.createElement('div');
        notification.className = 'announcement';
        notification.textContent = 'MouseOver handler removed from buttons!';
        interactiveButtons.after(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => notification.remove(), 3000);
      }, 10000); 
    }
    
    // Part 2: List item highlighting with event delegation
    const filmLists = document.querySelectorAll('.film-list');
    filmLists.forEach(filmList => {
      filmList.addEventListener('click', function(event) {
        // Check if we clicked on a list item
        if (event.target.tagName === 'LI') {
          console.log('List item clicked:', event.target.textContent);
          
          // Remove highlight from all items in this list
          const items = this.querySelectorAll('li');
          items.forEach(item => {
            item.classList.remove('highlighted');
          });
          
          // Add highlight to clicked item
          event.target.classList.add('highlighted');
        }
      });
    });
    
    // Part 2: Menu with data-* attributes for behavior technique
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
      navMenu.addEventListener('click', function(event) {
        // Check if clicked element has data-action attribute
        const action = event.target.dataset.action;
        if (action) {
          console.log(`Action triggered: ${action}`);
          event.preventDefault(); // Prevent default link behavior for demonstration
          
          // Call the appropriate function based on data-action value
          switch(action) {
            case 'home':
              goToHome();
              break;
            case 'info':
              showInfo(event.target.dataset.actorName);
              break;
            case 'toggle-theme':
              toggleTheme();
              break;
            default:
              console.log('Unknown action:', action);
          }
        }
      });
    }
  });
  
  // Helper functions for data-action behaviors
  
  // Navigate to home page
  function goToHome() {
    console.log('Going to home page');
    // For demonstration, show alert instead of actual navigation
    alert('Home action triggered! This would navigate to index.html');
    // Uncomment for actual navigation:
    window.location.href = "index.html";
  }
  
  // Show info about an actor
  function showInfo(actorName) {
    console.log('Showing info for:', actorName);
    alert(`You requested information about ${actorName || 'this actor'}`);
  }
  
  // Toggle between light and dark theme
  function toggleTheme() {
    console.log('Toggling theme');
    document.body.classList.toggle('dark-theme');
    
    const themeName = document.body.classList.contains('dark-theme') ? 'Dark' : 'Light';
    
    // Show a temporary notification
    const notification = document.createElement('div');
    notification.className = 'announcement';
    notification.textContent = `Switched to ${themeName} Theme!`;
    document.querySelector('.container').appendChild(notification);
    
    // Remove notification after 2 seconds
    setTimeout(() => notification.remove(), 2000);
  }

