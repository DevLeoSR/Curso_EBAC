$(document).ready(()=>{

  $('form').on('submit', e => {
      e.preventDefault()  
      const tarefa = $('input[type="text"]').val()
      const newLi = $(`<li>${tarefa}</li>`)
      newLi.appendTo('ul')
      $('input[type="text"]').val('')
  })

  $('ul').on('click', 'li', function() {
    $(this).toggleClass('marcado');
  });

})