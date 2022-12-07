const boardElement = document.querySelector('.board')
const inputElement = document.querySelector('#sizeInput')

function createRow(i, length) {
  const row = []
  let iterator = 0
  while (iterator < length) {
    if (iterator < i) row.push('red')
    else row.push('blue')
    iterator++
  }
  return row
}

function createBoard(length) {
  const board = []
  let i = 0
  while (i < length) {
    board.push(createRow(i, length))
    i++
  }
  return shuffle(board)
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

function render(board) {
  const boardContent = board.map(m => `
    <div class="row">
      ${m.map(g => `<div class="box" style="background-color: ${g}"></div>`).join('')}
    </div>
  `).join('')
  boardElement.innerHTML = boardContent
}

function createNew(e) {
  e.preventDefault()
  const newBoard = createBoard(inputElement.value)
  render(newBoard)
}

const board = createBoard(8)

render(board)
