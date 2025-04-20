const crowdData = {
    MON: [5, 10, 20, 35, 55, 75, 70, 60, 50, 30, 20, 10],
    TUE: [5, 10, 20, 40, 60, 80, 75, 65, 45, 25, 15, 10],
    WED: [5, 10, 15, 30, 50, 75, 80, 70, 60, 40, 25, 10],
    THU: [5, 10, 20, 30, 55, 75, 70, 60, 40, 25, 15, 10],
    FRI: [5, 10, 20, 30, 50, 65, 60, 45, 30, 20, 10, 5],
    SAT: [5, 5, 10, 20, 40, 60, 70, 65, 50, 30, 15, 10],
    SUN: [5, 5, 10, 10, 15, 20, 30, 45, 60, 75, 80, 85]
  };
  
  const buttons = document.querySelectorAll('.day-labels span');
  const bars = document.querySelectorAll('.bar');
  let activeDay = 'MON';
  
  function updateChart(day) {
    const values = crowdData[day];
    values.forEach((value, index) => {
      const bar = bars[index];
      bar.style.height = `${value}px`;
      bar.classList.remove('green', 'yellow', 'red');
      if (value <= 30) bar.classList.add('green');
      else if (value <= 60) bar.classList.add('yellow');
      else bar.classList.add('red');
    });
  
    buttons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.textContent === day) btn.classList.add('active');
    });
  }
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      activeDay = button.textContent;
      updateChart(activeDay);
    });
  });
  
  updateChart(activeDay);
  
  // Check In
  // Check In
const checkinBtn = document.getElementById('checkin-btn');
const checkinMsg = document.getElementById('checkin-msg');
const statusBar = document.getElementById('status-bar');

if (checkinBtn) {
  checkinBtn.addEventListener('click', () => {
    // Update Busy Bar (the yellow bar at top)
    let currentWidth = parseFloat(statusBar.style.width) || 60;
    let newWidth = Math.min(currentWidth + 10, 100);
    statusBar.style.width = `${newWidth}%`;

    // Update Crowd Chart
    const hour = new Date().getHours();
    const index = Math.floor(hour / 2);
    const bar = bars[index];

    let current = parseInt(bar.style.height);
    let newHeight = Math.min(current + 10, 100);
    bar.style.height = `${newHeight}px`;

    bar.classList.remove('green', 'yellow', 'red');
    if (newHeight <= 30) bar.classList.add('green');
    else if (newHeight <= 60) bar.classList.add('yellow');
    else bar.classList.add('red');

    // Show feedback
    checkinMsg.style.display = 'block';
  });
}
