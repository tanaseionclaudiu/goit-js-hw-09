const button = document.querySelector('button');
const delay = document.querySelector("input[name = 'delay']");
const step = document.querySelector("input[name = 'step']");
const amount = document.querySelector("input[name = 'amount']");

button.addEventListener('click', 
  function(e) { 
    e.preventDefault();
    const delayVal = parseInt(delay.value);
    const stepVal = parseInt(step.value);
    const amountVal = parseInt(amount.value);
    let currentDelay = delayVal;
    for (let i = 0; i < amountVal; i++) {
      createPromise(i, currentDelay)
        .then(({ position, delay }) => {
          console.log(`\u2705 Fulfilled promise ${position + 1} in ${delay} ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`\u274c Rejected promise ${position + 1} in ${delay} ms`);
        });
      currentDelay += stepVal;
    }
  }
);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ position, delay });
      }, delay);
    });
  } else {
    //console.log(`Reject promise #${position}`)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ position, delay });
      }, delay);
    });
  }
}



/*
    event.preventDefault()

    setTimeout( () => {
        const amountValue = amount.value;

        for (let i = 1; i <= amountValue; i = i + 1 ) {
          const delay = delayStep.value * (i - 1);        
          setTimeout( () => {
            console.log(`Create Promise ${i} with ${parseInt(firstDelay.value) + delay}ms delay`);
              createPromise(i, parseInt(firstDelay.value) + delay)
            }
            , delay
          )
        }
    }
    , firstDelay.value
    )
}
    */
  





// const createPromise = (position, delay) => new Promise( (resolve, reject) => {
  
//   const shouldResolve = Math.random() > 0.3;
//   //console.log(`Promise #${position} is ${shouldResolve}`);
//   const returnedData = {
//     position: position,
//     delay: delay
//   };

//   if (shouldResolve) {
//     resolve(returnedData)
//   } else {
//     reject(returnedData)
//   }

// })




// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   console.log(`${(shouldResolve ? 'Fulfilled' : 'Rejected')} promise ${position} in ${delay}ms`)
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

