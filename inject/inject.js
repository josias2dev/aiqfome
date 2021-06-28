

const main = document.querySelector('.mogo main')

const buttonSave = document.querySelector('.btn-salvar')
const buttonAttributes = [...buttonSave.attributes];

let componentId = ""
buttonAttributes.forEach(({ name }) => {
  if (name.includes('data-v')) {
    componentId = name.replace('data-v-', '')
  }
})

const categorias = __VUE_HOT_MAP__[componentId].instances[0].menu.cardapios_categorias
categorias.forEach(categoria => {
  const itens = categoria.itens

  const categoriaWrapper = document.createElement('div')
  categoriaWrapper.classList = "mogo-integration-categoria"
  categoriaWrapper.innerHTML = `
          <h1>${categoria.nome}</h1>
          <div class="categoria-itens"></div>`

  const itensWrapper = categoriaWrapper.querySelector('.categoria-itens')
  itens.forEach(item => {
    const itemWrapper = document.createElement('div')
    itemWrapper.classList = "mogo-integration-item"
    itemWrapper.innerHTML = `
      <div class="mogo-integration-description">${item.nome}</div>
      <input type="number" value="${item.codigo_interno}">`

    itensWrapper.appendChild(itemWrapper)
  })

  main.appendChild(categoriaWrapper)
})