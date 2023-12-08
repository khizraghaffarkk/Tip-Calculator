

// 2nd Start
// let billInputTag = document.querySelector(".bill-input-tag");
// let numberOfPeopleInputTag = document.querySelector(".number-of-people-input-tag");
// let tipPerPersonAmount = document.getElementById("tip-amount");
// let totalPerPersonAmount = document.getElementById("total-amount");
// let tipdiv = document.querySelectorAll(".tipdi");
// let customTip  = document.querySelector(".active-tipdi");
// let resetButton = document.querySelector(".reset");
// let error = document.querySelector(".cannot-be-zero");

// btnReset.addEventListener("click", (event) => {
//     // Reset the inputs and values
//     billInputTag.value = "0";
//     customTip.value = "";
//     numberOfPeopleInputTag.value = "1";
//     tipPerPersonAmount.innerHTML = "$0";
//     totalPerPersonAmount.innerHTML = "$0";
  
//     // Reset the tip percentage btns
//     tipdiv.forEach((tipBtn) => {
//       tipBtn.classList.remove("active-tipdi");
//     });
  
//     // Set 15% as the default tip percentage
//     tipdiv[2].classList.add("active-tipdi");
//   });
  
//   // Make the tip percentage btns clickable
//   tipdiv.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//       tipdiv.forEach((tipBtn) => {
//         tipBtn.classList.remove("active-tipdi");
//       });
  
//       if (event.target.classList.contains("tip-custom-input")) {
//         event.target.parentElement.classList.add("active-tipdi");
//       } else {
//         event.target.classList.add("active-tipdi");
//       }
  
//       calculateTip();
//     });
//   });
  
//   const calculateTip = () => {
//     const billValue = parseFloat(billInputTag.value);
//     const numberOfPeople = parseFloat(numberOfPeopleInputTag.value);
//     const customTipActive = document.querySelector(".tipdi-custom.active-tipdi");
//     let tipPercentage = parseInt(
//       document.querySelector(".tipdi.active-tipdi").dataset.percentage
//     );
  
//     if (customTipActive) {
//       tipPercentage = parseFloat(
//         document.querySelector(".tip-custom-input").value
//       );
//     }
  
//     const totalAmount = parseFloat((tipPercentage / 100) * billValue).toFixed(2);
//     const tipAmount = parseFloat(totalAmount / numberOfPeople).toFixed(2);
//     const actualTotalAmount = parseFloat(
//       (billValue + parseFloat(totalAmount)) / numberOfPeople
//     ).toFixed(2);
  
//     tipPerPersonAmount.innerHTML = `$${tipAmount}`;
//     totalPerPersonAmount.innerHTML = `$${actualTotalAmount}`;
//   };
  
//   const isNumber = (value) => {
//     // Allow Exceptions
//     if (
//       value === "Backspace" ||
//       value === "ArrowLeft" ||
//       value === "ArrowRight" ||
//       value === "."
//     ) {
//       return true;
//     }
  
//     const regex = /^[0-9]+$/;
  
//     return regex.test(value);
//   };
  
//   // Calculate the tip
//   billInputTag.addEventListener("keyup", (event) => {
//     calculateTip();
//   });
//   customTip.addEventListener("keyup", (event) => {
//     calculateTip();
//   });
//   numberOfPeopleInputTag.addEventListener("keyup", (event) => {
//     calculateTip();
//   });
  
//   // Prevent alphabetical characters from being entered
//   billInputTag.addEventListener("keydown", (event) => {
//     if (!isNumber(event.key)) {
//       event.preventDefault();
//     }
//   });
//   customTip.addEventListener("keydown", (event) => {
//     if (!isNumber(event.key)) {
//       event.preventDefault();
//     }
//   });
//   numberOfPeopleInputTag.addEventListener("keydown", (event) => {
//     if (!isNumber(event.key)) {
//       event.preventDefault();
//     }
//   });

//2nd end



// let billInputTag = document.querySelector(".bill-input-tag");
// let numberOfPeopleInputTag = document.querySelector(".number-of-people-input-tag");
// let tipPerPersonAmount = document.getElementById("tip-amount");
// let totalPerPersonAmount = document.getElementById("total-amount");
// let tipdiv = document.querySelectorAll('.tipdi');
// let customTip  = document.querySelector(".active-tipdi");
// let resetButton = document.querySelector(".reset");
// let error = document.querySelector(".cannot-be-zero");

// const billInput = document.querySelector("#bill-input");
// const customTipInput = document.querySelector(".customTip");
// const numberOfPeopleInput = document.querySelector("#number-of-people-input");
// const tipAmountValue = document.querySelector(".tip-amount-value");
// const totalValue = document.querySelector(".total-value");
// const btnReset = document.querySelector(".btn-reset");
// const tipdiv = document.querySelectorAll(".select-tip-percentage");

// billInputTag.addEventListener("input", billInputTagFun);
// numberOfPeopleInputTag.addEventListener("input",numberOfPeopleInputTagFun);
// tipdiv.forEach(function(selectedtip){
//     selectedtip.addEventListener("click", handleClick);
// })
// customTip.addEventListener("input", customTipInputFun);
// resetButton.addEventListener("click",resetFun);


// billInputTag.value="0.0";
// numberOfPeopleInputTag.value="1";
// tipPerPersonAmount.innerHTML = "$" + (0.0).toFixed(2);
// totalPerPersonAmount.innerHTML = "$" + (0.0).toFixed(2);

// let billValue = 0.0;
// let peopleValue =1;
// let tipValue = 0.15;

// function billInputTagFun(){
//     billValue = parseFloat(billInputTag.value);
//     calculateTip();
// }

// function numberOfPeopleInputTagFun(){
//     peopleValue = parseFloat(numberOfPeopleInputTag.value);
//     if(peopleValue<1){
//         error.style.display="flex";
//         numberOfPeopleInputTag.style.border="thick red";
//     }
//     else{
//         error.style.display="none";
//         numberOfPeopleInputTag.style.border="none";
//         calculateTip();
//     }
    
// }

// function customTipInputFun(){
//     tipValue = parseFloat(customTip.value/100);

//     tipdiv.forEach(function (selectedtip){
//         selectedtip.classList.remove("active-tipdi");
// })
//     calculateTip();
// }


// function handleClick(event){
//     tipdiv.forEach(function (selectedtip){
//         selectedtip.classList.remove("active-tipdi");
//         if(event.target.innerHTML == selectedtip.innerHTML){
//             selectedtip.classList.add("active-tipdi");
//             tipValue = parseFloat(selectedtip.innerHTML) / 100;
//         }
//     });
//     calculateTip();
// }

// function calculateTip(){
//     if(peopleValue>=1){
//         let tipAmount=(billValue+tipValue)/peopleValue;
//         let total= (billValue*tipAmount)/peopleValue;
//         tipPerPersonAmount.innerHTML = "$" + tipAmount.toFixed(2);
//         totalPerPersonAmount.innerHTML = "$" + total.toFixed(2);

//     }
// }

// function resetFun(){
//     billInputTag.value="0.0";
//     billInputTagFun();
//     numberOfPeopleInputTag.value="1";
//     numberOfPeopleInputTagFun();
//     customTip.value="";
// }