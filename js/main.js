let players = [];
const turn = document.getElementById('turn');
const input = document.getElementById('input');
const currentPlayers = document.getElementById("currentPlayers");
const form = document.getElementById("form");
const startButton = document.getElementById("startButton");
const field = document.getElementById('field');
const reset = document.getElementById('reset');
let counter = 0;
let turnCounter = 1;
const turnDisplay = document.getElementById('turnDisplay');
let cycle = true



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputString = input.value;
    if (inputString) {
        players.push(`${inputString}`)
        // currentPlayers.innerHTML += `<h3>${inputString}</h3>`;
        currentPlayers.innerHTML +=`<h3 id="${players[players.length-1]}">${players[players.length - 1]}</h3>`
        input.value = ``;
        // form.reset();
    };
});

startButton.addEventListener("click", () => {
    field.remove();
    let firstPlayer = document.getElementById(`${players[counter.valueOf()]}`);
    firstPlayer.setAttribute('style', 'background-color: #FDFF47')
    turnDisplay.innerHTML += `<h2 id="turnNum">${turnCounter.valueOf()}</h2>`


});

reset.addEventListener('click', () => {
    location.reload();
});
//maybe use a switch? arr[counter] isnt working. this is the
turn.addEventListener('click', () => {
    
    if (counter.valueOf() < players.length - 1) {
        console.log('ligma')
        counter++
        let currentPlayer = document.getElementById(`${players[counter.valueOf()]}`);
        let previous = document.getElementById(`${players[counter.valueOf() - 1]}`);
        
        currentPlayer.setAttribute('style', 'background-color: #FDFF47')
        previous.setAttribute('style', 'background-color: none')
        if (counter.valueOf() === players.length - 1) {
            
        }

    }
    else {
        let rotation = document.getElementById(`${players[players.length-1]}`)
        rotation.setAttribute('style', 'background-color: none');
        counter = 0;
        let newCurrent = document.getElementById(`${players[counter.valueOf()]}`)
        newCurrent.setAttribute('style', 'background-color: #FDFF47');
        console.log('counter');
        turnCounter++
        let turnNum = document.getElementById("turnNum")
        turnNum.innerText = `${turnCounter.valueOf()}`
        
  
    };
    
});

