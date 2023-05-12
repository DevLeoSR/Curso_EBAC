$(document).ready(function(){
  $('#iptTel').mask('(00)00000-0000');
  $('#iptCep').mask('00000-000');
  $('#iptCpf').mask('000.000.000-00');


  $('form').on('submit', () => {
    let nome = $('#iptNome').val()
    let tel = $('#iptTel').val()
    let email = $('#iptEmail').val()
    let Cep = $('#iptCep').val()
    let endereco = $('#iptEndereco').val()
    let Cpf = $('#iptCpf').val()

    alert(
      `Cliente: ${nome} \n` +
      `telefone: ${tel}\n` +
      `E-mail: ${email}\n` +
      `CEP: ${Cep}\n` +
      `CEP: ${endereco}\n` +
      `CPF: ${Cpf}\n\n` +
      'Cadastrado com sucesso!')

  })
});