$(document).ready(function(){

//quando clicco sul pulsante prev richiamo una funzione che fa scorrere indietro le immagini

$('.prev').click(function(){
  prevImage();
});

//quando clicco sul pulsante next richiamo una funzione che fa scorrere in avanti le immagini

$('.next').click(function(){
  nextImage()
});

});


//costruisco le funzioni nextImage e prevImage sia per le immagini
//che per i cerchi della nav bar


//FUNZIONE NEXTIMAGE
function nextImage(){

//memorizzo in una var l' immagine attiva ed il cerchio attivo

var activeImage = $('.images img.active');
console.log(activeImage);

var cerchioAttivo = $('.nav i.active');
console.log(cerchioAttivo);
//rimuovo la classe active all'immagine per attribuirla all'immagine e al cerchio successivi
activeImage.removeClass('active');
cerchioAttivo.removeClass('active');

if(activeImage.hasClass('last')){
  $('.images img.first').addClass('active');
  $('.nav i.first').addClass('active');

}else{
  activeImage.next().addClass('active');
  cerchioAttivo.next().addClass('active');
}

};

//FUNZIONE PREVIMAGE

function prevImage(){
  var activeImage = $('.images img.active');
  var cerchioAttivo = $('.nav i.active');


  activeImage.removeClass('active');
  cerchioAttivo.removeClass('active');


  if(activeImage.hasClass('first')){
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }else{
    activeImage.prev().addClass('active');
    cerchioAttivo.prev().addClass('active');
  }


};


//BONUS CLICCANDO SU  UN PALLINO BLU COMPARE L IMMAGINE CORRISPONDENTE
