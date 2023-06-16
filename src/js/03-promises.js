const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delay = getInputValue('delay');
  const step = getInputValue('step');
  const amount = getInputValue('amount');

  createPromises(delay, step, amount);
}

function getInputValue(name) {
  return parseInt(form.elements[name].value);
}

function createPromises(delay, step, amount) {
  let currentDelay = delay;

  for (let position = 1; position <= amount; position++) {
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    currentDelay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

