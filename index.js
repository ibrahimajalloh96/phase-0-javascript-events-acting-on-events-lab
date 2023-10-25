function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const currentLeft = parseInt(dodger.style.left) || 0;
    const newLeft = currentLeft - 10;
    
    if (newLeft >= 0) {
      dodger.style.left = newLeft + 'px';
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const currentLeft = parseInt(dodger.style.left) || 0;
    const newLeft = currentLeft + 10;
    const containerWidth = 400; // Set this to the width of your container
    
    if (newLeft <= containerWidth - 40) {
      dodger.style.left = newLeft + 'px';
    }
  }
  
  // Add an event listener for left arrow key (key code 37)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      moveDodgerLeft();
    }
  });
  
  // Add an event listener for right arrow key (key code 39)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
  