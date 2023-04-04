   const form = document.getElementById('Form')
   const numA = document.getElementById('campoA')
   const numB = document.getElementById('campoB')
   const msg = document.querySelector('.mensageiro')

form.addEventListener('submit',function(e){
   e.preventDefault()

   if(numB.value > numA.value){
      msg.classList.remove('erro')
      msg.classList.add('sucess')
      msg.innerHTML = 'Formulário Válido';
      
   }else{
      msg.classList.remove('sucess')
      msg.classList.add('erro')
      msg.innerHTML = 'Formulário Invalido';
   }
})

