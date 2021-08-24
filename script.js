const Gameboard = (() =>{
    let box;
    let container;
    const gameBoard = ['', '', '',
                       '', '', '',
                       '', '', ''];
    const eventHandler = function(e) {
        if(e.target.textContent === '') {
            e.target.textContent = alternateMark();
            addMark(gameBoard, this.id);
            checkWinner();
            } else {
               console.log('illegal move');
            }
    }
    const renderContent = () => {
        for (let i = 0; i < gameBoard.length; i++) {
            container = document.querySelector('#gameboard');
            box = document.createElement('div');
            box.id = i;
            box.dataset.index = i;
            box.textContent = gameBoard[i];
            box.classList.add('box');
            box.addEventListener('click', eventHandler);
            container.appendChild(box);
        }
    }

    const newGame = document.getElementById('new-game');
    const title = document.getElementById('title');
    title.appendChild(newGame);
    newGame.addEventListener('click', () => {
    window.location.reload();
    });
    
    let counter = 0;
    
    const alternateMark = () => {
        if (Number.isInteger(counter / 2)) {
            return 'X';
        } else {
            return 'O';
        }
    }

    const addMark = (array, position) => {
            if (Number.isInteger(counter / 2)) {
             array.splice(position, 1, 'X');
            } else {
             array.splice(position, 1, 'O');
            }
            counter++;
    }
    const clearDom = () => {
        container.textContent = '';
        for (let i = 0; i < gameBoard.length; i++) {
            container = document.querySelector('#gameboard');
            box = document.createElement('div');
            box.id = i;
            box.dataset.index = i;
            box.textContent = gameBoard[i];
            box.classList.add('box');
            container.appendChild(box);
        }
    }
    const createWinnerDisplay = (mark) => {
        const winnerDisplay = document.createElement('div');
        winnerDisplay.classList.add('winner-display');
        winnerDisplay.textContent = `${gameBoard[mark]} player is the winner!`;
        title.appendChild(winnerDisplay);
        clearDom();
    }
    const checkWinner = () => {
             // Row checks
        if(gameBoard[0] === gameBoard [1] && gameBoard[0] === gameBoard[2] && gameBoard[0] !== '') {
            createWinnerDisplay(0);
        } else if(gameBoard[3] === gameBoard [4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== ''){
            createWinnerDisplay(4);
        } else if(gameBoard[6] === gameBoard [7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== ''){
            createWinnerDisplay(6);
            // Column checks
        } else if(gameBoard[0] === gameBoard [3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== ''){
            createWinnerDisplay(0);
        } else if(gameBoard[1] === gameBoard [4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== ''){
            createWinnerDisplay(1);
        } else if(gameBoard[2] === gameBoard [5] && gameBoard[2] === gameBoard[8] && gameBoard[2] !== ''){
            createWinnerDisplay(2);
            // Diagonal checks
        } else if(gameBoard[0] === gameBoard [4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== ''){
            createWinnerDisplay(0);
        } else if(gameBoard[2] === gameBoard [4] && gameBoard[2] === gameBoard[6] && gameBoard[2] !== ''){
            createWinnerDisplay(2);
            // Draw test
        } else {
            for(let i = 0; i < gameBoard.length; i++) {
                if(gameBoard.every(x => x !== '')) {
                    const bodyDiv = document.querySelector('body');
                    const winnerDisplay = document.createElement('div');
                    winnerDisplay.classList.add('winner-display');
                    winnerDisplay.textContent = `Draw!`;
                    title.appendChild(winnerDisplay);
                    break;
                } else {
                    console.log('Game ongoing');
                }
            }
        }
    }
    renderContent();
})();
