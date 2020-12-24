function buatDisko () {
    let cols = 10;
    let cells = [];
    function createGrid(elemen) {
        for(let i = 0; i < cols; i++) {
            for(let j = 0; j < cols; j++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cells.push(cell);
                elemen.append(cell);
            }
        }
    }

    let updateState = () => {
        cells.forEach(cell => {
            let randomNum = Math.random() * 2;
            if (randomNum > 1) {
                cell.classList.add('active');
            } else {
                cell.classList.remove('active');
            }
        });
    }

    setInterval(updateState, 500);

    let elemen = document.querySelector('.container');
    createGrid(elemen);
}

buatDisko();