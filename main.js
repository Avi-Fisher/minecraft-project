const main = document.getElementById('main');
const footer = document.getElementById("footer")
let clearBoxes = []
let moush = undefined


function initGame() {
    for (let row = 1; row <= 25; row++) {

        for (let column = 1; column <= 35; column++) {
            createDiv(row, column)

        }
    }
    createFooter()
}


function createDiv(row, column) {
    const div = document.createElement('div');
    div.id = `${row}-${column}`
    div.classList = "sky"
    backGroundImag(row, div)
    addLisnerMap(div)
    main.append(div)
}

function backGroundImag(row, div) {

    if (row >= 22) {
        div.classList = "stone"

    } else if (row >= 19 && row < 22) {
        div.classList = "rgular-land"

    } else if (row === 18) {
        div.classList = "head-land"
    }
}


function createFooter() {
    let div = document.createElement("div")
    div.id = "sohwBox"

    // let paragraph = document.getElementById("p");
    // let text = document.createTextNode("This just got added");
    // paragraph.append(text);
    // div.append(paragraph)

    footer.append(div)


    let img = document.createElement("img")
    img.id = "box"
    img.src = "./icons/box.png"
    footer.append(img)


    img = document.createElement("img")
    img.id = "axe"
    img.src = "./icons/axe.png"
    footer.append(img)
    addLisnerPeekTools(img)

    img = document.createElement("img")
    img.id = "shovel"
    img.src = "./icons/shovel.png"
    footer.append(img)
    addLisnerPeekTools(img)

    img = document.createElement("img")
    img.id = "pickaxe"
    img.src = "./icons/pickaxe.png"
    footer.append(img)
    addLisnerPeekTools(img)

    img = document.createElement("img")
    img.id = "sword"
    img.src = "./icons/sword.png"
    footer.append(img)
    addLisnerPeekTools(img)


    div = document.createElement("a")
    div.id = "reset-game"
    div.href = "./index.html"
    footer.append(div)
    resetGame()
}


function addLisnerMap(tag) {


    tag.addEventListener("click", () => {
        if (tag.classList[0] === moush) {
            clearBoxes.push(tag.classList[0])
            tag.classList = "sky"

        } else if ((tag.classList[0] === "rgular-land" || tag.classList[0] === "head-land") && moush === "shovel") {
            clearBoxes.push(tag.classList[0])
            tag.classList = "sky"
        }
    })
}


function addLisnerPeekTools(tag) {
    tag.addEventListener('click', () => {

        if (tag.id === "axe") {
            moush = "axe"

        } else if (tag.id === "shovel") {
            moush = "shovel"

        } else if (tag.id === "pickaxe") {
            moush = "stone"

        } else if (tag.id === "sword") {
            moush = "sword"
        }
    })
}


function resetGame() {

}


































initGame()