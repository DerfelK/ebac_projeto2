const form = document.getElementById('form-contatos')
let totalContatos = document.getElementById('total-contatos')

//Pegamos o valor salvo no local storage ou atribuímos 0 
let numContato = Number(localStorage.getItem('numContato') ?? 0)
totalContatos.innerHTML = numContato

//Pegamos o valor da linha salva no local storage
let linhas =  localStorage.getItem('contatos') || ''

// Adicionamos as linhas salvas ao body da table
const corpoTabela = document.querySelector('tbody')
corpoTabela.innerHTML = linhas

//Após o submit, criamos uma linha nova com nome, telefone e id
//Salvamos os dados no local storage
//Resetamos os campos dos inputs e adicionamos valor ao totalContatos
form.addEventListener('submit', function(e) {
    e.preventDefault()

    const nomeContato = document.getElementById('nome-contato')
    const telContato = document.getElementById('tel-contato')

    numContato++
    let linha = `<tr>`
    linha += `<td>${nomeContato.value}</td>`
    linha += `<td>${telContato.value}</td>`
    linha += `<td>${numContato}</td>`
    linha += `</tr>`

    linhas += linha

    corpoTabela.innerHTML = linhas

    localStorage.setItem('contatos', linhas)
    localStorage.setItem('numContato', numContato)


    nomeContato.value = ''
    telContato.value = ''
    totalContatos.innerHTML = numContato
})