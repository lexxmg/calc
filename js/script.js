'ues strict';

const formFiz = document.querySelector('.card-fiz__form');

formFiz.addEventListener('click', function(event) {
  const radio = this.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      radio[i].nextElementSibling.nextElementSibling.disabled = true;
      radio[i].nextElementSibling.nextElementSibling.value = '';
    } else {
      radio[i].nextElementSibling.nextElementSibling.disabled = false;
    }
  }
});

formFiz.addEventListener('submit', function() {
  event.preventDefault();
  if (this.querySelector('#salt-radio').checked) {
    const result = (this.inputWater.value / 100) * this.inputPer.value;
    this.inputSalt.value = result;
  }

  if (this.querySelector('#per-radio').checked) {
    const result = (100 / this.inputWater.value) * this.inputSalt.value;
    this.inputPer.value = result;
  }

  if (this.querySelector('#water-radio').checked) {
    const result = this.inputSalt.value * 100 / this.inputPer.value;
    this.inputWater.value = result;
  }
});
