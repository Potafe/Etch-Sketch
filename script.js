const container = document.getElementById("container");
rows = document.getElementsByClassName("gridRow");
cell = document.getElementsByClassName("cell");

function grid(num) {
    makeRows(num);
    makeColumns(num);
}

function makeRows(num) {
    for (i = 0; i < num; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    }
}

function makeColumns(num) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < num; j++) {
            let cell = document.createElement("div");
            rows[j].appendChild(cell).className = "cell";
        }
    }
}

document.addEventListener('mouseover', function(e) {
    if(e.target.matches('.cell')) {
        e.target.classList.add('hover');
    }
})


function makeGrid() {
    num = prompt("User input");
    return grid(num);
}

function removeGrid() {
    document.querySelectorAll('.gridRow').forEach((e) => e.parentNode.removeChild(e));
}




