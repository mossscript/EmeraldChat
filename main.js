function showDialog(target) {
   let targetElm = document.querySelector(target);
   let backdrop = document.querySelector('#backdrop');
   
   targetElm.classList.add('show');
   backdrop.classList.add('show');
}
function hideDialog() {
   let targetElm = document.querySelector('.dialog.show');
   let backdrop = document.querySelector('#backdrop');
   
   targetElm.classList.remove('show');
   backdrop.classList.remove('show');
}