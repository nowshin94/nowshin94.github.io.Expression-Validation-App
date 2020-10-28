function checkRE() {
  let input = prompt('Enter Your Expression');
  if (!input) {
    var text = 'Please fill in the blank! 😨 ';
    document.querySelector('.container-fluid').style.backgroundColor = 'yellow';
    document.querySelector('.container-fluid').style.color = 'black';
  } else {
    let element = window.event.target.parentElement.childNodes[1].innerHTML;

    let re1 = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
    let re2 = /^(\+)?(88)?01([0-9]){9}$/;
    let re3 = /^([0-9]){4}$/;

    if (element == 'Email') {
      if (re1.test(input)) {
        text = 'Your Email Address is Validated! 🤩 ';
        document.querySelector('.container-fluid').style.backgroundColor =
          'rgb(32, 177, 32)';
      } else {
        text = 'Please Provide A Correct Email Address 😩';
        document.querySelector('.container-fluid').style.backgroundColor =
          'red';
      }
    } else if (element == 'Phone Number') {
      if (re2.test(input)) {
        text = 'Your Phone Number Address is Validated! 🤩 ';
        document.querySelector('.container-fluid').style.backgroundColor =
          'rgb(32, 177, 32)';
      } else {
        text = 'Please Provide A Correct Phone Number 😩';
        document.querySelector('.container-fluid').style.backgroundColor =
          'red';
      }
    } else if (element == 'Post Code') {
      if (re3.test(input)) {
        text = 'Your Post Code is Validated! 🤩 ';
        document.querySelector('.container-fluid').style.backgroundColor =
          'rgb(32, 177, 32)';
      } else {
        text = 'Please Provide A Correct Post Code 😩';
        document.querySelector('.container-fluid').style.backgroundColor =
          'red';
      }
    } else {
      text = 'Please Provide A Correct Expression';
    }
  }
  window.event.preventDefault();
  //   console.log(text);
  document.querySelector('.last').innerHTML = text;
}
