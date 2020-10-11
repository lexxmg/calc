'ues strict';

const container = document.querySelector('.container');

container.addEventListener('input', event => {
  event.preventDefault();
  const target = event.target;
  const form = target.closest('form');
  const a = form.in[0],
        b = form.in[1],
        c = form.in[2];

  if (form.radio[2].checked) {
      const result = (b.value / 100) * a.value;
      c.value = isNumber(result);
      form.in[2].disabled = true;
      form.in[0].disabled = false;
      form.in[1].disabled = false;
    }

    if (form.radio[0].checked) {
      const result = (100 / b.value) * c.value;
      a.value = isNumber(result);
      form.in[0].disabled = true;
      form.in[1].disabled = false;
      form.in[2].disabled = false;
    }

    if (form.radio[1].checked) {
      const result = c.value * 100 / a.value;
      b.value = isNumber(result);
      form.in[1].disabled = true;
      form.in[0].disabled = false;
      form.in[2].disabled = false;
    }
});


function isNumber(n) {
  if ( !isNaN( parseFloat(n) ) && isFinite(n) ) {
    return n;
  } else {
    return 0;
  }
}
