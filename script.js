const Gameboard = (() =>{
    let box;
    const gameBoard = ['', '', '',
                       '', '', '',
                       '', '', ''];
    const renderContent = () => {
        for (let i = 0; i < gameBoard.length; i++) {
            const container = document.querySelector('#gameboard');
            box = document.createElement('div');
            box.id = i;
            box.textContent = gameBoard[i];
            box.classList.add('box');
            box.addEventListener('click', function(e) {
                if(e.target.textContent === '') {
                e.target.textContent = alternateMark();
                addMark(gameBoard, this.id);
                checkWinner();
                } else {
                   console.log('illegal move');
                }
            });
            container.appendChild(box);
        }
    }

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
    const checkWinner = () => {
             // Row checks
        if(gameBoard[0] === gameBoard [1] && gameBoard[0] === gameBoard[2] && gameBoard[0] !== '') {
            alert('first row winner');
        } else if(gameBoard[3] === gameBoard [4] && gameBoard[3] === gameBoard[5] && gameBoard[3] !== ''){
            alert('second row winner');
        } else if(gameBoard[6] === gameBoard [7] && gameBoard[6] === gameBoard[8] && gameBoard[6] !== ''){
            alert('third row winner');
            // Column checks
        } else if(gameBoard[0] === gameBoard [3] && gameBoard[0] === gameBoard[6] && gameBoard[0] !== ''){
            alert('first column winner');
        } else if(gameBoard[1] === gameBoard [4] && gameBoard[1] === gameBoard[7] && gameBoard[1] !== ''){
            alert('second column winner');
        } else if(gameBoard[2] === gameBoard [5] && gameBoard[2] === gameBoard[8] && gameBoard[2] !== ''){
            alert('third column winner');
            // Diagonal checks
        } else if(gameBoard[0] === gameBoard [4] && gameBoard[0] === gameBoard[8] && gameBoard[0] !== ''){
            alert('first diagonal winner');
        } else if(gameBoard[2] === gameBoard [4] && gameBoard[2] === gameBoard[6] && gameBoard[2] !== ''){
            alert('second diagonal winner');
            // Draw test
        } else {
            for(let i = 0; i < gameBoard.length; i++) {
                if(gameBoard.every(x => x !== '')) {
                    alert('draw');
                    break;
                } else {
                    console.log('invalid');
                }
            }
        }
    }
    renderContent();
    return {
    }
})();