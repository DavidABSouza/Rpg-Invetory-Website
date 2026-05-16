function AdicionarItem(){

    let inputNome = document.querySelector("#digite-nome").value
    let inputEfeito = document.querySelector("#digite-efeito").value

    const Item = document.createElement('div')

    const Mochila = document.querySelector(".Container-Mochila")

    Item.classList.add("item-card")

    Item.innerHTML = `
            <div>
            <h3>${inputTitulo}</h3>
            <p>${inputTexto}</p>
            </div>
    `
    Mochila.appendChild(Item)
}
