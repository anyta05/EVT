const firstProperty = document.getElementById('first-property')
const flexButton = document.getElementById('flex-button')
const inlineFlexButton = document.getElementById('inline-flex-button')

inlineFlexButton.addEventListener('click', ()=>{
    firstProperty.classList.remove('flex')
    firstProperty.classList.add('inline-flex')
    flexButton.classList.remove('active')
    inlineFlexButton.classList.add('active')
})
flexButton.addEventListener('click',()=>{
    firstProperty.classList.remove('inline-flex')
    firstProperty.classList.add('flex')
    flexButton.classList.add('active')
    inlineFlexButton.classList.remove('active')
})

const secondProperty = document.getElementById('second-property');
const rowNowrapButton = document.getElementById('row-nowrap-button');
const columnReverseButton = document.getElementById('column-reverse-button');
const columnWrapButton = document.getElementById('column-wrap-button');
const rowReverseWrapButton = document.getElementById('wrap-reverse-button');

rowNowrapButton.addEventListener('click', () => {
    removeForDirection(rowNowrapButton, columnReverseButton, columnWrapButton, rowReverseWrapButton, secondProperty);
    rowNowrapButton.classList.add('active');
    secondProperty.classList.add('row-nowrap');
});

columnReverseButton.addEventListener('click', () => {
    removeForDirection(rowNowrapButton, columnReverseButton, columnWrapButton, rowReverseWrapButton, secondProperty);
    columnReverseButton.classList.add('active');
    secondProperty.classList.add('column-reverse');
});

columnWrapButton.addEventListener('click', () => {
    removeForDirection(rowNowrapButton, columnReverseButton, columnWrapButton, rowReverseWrapButton, secondProperty);
    columnWrapButton.classList.add('active');
    secondProperty.classList.add('column-wrap');
});

rowReverseWrapButton.addEventListener('click', () => {
    removeForDirection(rowNowrapButton, columnReverseButton, columnWrapButton, rowReverseWrapButton, secondProperty);
    rowReverseWrapButton.classList.add('active');
    secondProperty.classList.add('row-reverse-wrap-reverse');
});

function removeForDirection(rowNowrap, columnReverse, columnWrap, rowReverseWrap, property) {
    rowNowrap.classList.remove('active');
    columnReverse.classList.remove('active');
    columnWrap.classList.remove('active');
    rowReverseWrap.classList.remove('active');
    property.classList.remove('row-nowrap');
    property.classList.remove('column-reverse');
    property.classList.remove('column-wrap');
    property.classList.remove('row-reverse-wrap-reverse');
}



const thirdProperty = document.getElementById('third-property');
const wrapButton = document.getElementById('wrap-button');
const nowrapButton = document.getElementById('nowrap-button');


function deleteForWrap(wrap, nowrap, property) {
    wrap.classList.remove('active');
    nowrap.classList.remove('active');
    wrapReverse.classList.remove('active');
    property.classList.remove('wrap');
    property.classList.remove('nowrap');
}

wrapButton.addEventListener('click', () => {
    deleteForWrap(wrapButton, nowrapButton,thirdProperty);
    wrapButton.classList.add('active');
    thirdProperty.classList.add('wrap');
});

nowrapButton.addEventListener('click', () => {
    deleteForWrap(wrapButton, nowrapButton,  thirdProperty);
    nowrapButton.classList.add('active');
    thirdProperty.classList.add('nowrap');
});

