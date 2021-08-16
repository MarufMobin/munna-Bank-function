document.getElementById('deposit-button').addEventListener('click',function(){
    // deposit input >> input box
    const depositInputField = document.getElementById('deposit-input');
    const inputFieldValueText = depositInputField.value;
    const inputFieldValue = parseFloat(inputFieldValueText);
    // console.log(typeof inputFieldValue, "inputBOx")
    
    // span jeta te amader static data chilo
    const totalBox = document.getElementById('deposit-total');
    const totalBoxValueText = totalBox.innerText;
    const totalBoxValue = parseFloat(totalBoxValueText)
    //console.log(typeof totalBoxValue, "THis is Span")

    // total value assing in deposit box 
    const depositTotalBalance = totalBoxValue + inputFieldValue;
    // console.log(depositTotalBalance)
    totalBox.innerText = depositTotalBalance;

    depositInputField.value = '';

    // Balance Total 
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceValueText = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceValueText);


   console.log(  totalBalance.innerText = totalBalanceValue + inputFieldValue);

    // console.log(totalBalanceValue)

});

document.getElementById('withdraw-button').addEventListener('click',function(){

    // widraw Input Box input Box ar jonnow ai kaj kra 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputValue = parseFloat(withdrawInputText);
   

    // total widraw total balance na kintu ai ta holo j withdrow ar box ba span jeta te amr static value 0 dewa ache oita k dorbo id diye
    const withdrawAgerValue = document.getElementById('withdraw-total');
    const withdrawValueText = withdrawAgerValue.innerText;
    const withdrawValue = parseFloat(withdrawValueText);
    const withdrawTotalBalance = withdrawInputValue + withdrawValue ;
    withdrawAgerValue.innerText = withdrawTotalBalance;

    // Balance ar taka ta widthdraw krle minus hobe

    const totalBalance = document.getElementById('balance-total');
    const totalBalanceValueText = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceValueText);

    const restMoneyOfBalace = totalBalanceValue - withdrawInputValue;

    totalBalance.innerText = restMoneyOfBalace;

    withdrawInput.value = '';

})