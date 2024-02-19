const seats = document.getElementsByClassName('seat');
const seatHolder = document.getElementById('seatHolder');



function addTicket(event){
    console.log(event.target.innerText);
    const innerDiv = document.createElement('div')

    const p1 =document.createElement('p')
    const p2 =document.createElement('p')
    const p3 =document.createElement('p')

    const nodeP1 = document.createTextNode(event.target.innerText)
    const nodeP2 = document.createTextNode('Economy')
    const nodeP3 = document.createTextNode('550')

    p1.appendChild(nodeP1)
    p2.appendChild(nodeP2)
    p3.appendChild(nodeP3)

    innerDiv.appendChild(p1)
    innerDiv.appendChild(p2)
    innerDiv.appendChild(p3)

    innerDiv.classList.add('flex')
    innerDiv.classList.add('justify-between')
    innerDiv.classList.add('items-center')

    seatHolder.appendChild(innerDiv)
}

for(const seat of seats){
    // console.log(seat);
    seat.addEventListener('click', addTicket)
}



let count = 40;
let i=0;
let j=0;
let l=0;
let k=0;

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

function copuponBtn(){
    const tocken = document.getElementById('tockenId');
    const tockenText = tocken.value
    console.log(tockenText);

    if (tockenText === 'NEW15') {
        console.log('discount de');
        let a = document.getElementById('grand-total').innerText
        let b = parseFloat(a)
        let c = b - b * 0.15
        setInnerText ('grand-total', c);

        let couponDiv = document.getElementById('coupon-Div');
        couponDiv.classList.add("hidden");

    }
    else if (tockenText === 'Couple 20') {
        console.log('discount de');
        let a = document.getElementById('grand-total').innerText
        let b = parseFloat(a)
        let c = b - b * 0.2
        setInnerText ('grand-total', c);

        let couponDiv = document.getElementById('coupon-Div');
        couponDiv.classList.add("hidden");
    }
}

function successPage(){
    const mainSection = document.getElementById('main-section');
    mainSection.classList.add("hidden");

    const successSection = document.getElementById('success-section');
    successSection.classList.remove("hidden");
}