const button = document.querySelector('button');
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

button.addEventListener('click', 
  function(event) { 
 
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
);


const createPromise = (position, delay) => new Promise( (resolve, reject) => {
  
  const shouldResolve = Math.random() > 0.3;
  //console.log(`Promise #${position} is ${shouldResolve}`);
  const returnedData = {
    position: position,
    delay: delay
  };

  if (shouldResolve) {
    resolve(returnedData)
  } else {
    reject(returnedData)
  }

})




// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   console.log(`${(shouldResolve ? 'Fulfilled' : 'Rejected')} promise ${position} in ${delay}ms`)
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

