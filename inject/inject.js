
const mogoInject = () => {
  setTimeout(() => {
    const geraldoWrapper = document.querySelector('.mogo main .geraldo')    
    const mogoWrapper = document.querySelector('.mogo main .geraldo')

    const buttonSave = document.querySelector('.btn-salvar')

    if (buttonSave) {     

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
            <h3>${categoria.nome}</h3>
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

        geraldoWrapper.appendChild(categoriaWrapper)
      })

      const buttonSaveMogo = document.querySelector('#mogo-inject .btn-salvar')
      buttonSaveMogo.addEventListener('click', () => {
        __VUE_HOT_MAP__[componentId].instances[0].salvar()
      })
    } else {
      mogoInject()
    }
  }, 1000);
}
mogoInject()