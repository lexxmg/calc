'ues strict';

const formFiz = document.querySelector('.card-fiz__form');

formFiz.addEventListener('click', function(event) {
  const radio = this.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      radio[i].nextElementSibling.nextElementSibling.disabled = true;
      if (!radio[i].nextElementSibling.nextElementSibling.dataset.on) {
        radio[i].nextElementSibling.nextElementSibling.value = '';
      }
    } else {
      radio[i].nextElementSibling.nextElementSibling.disabled = false;
      radio[i].nextElementSibling.nextElementSibling.removeAttribute('data-on');
    }
  }
});

formFiz.addEventListener('submit', function() {
  event.preventDefault();
  if (this.querySelector('#salt-radio').checked) {
    const result = (this.inputWater.value / 100) * this.inputPer.value;
    this.inputSalt.value = result;
    this.inputSalt.dataset.on = 'on';
  }

  if (this.querySelector('#per-radio').checked) {
    const result = (100 / this.inputWater.value) * this.inputSalt.value;
    this.inputPer.value = result;
    this.inputPer.dataset.on = 'on';
  }

  if (this.querySelector('#water-radio').checked) {
    const result = this.inputSalt.value * 100 / this.inputPer.value;
    this.inputWater.value = result;
    this.inputWater.dataset.on = 'on';
  }
});
