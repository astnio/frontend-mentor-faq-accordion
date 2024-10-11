const buttons = document.querySelectorAll('button.button');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const paragraph = e.target.parentElement.querySelector('p');
    console.log(paragraph);
    // paragraph.style.display = 'block';
  });
});
