

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
function insertC() 
{    
    
    item = document.getElementById('num');
    item.innerHTML = "";
}

function retorna()
{
    var numero = document.getElementById('num').innerHTML;
    str = numero.slice(0,-1);
    item = document.getElementById('num');
    item.innerHTML = str;



}




  
