const allSeats = document.getElementsByClassName('seat');
let count = 40;
for(const seat of allSeats){
    seat.addEventListener('click',function () {
        console.log('seat conferm');
        count = count - 1;
        
        setInnerText ('available-seat', count);
        
    });
}

function setInnerText (id, value){
    document.getElementById(id).innerText = value ;
}