let userInput = document.getElementById('user-input');
let checkBtn = document.getElementById('check-btn');
let clearBtn = document.getElementById('clear-btn');
let resultsDiv = document.getElementById('results-div');

function displayResult(valid, number) {
    if (valid) {
        resultsDiv.innerHTML = `Valid US number: ${number}`;
        resultsDiv.style.color = 'green';
    } else {
        resultsDiv.innerHTML = `Invalid US number: ${number}`;
        resultsDiv.style.color = 'red';
    }
}

function clearOutput(event) {
    event.preventDefault();
    resultsDiv.innerHTML = '';
    userInput.value = '';
}

function checkNumber(event) {
    event.preventDefault();
    let phoneNumber = userInput.value.trim();
    
    if (phoneNumber === '') {
        alert("Please provide a phone number");
        return;
    }
    
    // The regex breakdown:
    // ^(1[\s-]?)?        -> Optional "1" country code followed by an optional space or dash.
    // ((\(\d{3}\))|\d{3}) -> Area code: either three digits within parentheses or just three digits.
    // [\s.-]?            -> Optional separator (space, dash, or dot).
    // \d{3}              -> Three digits.
    // [\s.-]?            -> Optional separator (space, dash, or dot).
    // \d{4}$             -> Four digits at the end.
    let phonePattern = /^(1[\s-]?)?((\(\d{3}\))|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    
    let validNumber = phonePattern.test(phoneNumber);
    displayResult(validNumber, phoneNumber);
}

checkBtn.addEventListener('click', checkNumber);
clearBtn.addEventListener('click', clearOutput);
