const buttons = document.querySelectorAll('button.button');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const paragraph = e.target.parentElement.querySelector(
      '.card-paragraph-wrapper'
    );
    const images = e.target.parentElement.querySelectorAll('img');

    images.forEach((img) => {
      let imgActive = img.dataset.active === 'true';
      img.dataset.active = (!imgActive).toString();
    });

    let active = paragraph.dataset.active === 'true';
    paragraph.dataset.active = (!active).toString();
  });
});
