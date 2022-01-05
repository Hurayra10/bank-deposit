
//login button handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";

    const T_area = document.getElementById("transaction-area");
    T_area.style.display = "block"

})


//Deposit button handler
const depositbtn = document.getElementById("addDeposit");
depositbtn.addEventListener("click", function(){

const depositNumber =  getInputNumber("deposit-amount");


updateSpanText("currentDeposit", depositNumber);
updateSpanText("currentBalance", depositNumber);


document.getElementById("deposit-amount").value = "";

})
//withdraw button event handler

const withdrawbtn = document.getElementById("addwithdraw");
withdrawbtn.addEventListener("click", function(){
const withdrawNumber = getInputNumber("withdrawAmount")

updateSpanText("currentWithdraw", withdrawNumber);
updateSpanText("currentBalance", -1 * withdrawNumber);

document.getElementById("withdrawAmount").value = "";

})


function getInputNumber (id){
const withdrawAmount = document.getElementById(id).value;
const withdrawNumber = parseFloat(withdrawAmount);
return withdrawNumber;
}




function updateSpanText (id, depositNumber){
const  current = document.getElementById(id).innerText;
const currentNumber = parseFloat(current);
const totalAmount = depositNumber + currentNumber;
document.getElementById(id).innerText =  totalAmount;


}


