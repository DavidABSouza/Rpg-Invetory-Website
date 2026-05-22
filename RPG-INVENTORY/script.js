function AdicionarItem(){

    let inputNome = document.querySelector("#digite-nome").value
    let inputEfeito = document.querySelector("#digite-efeito").value

    const Item = document.createElement('div')
    Item.classList.add("item-card")

    const Mochila = document.querySelector(".Container-Mochila")

    Item.innerHTML = `
            <div>
            <h3>${inputNome}</h3>
            <p>${inputEfeito}</p>
            </div>
    `
    Mochila.appendChild(Item)

    if(inputNome.includes("Lendário")){
        Item.classList.add("itemlendario-card")
    }
}
