const form = document.getElementById('Fcadastro');
const ImgAprov ='<img src="./images/aprovado.png" alt="emoji festejando">'
const ImgReprov = '<img src="./images/reprovado.png" alt="emoji  triste">'
var linhas = '';
const atividades = [];
const notas = []; 
const SpanAprov = '<span class="resultado aprovado">Aprovado</span>'
const SpanReprov = '<span class="resultado reprovado">Reprovado</span>'
const Mcorte = parseFloat(prompt('Digite a média de corte'))


   form.addEventListener('submit', function(evento){
      evento.preventDefault();
      addlinha();
      atualizaTabela();
      atualizaMedia();
   });

   function addlinha(){
      const inputAtividade = document.getElementById('Atividade');
      const inputNota = document.getElementById('Nota');

      if(atividades.includes(inputAtividade.value)){
         alert(`A atividade ${inputAtividade.value} já foi  inserida`)
      }else{
         atividades.push(inputAtividade.value);
         notas.push(parseFloat( inputNota.value));
   
         let linha = '<tr>';
         linha += `<td> ${inputAtividade.value}</td>`;
         linha += `<td> ${inputNota.value}</td>`;
         linha += `<td> ${inputNota.value >= Mcorte ? ImgAprov : ImgReprov}</td>`;
         linha += '</tr>';
   
         linhas += linha ;
      }

      inputAtividade.value = '';
      inputNota.value = '';
   }

   function atualizaTabela(){
      const addNaTabela = document.querySelector('tbody');
      addNaTabela.innerHTML = linhas ;
   };

   function calculaMedia() {
      let somaDasNotas = 0;

      for(let i=0 ; i< notas.length ; i++){
         somaDasNotas += notas[i]
      }
      
      return somaDasNotas / notas.length
   }
   function atualizaMedia(){
      const mediaFinal = calculaMedia();
      document.getElementById('MediaFinal').innerHTML = mediaFinal;
      document.getElementById('ResultadoFinal').innerHTML = mediaFinal >= Mcorte ? SpanAprov : SpanReprov;
   }
