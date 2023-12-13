const modalContainer = document.getElementById('modalContainer');
const openModal = document.getElementById('openModal');
const youtubeIframe = document.getElementById('youtubeIframe');

openModal.addEventListener('click', function (){
    modalContainer.style.display = 'block'
})

window.addEventListener('click', function (event){
   if(event.target == modalContainer) {
       modalContainer.style.display = 'none'
       youtubeIframe.src = youtubeIframe.src;
   }
})