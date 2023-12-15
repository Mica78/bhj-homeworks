const sizeControls = Array.from(document.querySelector('.book__control_font-size').children);
const colorControls = Array.from(document.querySelector('.book__control_color').children);
const backgroundControls = Array.from(document.querySelector('.book__control_background').children);

colorControls.splice(0, 1)
backgroundControls.splice(0, 1)

sizeControls.forEach(element => {
   element.setAttribute('href', '#')
});

colorControls.forEach(element => {
   element.setAttribute('href', '#')
});

backgroundControls.forEach(element => {
   element.setAttribute('href', '#')
});

document.addEventListener('click', (event) => {

   if (event.target.parentElement.className.includes('book__control_font-size')) {
      for (const el of sizeControls) {
         el.classList.remove('font-size_active');
      };
      event.target.classList.add('font-size_active');
      if (event.target.dataset.size === 'small') {
         book.classList.add('book_fs-small');
         book.classList.remove('book_fs-big');
      } else if (event.target.dataset.size === 'big') {
      book.classList.remove('book_fs-small');
      book.classList.add('book_fs-big');
      } else {
      book.classList.remove('book_fs-big', 'book_fs-small');
      };
   };

   if (event.target.parentElement.className.includes('book__control_color')) {
      for (const el of colorControls) {
         el.classList.remove('color_active');
      };
      event.target.classList.add('color_active');
      book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
      if (event.target.dataset.textColor === 'gray') {
         book.classList.add('book_color-gray');
      } else if (event.target.dataset.textColor === 'whitesmoke') {
         book.classList.add('book_color-whitesmoke');
      } else if (event.target.dataset.textColor === 'black') {
         book.classList.add('book_color_black');
      };
   };

   if (event.target.parentElement.className.includes('book__control_background')) {
      for (const el of backgroundControls) {
         el.classList.remove('color_active');
      };
      event.target.classList.add('color_active');
      book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
      if (event.target.dataset.bgColor === 'gray') {
         book.classList.add('book_bg-gray');
      } else if (event.target.dataset.bgColor === 'white') {
         book.classList.add('book_bg-white');
      } else if (event.target.dataset.bgColor === 'black') {
         book.classList.add('book_bg-black');
      };
   };

});
