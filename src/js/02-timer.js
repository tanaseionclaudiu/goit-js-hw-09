// Descris în documentație
import flatpickr from 'flatpickr';
// Import suplimentar de stil
import 'flatpickr/dist/flatpickr.min.css';

import '../css/timer.css';



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const myInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const timerDays = document.querySelector('span[data-days]')
const timerHous = document.querySelector('span[data-hours]')
const timerMinutes = document.querySelector('span[data-minutes]')
const timerSeconds = document.querySelector('span[data-seconds]')

startButton.disabled = true;
let timerValues = {};
let timerId = 0;

// Otherwise, selectors are also supported
const fp = flatpickr(myInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZeros(num, totalLength = 2) {
    return String(num).padStart(totalLength, '0');
}



function checkDate() {
    const selectedDate = fp.selectedDates[0];

    // selected date in miliseconds
    const unixSelectedDate = new Date(selectedDate);      

    // current date in miliseconds
    const unixNow = Date.now();       

    // dt in unix
    const unixDt = unixSelectedDate - unixNow;

    if (unixDt < 0){
        window.alert('Date is in the past!');
        startButton.disabled = true;
        return false;
    }

    startButton.disabled = false;

    // actualizare variabila globală
    timerValues = convertMs(unixDt); 
}

myInput.addEventListener('change', checkDate);


function updateTimer() {

    const { days, hours, minutes, seconds } = timerValues;

    timerDays.textContent = addLeadingZeros(days,2);
    timerHous.textContent = addLeadingZeros(hours);
    timerMinutes.textContent = addLeadingZeros(minutes);
    timerSeconds.textContent = addLeadingZeros(seconds);

    // console.log(`Days : ${days}; Hours : ${hours}; Minutes : ${minutes}; Seconds : ${seconds}; `);
 }


 function startTimerAnimation() {
    timerId = setInterval(() => {
        checkDate();
        updateTimer();
    }, 1000);
  }

 startButton.addEventListener('click', () => {
    checkDate();
    updateTimer();
    startTimerAnimation();
    startButton.disabled = true;
  });
  
