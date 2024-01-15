// ---------------------Without Function-----------------------------------
//Deposit
// document.getElementById('deposit_btn').addEventListener('click', function(){
//     const currentDeposit = document.getElementById('input_field');
//     const currentDepositvalue = currentDeposit.value;
//     const currentDepositvaluefloat = parseFloat(currentDepositvalue);

//     currentDeposit.value= '';
    
//     if(isNaN(currentDepositvaluefloat)){
//         alert("Please enter valid number!!");
//         return;
//     }

//     // update deposit
//     const previousdeposit = document.getElementById('deposit');
//     const previousdepositvalue = previousdeposit.innerText;
//     const previousdepositvaluefloat = parseFloat(previousdepositvalue);

//     previousdeposit.innerText = currentDepositvaluefloat + previousdepositvaluefloat;

//     //add to the main balance
//     const currentBalance = document.getElementById('total_balance');
//     const currentBalancevalue = currentBalance.innerText;
//     const currentBalancevaluefloat = parseFloat(currentBalancevalue);

//     currentBalance.innerText = currentDepositvaluefloat + currentBalancevaluefloat;
// })

// //withdraw

// document.getElementById('withdraw_btn').addEventListener('click', function(){
//     const Withdrawammount = document.getElementById("Withdraw_field");
//     const Withdrawvalue = Withdrawammount.value;
//     const Withdrawammountfloat = parseFloat(Withdrawvalue);

//     Withdrawammount.value = '';
//     if(isNaN(Withdrawammountfloat)){
//          alert('Please enter valid number');
//          return;
//     }

//     //get current balance

//     const currentBalance = document.getElementById('total_balance');
//     const currentBalancevalue = currentBalance.innerText;
//     const currentBalancevaluefloat = parseFloat(currentBalancevalue);

//     if(currentBalancevaluefloat >= Withdrawammountfloat){
//         //update total withdraw ammount
//         const previouswithdraw = document.getElementById('total_withdraw');
//         const previouswithdrawvalue = previouswithdraw.innerText;
//         const previouswithdrawvaluefloat = parseFloat(previouswithdrawvalue);

//         previouswithdraw.innerText = previouswithdrawvaluefloat + Withdrawammountfloat;

//         // update total balance
//         const currentBalance = document.getElementById('total_balance');
//         const currentBalancevalue = currentBalance.innerText;
//         const currentBalancevaluefloat = parseFloat(currentBalancevalue);

//         currentBalance.innerText = currentBalancevaluefloat - Withdrawammountfloat;

//     }else{
//         alert("You have not sufficient balance");
//     }
// })

// ____________________________________________Use Function_______________________________________________

// Use this function for get value from inputfield
function getInputFieldValue(ammount){
    const inputField = document.getElementById(ammount);
    const inputFieldValue = inputField.value;
    const inputFieldValuefloat = parseFloat(inputFieldValue);
    inputField.value = '';
    return inputFieldValuefloat;
}

// use this function to use get value from Non inputfield or ElementFeild

function getvalue(prevalue){
    const previousammount = document.getElementById(prevalue);
    const previousammountvalue = previousammount.innerText;
    const previousammountvaluefloat = parseFloat(previousammountvalue);
    return previousammountvaluefloat;
}

//set Element Value
function setElementValue(elementID, updateValue){
    const updateammount = document.getElementById(elementID);
    updateammount.innerText = updateValue;
}
// --------------------IMPORTANT NOTE------------------------

// // If i want then i write this function differen file but Must need to add before this file
// // for Example:
// i write this function fuction.js
// and this file name deposit_withdraw.js
// then we must add funtion.js before deposit_withdraw

// <script src='function.js'></script>
// <script src='deposit_withdraw.js'></script>

// For Deposit

document.getElementById('deposit_btn').addEventListener('click', function(){
    // call function
    const Depositammount = getInputFieldValue('input_field');

    // Check input type
    if(isNaN(Depositammount)){
        alert("Please enter valid Input");
        return;
    }
    //call function
    const preDeposit = getvalue('deposit');
    // call function
    const preBalance = getvalue('total_balance');

    // update deposit
    const updateDeposit = Depositammount + preDeposit;
    // call function update deposit
    setElementValue('deposit', updateDeposit);

    // update Total Balance
    const TotalBalance = preBalance + Depositammount ;
    
    // call function update total Balance
    setElementValue('total_balance', TotalBalance);
})

// For Withdraw
document.getElementById('withdraw_btn').addEventListener('click', function(){
    const Withdrawammount = getInputFieldValue('Withdraw_field');
    // check input type
    if(isNaN(Withdrawammount)){
        alert("Please enter valid Input");
        return;
    }
    const preBalance = getvalue('total_balance');

    if(Withdrawammount <= preBalance){
        const preWithdrw = getvalue('total_withdraw');
        const updatepreWithdraw = Withdrawammount + preWithdrw;

        // Update previous withdraw using function
        setElementValue('total_withdraw', updatepreWithdraw);

        const updateammount = preBalance - Withdrawammount;

        setElementValue('total_balance', updateammount);
    }
    else{
        alert('Insufficient Balance!!!!!');
    }
})