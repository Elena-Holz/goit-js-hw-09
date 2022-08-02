import { Notify } from 'notiflix/build/notiflix-notify-aio';


const formRef = document.querySelector('.form');

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target;
  console.log(delay.value);
  console.log(step.value);
  console.log(amount.value);
  let amountNumber = Number(amount.value);
 let stepNumber = Number(step.value);
   let delayNumber = Number(delay.value);
  for (let i = 1; i <= amountNumber; i += 1) {
    createPromise(i, delayNumber).then(onSuccess).catch(onError);
    delayNumber += stepNumber;
  }
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
    if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay})
  }}, delay)
  })
}onError

function onSuccess({ position, delay }) {
  Notify.success('✅ Fulfilled promise ${position} in ${delay}ms')
};
function onError({ position, delay }) {
  Notify.failure('❌ Rejected promise ${position} in ${delay}ms')
}