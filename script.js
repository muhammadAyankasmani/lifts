
const totalFloors = 10;
let currentFloor = 0;

document.addEventListener("DOMContentLoaded", () => {
    const floorsContainer = document.getElementById('floors');
    const selectFloor = document.getElementById('select-floor');
    
   
    for (let i = 0; i <= totalFloors; i++) {
        const floor = document.createElement('div');
        floor.classList.add('floor');
        floor.id = `floor-${i}`;
        floor.textContent = `Floor ${i}`;
        if (i === 0) {
            const lift = document.createElement('div');
            lift.id = 'lift';
            lift.classList.add('lift');
            floor.appendChild(lift);
        }
        floorsContainer.appendChild(floor);
        
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectFloor.appendChild(option);
    }
});

function moveUp() {
    if (currentFloor < totalFloors) {
        currentFloor++;
        moveLift(currentFloor);
    }
}

function moveDown() {
    if (currentFloor > 0) {
        currentFloor--;
        moveLift(currentFloor);
    }
}

function moveToSelectedFloor() {
    const selectedFloor = parseInt(document.getElementById('select-floor').value);
    if (selectedFloor >= 0 && selectedFloor <= totalFloors) {
        currentFloor = selectedFloor;
        moveLift(currentFloor);
    }
}

function moveLift(floor) {
    const lift = document.getElementById('lift');
    const targetFloor = document.getElementById(`floor-${floor}`);
    const offset = targetFloor.offsetTop;
    lift.style.transform = `translatey(+${offset}px)`;
}
