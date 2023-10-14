var nameProductInput = document.getElementById('nameProduct')
var priceProductInput = document.getElementById('priceProduct')
var categoryProductInput = document.getElementById('cateProduct')
var descriptionProductInput = document.getElementById('descProduct')

 
var carrentIndex


var proudectContiner=[]
if(localStorage.getItem('proudect') !=null)
{
    proudectContiner=JSON.parse(localStorage.getItem("proudect"))
    displayProduct( proudectContiner)

}

function addProudect(){
    proudct={
        name:nameProductInput.value,
        price:priceProductInput.value,
        category:categoryProductInput.value,
        description:descriptionProductInput.value,
    }
    proudectContiner.push(proudct)
    localStorage.setItem('proudect',JSON.stringify( proudectContiner))
    displayProduct(proudectContiner)
    clear()
}


function clear()
{
    nameProductInput.value=''
    priceProductInput.value=''
    categoryProductInput.value=''
    descriptionProductInput.value=''
}


function displayProduct(arry){

    var cartiona=``
    for (var i=0;i<arry.length;i++){
        cartiona+=` <tr>
        <td>${arry[i].name}</td>
        <td>${arry[i].price}</td>
        <td>${arry[i].category}</td>
        <td>${arry[i].description}</td>
        <td>
            <button class="btn btn-warning btn-sm" onclick="setFormForUpdate(${i})" " >Update</button>
        </td>
        <td>
            <button class="btn btn-danger btn-sm" onclick="deleProduct(${i})" >Delete</button>
        </td>
    </tr>
        `
    }
    document.getElementById('tBody').innerHTML=cartiona

}
function deleProduct(proIndex)

{
    proudectContiner.splice(proIndex,1)
    localStorage.setItem('proudect',JSON.stringify( proudectContiner))
    displayProduct(proudectContiner)
}




function searchProudect(term){
    
  
    var matchProudect=[]
for(var i=0;i<proudectContiner.length;i++)
{
    
    if(proudectContiner[i].name.toLowerCase().includes(term.toLowerCase()))
    {
        matchProudect.push(proudectContiner[i])
    }
}
displayProduct(matchProudect)
console.log(matchProudect);


}

function setFormForUpdate(x)
{
    addBtn.classList.replace("d-block" , "d-none");
    updateBtn.classList.replace("d-none" , "d-block");
    nameProductInput.value=proudectContiner[x].name;
    priceProductInput.value=proudectContiner[x].price;
    categoryProductInput=proudectContiner[x].category;
    descriptionProductInput.value=proudectContiner[x].description;
    
carrentIndex=x
}
document.getElementById('updateBtn').addEventListener('click',function(){displayNewpProudects()})
function displayNewpProudects()
{
    
    addBtn.classList.replace("d-none" , "d-block");
    updateBtn.classList.replace("d-block" , "d-none");
    proudct={
        name:nameProductInput.value,
        price:priceProductInput.value,
        category:categoryProductInput.value,
        description:descriptionProductInput.value,
    }
    proudectContiner.splice(carrentIndex,1)
    localStorage.setItem('proudect',JSON.stringify( proudectContiner))
    displayProduct(proudectContiner)
    
}