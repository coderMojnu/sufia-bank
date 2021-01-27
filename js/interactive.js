//signin button handler

const signInBtn = document.getElementById('signin');
signInBtn.addEventListener('click', function () {
    const logInArea = document.getElementById('login-area');
    logInArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

//deposit button handler

const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    
    const depositNumber = getInputNumber('deposit-amount');
    document.getElementById('deposit-amount').value = '';

    updateSpanValue("current-deposit", depositNumber);
    updateSpanValue("current-balance", depositNumber);
})

//withdraw button handler

const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function () {
    const withdrawAmount = getInputNumber('withdraw-amount');
    updateSpanValue("withdraw-balance", withdrawAmount);
    updateSpanValue("current-balance", -1*withdrawAmount);
    document.getElementById('withdraw-amount').value = '';
})

function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}
function updateSpanValue(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentBalance = parseFloat(current);
    const totalBalance = depositNumber + currentBalance;
    document.getElementById(id).innerText = totalBalance;
}