(function() {
  var wordArray = ['Hello World', 'my name is Alex', 'I am web developer', 'I started #100DaysOfCode Challenge', 'and this my 19th day'];
  var element = document.getElementsByClassName('text-flip')[0];
  var wordIndex = 1;

  var resetAnimation = function() {
    element.classList.remove('flip');
  };

  setInterval(function() {
    switch (wordIndex) {
    case 0:
    element.classList.add('flip');
    element.textContent = wordArray[wordIndex];
    wordIndex = 1;
    setTimeout(resetAnimation, 1000);
    break;

    case 1:
      element.classList.add('flip');
      element.textContent = wordArray[wordIndex];
      wordIndex = 2;
      setTimeout(resetAnimation, 1000);
    break;

    case 2:
    element.classList.add('flip');
    element.textContent = wordArray[wordIndex];
    wordIndex = 3;
    setTimeout(resetAnimation, 1000);
    break;
    case 3:
    element.classList.add('flip');
    element.textContent = wordArray[wordIndex];
    wordIndex = 4;
    setTimeout(resetAnimation, 1000);
    break;
    case 4:
    element.classList.add('flip');
    element.textContent = wordArray[wordIndex];
    wordIndex = 0;
    setTimeout(resetAnimation, 1000);
    break;
    }
  }, 2500);
}());
