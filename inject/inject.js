const createButton = () => {

}

setTimeout(()=> {
 
  createButton()


  const buttonSave = document.querySelector('.btn-salvar')
  const buttonAttributes = buttonSave.attributes;
  
  let componentId = ""  
  buttonAttributes.forEach(attribute => {
    if(attribute.includes('data-v')){
      componentId = attribute.replace('data-v-', '')
    }
  })

  const categorias =  __VUE_HOT_MAP__['componentId'].instances[0].menu.cardapios_categorias

}, 10000)