
const secondHand=document.querySelector(".second-hand")
const minuteHand=document.querySelector(".min-hand")
const hourHand=document.querySelector(".hour-hand")


function setDate(){
    const now=new Date();
    const second=now.getSeconds();
    const secondsDegree=(second/60)*360+90;
    secondHand.style.transform=`rotate(${secondsDegree}deg)`;

    const minute=now.getMinutes();
    const minuteDegree=((minute/60)*360)+90;
    minuteHand.style.transform=`rotate(${minuteDegree}deg)`;

    
    const hoursDegree=((minute/12)*360)+90;
    hourHand.style.transform=`rotate(${hoursDegree}deg)`;



    
}
setInterval(setDate,1000)