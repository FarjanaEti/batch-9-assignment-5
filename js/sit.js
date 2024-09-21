const selectedSit=document.getElementById('seleted-sit');
const Count=document.getElementById('count');
const totalPriceEl=document.getElementById('total-price')
const couponInputEl=document.getElementById('coupon-input')
const couponButtonEl=document.getElementById('coupon-btn')
const noSitBooked=document.getElementById('no-set-booked')

let seletedsitarray=[];
let totalprice=0;

function clickSitHandler(event){
   const value=event.innerText 
   //aki sit bar bar select kora jabe na
   if(seletedsitarray.includes(value)){
    return alert('sit is already booked');
   }
   //ai kaj gula koro jokhon sit number 4 ba tar kom hobe
   else if(seletedsitarray.length<4){
    //select ar por colore
    event.classList.add('bg-primary')
    event.classList.add('text-white')
    //sit count
    seletedsitarray.push(event.innerText);
    Count.innerText=seletedsitarray.length;
    
    //no sit booked
    noSitBooked.classList.add('hidden');

    //sit number
    selectedSit.innerHTML +=`<li class="text-base px-2 flex justify-between">
    <span>${event.innerText} </span>
    <span>Economy </span>
    <span>550 </span>
    </li>`
    
    //price total
    totalprice+=550;
    totalPriceEl.innerText=totalprice.toFixed(2);

    //enable after 4 ticket
    if(seletedsitarray.length>3){
        couponInputEl.removeAttribute('disabled')
        couponButtonEl.removeAttribute('disabled')
    }
}
//4 tar besi sit booked kora jabe na
else{
    alert('meximum sit booked')
}
   }

   // get two coupon
   const grandTotal=document.getElementById('grand-total')
   const discountShow=document.getElementById('show-discount-hide-inputfield')
   const inputPhn=document.getElementById('phn-number-field')
   const nextBtn=document.getElementById('next-btn')


   document.getElementById('coupon-btn').addEventListener('click',function(){
   const inputValue=couponInputEl.value;
   console.log(inputValue)
   let coupon=0;

 if(inputValue != 'Couple 20' && inputValue != 'NEW50'){
  alert('wrong coupon')
   return;
  }
    if(inputValue === 'Couple 20'){
      coupon=totalprice*0.15;
   }
   else if(inputValue === 'NEW50'){
      coupon=totalprice*0.20;
   }
   const afterDiscount=totalprice-coupon
   grandTotal.innerText=afterDiscount.toFixed(2);

   //show-discount-hide-inputfield
   discountShow.innerHTML=`
   <div class="flex justify-between p-4 font-bold">
   <h3>Discount</h3>
     <h3>-BTD: <span>${coupon}</span></h3></div>
   `
   })
   //enable next btn after 11 digit
   inputPhn.addEventListener('input',function(event){
    const phnNumber=event.target.value;
    console.log(phnNumber)
     if(phnNumber.length >= 11){
         nextBtn.removeAttribute('disabled')
     }
    })
   