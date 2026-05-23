const botao = document.querySelector("#adicionar")

function AdicionarItem(){
    let inputNome = document.querySelector("#digite-nome").value
    let inputEfeito = document.querySelector("#digite-efeito").value

    const Item = document.createElement('div')

    Item.classList.add("item-card")

    if(inputNome.includes("Lendário")){

        Item.classList.add("itemlendario-card")
    }

    Item.innerHTML = `
            <div>
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
