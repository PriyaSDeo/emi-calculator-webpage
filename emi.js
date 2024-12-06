let p,r,t;
let emiMonth,monthlyInterest,totalMonths,totalAmount,totalInterest;
p=parseInt(document.getElementById("principle").value);
r=parseFloat(document.getElementById("rate").value);
t=parseInt(document.getElementById("year").value);

caculate();
function caculate(){
    totalMonths=t*12;
    monthlyInterest=r/(12*100);
     emiMonth=p * (monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths)) / 
     (Math.pow(1 + monthlyInterest, totalMonths) - 1);
   
    totalAmount=emiMonth*totalMonths;
    totalInterest=totalAmount-p;

display();
}


function display(){
    document.getElementById("monthly-amount").innerHTML=emiMonth.toFixed(0);
    document.getElementById("principal-amount").innerHTML=p.toFixed(0);
    document.getElementById("total-amount").innerHTML=totalAmount.toFixed(0);
    document.getElementById("total-interest").innerHTML=totalInterest.toFixed(0);
    
}
document.getElementById("principle").addEventListener('input',(e)=>{
    p=parseInt(document.getElementById("principle").value);
    document.getElementById("principle-amount").innerHTML=p;
    caculate();
})

document.getElementById("rate").addEventListener('input',(e)=>{
    r=parseFloat(document.getElementById("rate").value);
    document.getElementById("rate-amount").innerHTML=r;
    caculate();
})

document.getElementById("year").addEventListener('input',(e)=>{
    t=parseInt(document.getElementById("year").value);
    document.getElementById("year-amount").innerHTML=t;
    caculate();
})