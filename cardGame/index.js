
const cardObjectDefinitions = [
    {id:1, imagePath:'images/card-KingHearts.png'},
    {id:2, imagePath:'images/card-JackClubs.png'},
    {id:3, imagePath:'images/card-QueenDiamonds.png'},
    {id:4, imagePath:'images/card-AceSpades.png'}
]

const cardBackImgPath = 'images/card-back-blue.png'

function createCard(cardItem){
    // creating div elements that make up a card
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')
    //creating front & back image elements for a card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    //adding class & id to card element
    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)

    //adding class to inner card element
    addClassToElement(cardInnerElem, 'card-inner')

    //adding class to front card element
    addClassToElement(cardFrontElem, 'card-front')

    //adding class to back card element
    addClassToElement(cardBackElem, 'card-back')

    //adding src attribute & appropiate value to img element - back of card
    addSrcToImageElem(cardBackElem, cardBackImgPath)

    //adding src attribute & appropiate value to img element - front of card
    addSrcToImageElem(cardFrontElem, cardItem.imagePath)

    //assigning class to back image element
    addClassToElement(cardBackElem, 'card-img')

    //assigning class to front image element
    addClassToElement(cardFrontElem, 'card-img')

    //adding front image element as child elemnt to back card element
    addChildElement(cardFrontElem, cardFrontImg)

    //adding back image element as child elemnt to back card element
    addChildElement(cardBackElem, cardBackImg)

    //adding front card element as child element to inner card element
    addChildElement(cardInnerElem, cardFrontElem)

    //adding back card element as child element to inner card element
    addChildElement(cardInnerElem, cardBackElem)
}

function createElement(elemType){
    return document.createElement(elemType)
}

function addClassToElement(elem, className){
    elem.classList.add(className)
}

function addIdToElement(elem, id){
    elem.id = id
}

function addSrcToImageElem(imgElem, src){
    imgElem.src = src
}

function addChildElement(parentElem, childElem){
    parentElem.appendChild(childElem)
}