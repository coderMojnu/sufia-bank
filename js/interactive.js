//signin button handler

const signInBtn = document.getElementById('signin');
signInBtn.addEventListener('click', function(){
    const logInArea = document.getElementById('login-area');
    logInArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

//deposit button handler

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount').value;
    const depositNumber = parseFloat(depositAmount);
    const currentDeposit = document.getElementById('current-deposit').innerText;
    const currentNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentNumber;
    document.getElementById('current-deposit').innerText = totalDeposit;

    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + depositNumber;
    document.getElementById('current-balance').innerText = totalBalance; 

    document.getElementById('deposit-amount').value = '';

})

//withdraw button handler

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
    alert('withdraw clicked')
})
