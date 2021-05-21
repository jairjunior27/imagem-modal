
let imagens = document.querySelectorAll('.small-img')
let modal = document.querySelector('.modal')
let imgmodal = document.querySelector('#img_modal')
let fechar = document.querySelector('#fechar')
let =srcVal ='';
 for(let i = 0; i < imagens.length; i++){
     imagens[i].addEventListener('click',function(){
         
       srcVal = imagens[i].getAttribute('src')
       imgmodal.setAttribute('src', srcVal)
       modal.classList.toggle('modal_active')
       
     });

 }
 fechar.addEventListener('click',function(){
     modal.classList.toggle('modal_active')
 })





