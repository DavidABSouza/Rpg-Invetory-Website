const botao = document.querySelector("#adicionar")
const botaoDeletar = document.querySelector(".btn-deletar")

function AdicionarItem(){
    let inputNome = document.querySelector("#digite-nome").value
    let inputEfeito = document.querySelector("#digite-efeito").value

    const Item = document.createElement('div')
    Item.classList.add("item-card")

    if(inputNome.includes("Lendário")){

        Item.classList.add("itemlendario-card")
    }

    Item.innerHTML = `
            <div onmouseover="AparecerApagar(this)" onmouseleave="SumirApagar(this)">
            <button type="submit" class="btn-deletar" onclick="Deletar(this)">Remover Item</button>
            <h3>${inputNome}</h3>
            <p>${inputEfeito}</p>
            </div>
    `

    const Mochila = document.querySelector(".Container-Mochila")

    if(inputNome !== "" && inputEfeito !== ""){
        Mochila.appendChild(Item)
    } else {
        alert("Preencha os campos de entrada!")
    }
}
    botao.addEventListener('click', AdicionarItem)

    function Deletar(div){
        const Item = div.parentElement.parentElement
        Item.remove()
    }

    function AparecerApagar(div){

        const botaoApagar = div.querySelector(".btn-deletar")
        botaoApagar.style.visibility = "visible"
    }

    function SumirApagar(div){

        const botaoDeletar = div.querySelector(".btn-deletar")
        botaoDeletar.style.visibility = "hidden"
    }