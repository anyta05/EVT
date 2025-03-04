const firstProperty = document.getElementById('first-property')
const jiStartButton = document.getElementById('ji-start-button')
const jiEndButton = document.getElementById('ji-end-button')
const jiCenterButton = document.getElementById('ji-center-button')
const jiStretchButton = document.getElementById('ji-stretch-button')

function remove (property,start,end,center,stretch){
    property.classList.remove('start')
    property.classList.remove('end')
    property.classList.remove('center')
    property.classList.remove('stretch')
    start.classList.remove('active')
    end.classList.remove('active')
    center.classList.remove('active')
    stretch.classList.remove('active')
}
jiStartButton.addEventListener('click', ()=>{
    remove(firstProperty, jiStartButton,jiEndButton,jiCenterButton, jiStretchButton)
    jiStartButton.classList.add('active')
    firstProperty.classList.add('start')
})
jiEndButton.addEventListener('click', ()=>{
    remove(firstProperty, jiStartButton,jiEndButton,jiCenterButton, jiStretchButton)
    jiEndButton.classList.add('active')
    firstProperty.classList.add('end')
})
jiCenterButton.addEventListener('click', ()=>{
    remove(firstProperty, jiStartButton,jiEndButton,jiCenterButton, jiStretchButton)
    jiCenterButton.classList.add('active')
    firstProperty.classList.add('center')
})
jiStretchButton.addEventListener('click', ()=>{
    remove(firstProperty, jiStartButton,jiEndButton,jiCenterButton, jiStretchButton)
    jiStretchButton.classList.add('active')
    firstProperty.classList.add('stretch')
})

const secondProperty = document.getElementById('second-property')
const aiStartButton = document.getElementById('ai-start-button')
const aiEndButton = document.getElementById('ai-end-button')
const aiCenterButton = document.getElementById('ai-center-button')
const aiStretchButton = document.getElementById('ai-stretch-button')

aiStartButton.addEventListener('click', ()=>{
    remove(secondProperty, aiStartButton,aiEndButton,aiCenterButton, aiStretchButton)
    aiStartButton.classList.add('active')
    secondProperty.classList.add('start')
})
aiEndButton.addEventListener('click', ()=>{
    remove(secondProperty, aiStartButton,aiEndButton,aiCenterButton, aiStretchButton)
    aiEndButton.classList.add('active')
    secondProperty.classList.add('end')
})
aiCenterButton.addEventListener('click', ()=>{
    remove(secondProperty, aiStartButton,aiEndButton,aiCenterButton, aiStretchButton)
    aiCenterButton.classList.add('active')
    secondProperty.classList.add('center')
})
aiStretchButton.addEventListener('click', ()=>{
    remove(secondProperty, aiStartButton,aiEndButton,aiCenterButton, aiStretchButton)
    aiStretchButton.classList.add('active')
    secondProperty.classList.add('stretch')
})

const thirdProperty = document.getElementById('third-property')
const gafRowButton = document.getElementById('gaf-row-button')
const gafColumnButton = document.getElementById('gaf-column-button')
const gafDenseButton = document.getElementById('gaf-dense-button')

gafRowButton.addEventListener('click', ()=>{
    removeForThird(thirdProperty,gafRowButton, gafColumnButton,gafDenseButton)
    thirdProperty.classList.add('row')
    gafRowButton.classList.add('active')
})
gafColumnButton.addEventListener('click', ()=>{
    removeForThird(thirdProperty,gafRowButton, gafColumnButton,gafDenseButton)
    thirdProperty.classList.add('column')
    gafColumnButton.classList.add('active')
})
gafDenseButton.addEventListener('click', ()=>{
    removeForThird(thirdProperty,gafRowButton, gafColumnButton,gafDenseButton)
    thirdProperty.classList.add('dense')
    gafDenseButton.classList.add('active')
})
function removeForThird(property, row,column,dense) {
    property.classList.remove('row')
    property.classList.remove('column')
    property.classList.remove('dense')
    row.classList.remove('active')
    column.classList.remove('active')
    dense.classList.remove('active')
}