const fontSize = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

fontSize.forEach((elem) => {
  elem.addEventListener('click', function(e) {
    fontSize.forEach((el) => {
      if (el.classList.contains('font-size_active')) {
          el.classList.remove('font-size_active');
      }
    });
    elem.classList.add('font-size_active');
    if (elem.classList.contains('font-size_small'))  {
      book.classList.remove('book_fs-big');
      book.classList.add('book_fs-small');
    }
    if (elem.classList.contains('font-size_big'))  {
      book.classList.remove('book_fs-small');
      book.classList.add('book_fs-big');
    }
    if (!elem.classList.contains('font-size_big') && !elem.classList.contains('font-size_small'))  {
      book.classList.remove('book_fs-small');
      book.classList.remove('book_fs-big');
    }
    e.preventDefault();
  });
});