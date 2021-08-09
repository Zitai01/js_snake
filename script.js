let gamestate = false
let snakeblocks = [302, 303, 304, 305, 306, 307]
let snakehead = 308

//Initialize gameboard 25x25
let gameboard = document.querySelector('.gameboard')
let blocks = gameboard.children
console.log(gameboard)
function initBoard() {
  for (let i = 0; i < 625; i++) {
    let block = document.createElement('div')
    block.classList.add('block')
    if (i % 2 == 0) {
      block.style.backgroundColor = 'darkgray'
    } else if (i % 2 == 1) {
      block.style.backgroundColor = 'gray'
    }
    block.innerHTML = `${i}`
    gameboard.appendChild(block)
  }

  //creat border array
  function borderArray() {
    let borders = []
    for (let i = 0; i < 625; i++) {
      if (i < 24 && i > 0) {
        borders.push(i)
      } else if (i % 25 == 24 || i % 25 == 0) {
        borders.push(i)
      } else if (i > 600 && i < 624) {
        borders.push(i)
      }
    }
    return borders
  }

  let borders = borderArray()

  //make the outer blocks the border
  let blocks = gameboard.children
  for (let i = 0; i < borders.length; i++) {
    blocks[borders[i]].style.backgroundColor = 'white'
  }
}
initBoard()
//displau the snake and it's head while clean up blocks after snake left.

function displaysnake() {
  for (let i = 0; i < 625; i++) {
    if (i % 2 == 0) {
      blocks[i].style.backgroundColor = 'darkgray'
    } else if (i % 2 == 1) {
      blocks[i].style.backgroundColor = 'gray'
    }
  }
  for (let i = 0; i < snakeblocks.length; i++) {
    blocks[snakeblocks[i]].style.backgroundColor = 'yellowgreen'
  }
  blocks[snakehead].style.backgroundColor = 'yellow'
}
displaysnake()

// move up
function moveUp(number) {
  number -= 25
  console.log(number)
  return number
}

// clean up after snake move out of a block

// main program

let body = document.querySelector('body')
body.addEventListener('keydown', (event) => {
  let keys = event.key
  console.log(keys)
  if (keys == 'ArrowUp') {
    if (gamestate == false) {
      setInterval(function () {
        snakehead = moveUp(snakehead)
        displaysnake()
      }, 1000)
    }
  }
})

let downkey = document.onkeydown
