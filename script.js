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
                e.target.textContent = 'X';
                addMark(gameBoard, this.id);
            });
            container.appendChild(box);
        }
    }

    const addMark = (array, position) => {
        array.splice(position, 1, 'X');
    }
    renderContent();
    return {
    }
})();