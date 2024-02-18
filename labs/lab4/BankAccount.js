const readline = require('readline-sync');


    let bankAccount01 = {
        accountNumber: "1234567890",
        routingNumber: "987654321",
        balance: 1000
    }

    let bankAccount02 = JSON.parse(JSON.stringify(bankAccount01));
    bankAccount02.accountNumber = "4395666688";

    const bankAccounts = [bankAccount01,bankAccount02];


let isAccountExisting = true;
while(isAccountExisting){
    printBankingApplication();  
    let userOption = getUserOption();
    if (userOption == 0){
        isAccountExisting = false;
        break;
    } else if (userOption == 1){
        let accountNumber  =  readline.question('Enter the account number: ')
        const infoBankAccountExpected = findAccountByAccountNumber(accountNumber);
        if (infoBankAccountExpected){
            console.log('Account info: ', infoBankAccountExpected);
        } else {
            console.log('Account not found!');
        }
    } else if (userOption == 2){
        let accountNumber  =  readline.question('Enter the account number: ')
        updateBalance(accountNumber);
    }
}
console.log("See you again!")


function printBankingApplication(){
    console.log('=============Banking application===========');
    console.log('1. Find an account');
    console.log('2. Update balance');
    console.log('0. Exit programe');
}

function getUserOption(){
    return readline.question('Please select an option: ');
}

function findAccountByAccountNumber(accountNumber){
    for (const bankAccount of bankAccounts) {
        if (bankAccount.accountNumber === accountNumber){
            let infoBankAccountExpected = {
                accountNumber: bankAccount.accountNumber,
                balance: bankAccount.balance
            };
            return infoBankAccountExpected;
        }
    }
    return null;
}

function updateBalance(accountNumber) {
    let accountIndex = -1;
    for (let i = 0; i < bankAccounts.length; i++) {
        if (bankAccounts[i].accountNumber === accountNumber) {
            accountIndex = i;
            break;
        }
    }

    if (accountIndex !== -1) {
        const amount = parseFloat(readline.question('Enter withdrawal amount:'));
        if (amount > 0 && bankAccounts[accountIndex].balance >= amount) {
            bankAccounts[accountIndex].balance -= amount;
            console.log('Withdrawn successfully. New balance:', bankAccounts[accountIndex].balance);
            const updatedAccountInfo = findAccountByAccountNumber(accountNumber);
            if (updatedAccountInfo){
                console.log('Updated account info:', updatedAccountInfo);
            } else {
                console.log("Account not found!")
            }
        } else {
            console.log('Invalid amount or insufficient funds!')
        }
    } else {
        console.log('Account not found');
    }
}
