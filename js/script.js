'ues strict';

const formRadio = document.querySelectorAll('.form__input-radio'),
      formFiz = document.querySelector('.card-fiz__form');

formFiz.addEventListener('click', function(event) {
  for (let i = 0; i < formRadio.length; i++) {
    if (formRadio[i].checked) {
      formRadio[i].nextElementSibling.nextElementSibling.disabled = true;
      formRadio[i].nextElementSibling.nextElementSibling.value = '';
    } else {
      formRadio[i].nextElementSibling.nextElementSibling.disabled = false;
    }
  }
});

formFiz.addEventListener('submit', function() {
  event.preventDefault();
  if (formRadio[2].checked) {
    const result = (this.inputWater.value / 100) * this.inputPer.value;
    this.inputSalt.value = result;
  }

  if (formRadio[0].checked) {
    const result = (100 / this.inputWater.value) * this.inputSalt.value;
    this.inputPer.value = result;
  }

  if (formRadio[1].checked) {
    const result = this.inputSalt.value * 100 / this.inputPer.value;
    this.inputWater.value = result;
  }
});
