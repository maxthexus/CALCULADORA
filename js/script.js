function inserir(num){

    var numero = document.querySelector('.input').innerHTML
    document.querySelector('.input').innerHTML = numero + num
}
function limpar(){
    document.querySelector('.input').innerHTML = ``
}
function apagar(){
    var resultado = document.querySelector('.input').innerHTML
    document.querySelector('.input').innerHTML = resultado.substring(0,resultado.length -1)
}
function calcular(){
    var resultado = document.querySelector('.input').innerHTML
    if(resultado){
        document.querySelector('.input').innerHTML = eval(resultado)
    }
}