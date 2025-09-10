
const botao = document.querySelector('[data-butao]')

botao.addEventListener('click', () => {
    const input = document.querySelector('[data-item-compra]');
    const valorInput = input.value
    input.value = ''

    const listaDeCompras = document.querySelector('[data-lista-de-compras]')

    const itemCompra = document.createElement('li')
    itemCompra.innerText = valorInput
    listaDeCompras.appendChild(itemCompra)
})
