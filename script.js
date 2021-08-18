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
    renderContent();
    return {
    }
})();