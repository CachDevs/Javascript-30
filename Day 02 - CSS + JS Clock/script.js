const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
  const now = new Date();

  // Calculate hours
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  const hourDegrees90 = false;

  // Calculate minutes
  const min = now.getMinutes();
  const minDegrees = ((min / 60) * 360) + 90;
  const minDegrees90 = false;

  // Calculate seconds
  const second = now.getSeconds();
  const secondDegrees = ((second / 60) * 360) + 90;
  const secondDegrees90 = false;

  // Moving
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(setDate, 1000);
