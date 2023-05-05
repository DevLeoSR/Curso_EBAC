$(document).ready(()=>{

$('header button').click(()=>{
  $('form').slideDown()
})

$('#btn-cancelar').click(()=>{
  $('form').slideUp()
})

$('form').on('submit', e => {
  e.preventDefault()  
  const enderecoDaImagem = $('#end-img-nova').val();
  const novoItem = $('<li style="display: none"></li>');
  $(`<img src="${enderecoDaImagem}">`).appendTo(novoItem)
  $(`
    <div class="overlay-img-link">
    <a href="${enderecoDaImagem}" title="ver imagem em tamanho real" target="_blank"> ver imagem em tamanho real </a>
  </div>`
  ).appendTo(novoItem)
  $(novoItem).appendTo('ul')
  $(novoItem).fadeIn(1500)
  $('#end-img-nova').val('')

})

})
