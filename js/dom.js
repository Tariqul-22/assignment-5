// const allSeats = document.getElementsByClassName('seat');
let count = 40;
let i=0;
let j=0;
let l=0;
let k=0;
// for(const seat of allSeats){
//     seat.addEventListener('click',function () {
//         console.log('seat conferm');
        

        
//     });
// }

function setInnerText (id, value){
    document.getElementById(id).innerText = value ;
}

function setBackground (id){
    if (k < 4) {
    count = count - 1;
    i=i+1;
    j=j+550;
    l=l+550;
    setInnerText ('available-seat', count);
    setInnerText ('total-seat', i);
    setInnerText ('total-price', j);
    setInnerText ('grand-total', l);

    let element = document.getElementById(id);
    element.classList.remove("bg-[#F7F8F8]");
    element.classList.add("bg-[#1DD100]");

   
    }
    k=k+1;
}