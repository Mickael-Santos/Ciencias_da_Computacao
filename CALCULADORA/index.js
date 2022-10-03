

//Funções da calculadora

//Função para inserir números no visor
function insert(item) 
{    
    var numero = document.getElementById('num').innerHTML;
    var str = numero.length;
    if(str != 17)
    {
        this.item = document.getElementById('num');
        this.item.innerHTML += item;
    }

}
//Função para Limpar o visor
function insertC() 
{    
    
    item = document.getElementById('num');
    item.innerHTML = "";
    res = 0;
}
//Função para limpar o último número
function retorna()
{
    var numero = document.getElementById('num').innerHTML;
    str = numero.slice(0,-1);
    item = document.getElementById('num');
    item.innerHTML = str;

}
//Função para calcular a expressão aritmética
function calcular()
{
    var numero = document.getElementById('num').innerHTML;
    if(numero)
    {
        document.getElementById('num').innerHTML = eval(numero);
    }
}

//Função para animar os botões ao passar o mouse



  
