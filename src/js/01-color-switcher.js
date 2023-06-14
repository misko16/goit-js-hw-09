function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  const body = document.body;
  let intervalId;

  function startColorChange() {
    if (intervalId) return;
    startButton.disabled = true; 
    intervalId = setInterval(function() {
      body.style.backgroundColor = getRandomHexColor(); 
    }, 1000);
  }

  function stopColorChange() {
    clearInterval(intervalId); 
    intervalId = null;
    startButton.disabled = false; 
  }

  startButton.addEventListener('click', startColorChange);
  stopButton.addEventListener('click', stopColorChange);