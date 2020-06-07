
// console.log("Hello") <- Escreve no console da página
// a função fetch vai até o endereço e retorna, a função then trabalha com o que foi retornado
// fetch("https://servicodados.ibge.gov.br/api/v1/localidades/distritos").then(function(reposta) {console.log(resposta)})
// () => {} função anônima 


function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    const url="https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    fetch(url)
    .then(res => res.json())
    .then( states => {
        for(const state of states ){
            
            ufSelect.innerHTML += `<option value ="${state.id}">${state.nome}</option>`
            
        }
    })
}
   
    populateUFs()
    
    
    function getCities(event) {
    
        const cityselect = document.querySelector("select[name=city]")    
        const stateInput = document.querySelector("input[name=state]")    
    
        const ufvalue = event.target.value   
    
        const indexOfSelectedState = event.target.selectedIndex    
        stateInput.value = event.target.options[indexOfSelectedState].text
        
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`
        
        cityselect.innerHTML="<option value> Selecione a cidade </option>"
        cityselect.innerHTML=true
        fetch(url)
            .then(res => res.json())
            .then(cities => {   
    
            for(const city of cities) {
    
                cityselect.innerHTML +=  `<option value="${city.nome}">${city.nome}</option>`
    
            }     
            cityselect.disabled = false    
        })    
    }    
        document    
        .querySelector("select[name=uf]")    
        .addEventListener("change", getCities)

        //itens de coleta
        //pegar todos li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelecteditem)
}
const collectedItems = document.querySelector("input[name=items]")

let selectedItems=[]

function handleSelecteditem(event){
    const itemLi=event.target

    //add ou remover uma classe com javascript
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id   


//verficar se existem items selecionados, se sim
//pegar os items selecionados

const alreadySelected= selectedItems.findIndex( function(item){
    const itemFound = item == itemId //iiso será true ou false
    return itemFound
})
//console.log(alreadySelected)
//se já estiver selecionado, tirar da seleção
if(alreadySelected >=0){
    //tirar da selecao
    const filteredItems = selectedItems.filter(item=>{
        const itemIsDifferent = item != itemId //false
        return false
    })
    selectedItems= filteredItems
   // console.log(filteredItems)
}else{
    //senão estiver selecionado, adicionar a selecao
    selectedItems.push(itemId)
}

//atualizar o campo escondido com os items selecionados
collectedItems.value=selectedItems
}