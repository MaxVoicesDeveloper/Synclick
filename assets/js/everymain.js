const phoneInput = document.getElementById('phone');

  const maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false,
    placeholderChar: '_'
  };

  const mask = IMask(phoneInput, maskOptions);