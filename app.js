document.addEventListener('DOMContentLoaded',() =>{

    const squares = document.querySelectorAll('.grid div') //gather all the .grid div elements that will be our squares
    const scoreDisplay = document.querySelector('span') // get our span element where we will put the score
    const startBtn = document.querySelector('.start') // get our start btn



    const width = 10
    let currentIndex = 0 //for the first div
    let appleIndex = 0 //first div
    let currentSnake = [2,1,0] // 2 for the head, 0-1 being the body and tail
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0


function startGame(){
    //start and reset the game
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    clearInterval(interval)
    score = 0
    randomApple()
    direction = 1
    scoreDisplay.innerText = score // to display the score in the game
    intervalTime = 1000 // number of seconds
    currentSnake = [2,1,0]
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    interval = setInterval(moveOutcomes, intervalTime)
}


function moveOutcomes(){
    //to deal with all actions of the snake

    //if snake hits the edge or itself
    if (
        (currentSnake[0] + width >= (width * width) && direction === width) || //if snake hits bottom 
        (currentSnake[0] % width === width -1 && direction === 1) || // if snake hit right side
        (currentSnake[0] % width === 0 && direction === -1) || // if snake hit left side
        (currentSnake[0] - width < 0 && direction === -width) || // if snake hits the top
        squares[currentSnake[0] + direction].classList.contains('snake') // if snake hit itsself
        )   {
            if (confirm('Game over. Press ok to restart')){
              //  window.location = '/'
              //confirm('Game over. Press ok to restart')
              startGame()
            }
           // return 
            //alert('Game over')
           
            return clearInterval(interval) // clear the interval
           
        }


    const tail = currentSnake.pop() //remove last ite of the array and display it
    squares[tail].classList.remove('snake') // remove the snak tail from the class
    currentSnake.unshift(currentSnake[0] + direction) //direction to the head

    // to deal with the snake obtaining the apple
    if (squares[currentSnake[0]].classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple')
            squares[tail].classList.add('snake')
            currentSnake.push(tail)
           randomApple()
            score++
            scoreDisplay.textContent = score //display the new score
            clearInterval(interval)
            intervalTime = intervalTime * speed
            interval = setInterval(moveOutcomes, intervalTime)
    }

    squares[currentSnake[0]].classList.add('snake')

}

// generate random apples
function randomApple(){
    // use while so the apple does not go somewhere on top of the snake
    do {
        appleIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
        squares[appleIndex].classList.add('apple')
}



function control(event){
    //different keys for the user to control the snake
    squares[currentIndex].classList.remove('snake') //remove the snake class

    if (event.key === 'ArrowRight' || event.keycode === 39 || event.key==='d'){ // 39 87
        direction = 1 // if we move the snake to the right
    } else if(event.key ==="ArrowUp" ||event.key === 38 || event.key==='w') {
        direction = -width // if we press up btn
    } else if (event.key ==='ArrowLeft' || event.keycode === 37 || event.key==='a') {
        direction = -1 // if we move the snake left
    } else if (event.key === 'ArrowDown' || event.keycode === 40 || event.key ==='s') { 
        direction = +width // if we move the snake down 
    }


}

document.addEventListener('keyup', control) // when the key is up 
document.addEventListener('keydown', control) // when the key is down
startBtn.addEventListener('click', startGame)

})