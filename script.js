const Gameboard = (() =>{
    const gameBoard = ['X', 'X', 'X',
                       'O', 'O', 'O',
                       'X', 'X', 'X'];
    const renderContent = () => {
        for (let i = 0; i < gameBoard.length; i++) {
            const container = document.querySelector('#gameboard');
            const box = document.createElement('div');
            box.textContent = gameBoard[i];
            box.classList
            container.appendChild(box);
        }
    }
    renderContent();
    return {
        
    }
})();

