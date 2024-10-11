const buttons = document.querySelectorAll('button.button');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const paragraph = e.target.parentElement.querySelector(
      '.card-paragraph-wrapper'
    );

    let active = paragraph.dataset.active === 'true';
    paragraph.dataset.active = (!active).toString();
  });
});
