$('a').on('click', event => {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== '') {
    const hash = this.hash;

    event.preventDefault();

    // Using jQuery's animate() method to add smooth page scroll
    $('html, body').animate(
      { scrollTop: $(hash).offset().top }, 800,
      () => { window.location.hash = hash; }
    );
  }
});
