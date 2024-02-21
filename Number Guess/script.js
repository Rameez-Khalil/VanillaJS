'use strict';
const reference = document.querySelector('.message');
reference.textContent = '20';
console.log(reference.value);

// Setting up an event.
document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = document.querySelector('.guess').value;

  //   When we don't have any value.
  if (!guessedNumber) {
    document.querySelector('.message').textContent = 'No Number';
  }
});
