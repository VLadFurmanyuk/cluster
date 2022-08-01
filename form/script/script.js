console.log('Init!');

new window.JustValidate('.form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = telSelector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    }
  },
  colorWrong: '#ff0f0f',
  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
})
