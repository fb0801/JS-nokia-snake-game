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


function control(e){
    //different keys for the user to control the snake


}


})