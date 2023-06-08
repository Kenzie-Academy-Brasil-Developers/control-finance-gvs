/* Desenvolva sua lógica aqui */
import { valuesCategory } from "./valuesData.js"
import { insertedValues } from "./valuesData.js"

function createModal (){
    const buttonShowModal = document.querySelector('.show__modal')
    const modalController = document.querySelector('.modal__controller')
    const modalContainer = document.querySelector('.modal__container')

    const modalHeader = document.createElement('div')
    modalHeader.classList.add('modal__header')
    const titleModal = document.createElement('h2')
    const closeModal = document.createElement('button')
    const infoModal = document.createElement('p')

    
    const valueForm = document.createElement('form')
    valueForm.classList.add('value__form--container')
    const valueTitle = document.createElement('h3')
    const inputContainer = document.createElement('div')
    inputContainer.classList.add('input__container')
    const valueSymbol = document.createElement('label')
    const valueInput = document.createElement('input')
    
    const typeValueForm = document.createElement('form')
    typeValueForm.classList.add('type__value--container')
    const typeValueTitle = document.createElement('h3')
    const typeValueButtonsContainer = document.createElement('div')
    typeValueButtonsContainer.classList.add('type__buttons--container')
    const entryValue = document.createElement('input')
    const entryText = document.createElement('label')
    const exitValue = document.createElement('input')
    const exitText = document.createElement('label')

    const footerModal = document.createElement('form')
    footerModal.classList.add('footer__modal')
    const cancelModal = document.createElement('button')
    const insertValue = document.createElement('button')

    
    {titleModal.innerText = 'Registro de valor'
    closeModal.innerText = 'X'
    infoModal.innerText = 'Digite o valor e em seguida aperte no botão referente ao tipo do valor'
    valueTitle.innerText = 'Valor'
    valueSymbol.innerText = 'R$'
    valueInput.innerText = '00,00'
    typeValueTitle.innerText = 'Tipo de valor'
    entryValue.innerText = valuesCategory[0]
    exitValue.innerText = valuesCategory[1]
    entryText.innerText = 'Entrada'
    exitText.innerText = 'Saida'
    cancelModal.innerText = 'Cancelar'
    insertValue.innerText = 'Inserir valor'

    valueInput.type = 'number'
    valueInput.placeholder = '00,00'
    valueSymbol.setAttribute('for', 'value')

    entryValue.type = 'radio'
    entryValue.id = 'entry__value'
    entryValue.name = 'categoryID'
    entryValue.value = '0'
    entryValue.hidden = true
    entryText.setAttribute('for', 'entry__value')
    
    exitValue.type = 'radio'
    exitValue.id = 'exit__value'
    exitValue.name = 'categoryID'
    exitValue.value = '1'
    exitValue.hidden = true
    exitText.setAttribute('for', 'exit__value')}

    modalHeader.append(titleModal,closeModal)
    valueForm.append(valueTitle,inputContainer)
    inputContainer.append(valueSymbol,valueInput)
    typeValueForm.append(typeValueTitle,typeValueButtonsContainer)
    typeValueButtonsContainer.append(entryText,entryValue,exitText,exitValue)
    footerModal.append(cancelModal,insertValue)
    modalContainer.append(modalHeader, infoModal, valueForm, typeValueForm,footerModal)
    modalController.append(modalContainer)


    buttonShowModal.addEventListener('click', () => {
        modalController.showModal()
})
}
createModal()

