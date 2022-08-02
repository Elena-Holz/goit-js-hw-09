import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const currentData = new Date();

const daysTimer = document.querySelector('span[data-days]');
const hoursTimer = document.querySelector('span[data-hours]');
const minutesTimer = document.querySelector('span[data-minutes]');
const secondsTimer = document.querySelector('span[data-seconds]');
const startButton = document.querySelector('button[data-start]');

startButton.disabled = false;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < currentData) {
      Notify.warning("Please choose a date in the future");
    }
    startButton.addEventListener('click', () => {
      setInterval(() => {
        const deadlineTime = selectedDates[0]- Date.now();
        const timer = convertMs(deadlineTime);
        console.log(timer);
      }, 1000);
      startButton.disabled = true;
      
    });      
  },
}

const flatpickrEl = flatpickr("#datetime-picker", options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  daysTimer.textContent = days;
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  hoursTimer.textContent = hours;
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  minutesTimer.textContent = minutes;
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  secondsTimer.textContent = seconds;
  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000));