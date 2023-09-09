const card = document.querySelector('.card1');
card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});
const form = document.querySelector("#form");
const card_number = document.querySelector('#card-number');
const card_number1 = document.querySelector('.card-number1');
const cardHolder = document.querySelector("#name-text");
const cardHolderText = document.querySelector(".Cardholder");
const validThru = document.querySelector("#valid-thru-text");
const validThruText = document.querySelector(".card-thru");
const card_cvv = document.querySelector("#cvv-text");
const card_cvvText = document.querySelector(".cvv");
const submitButton = document.getElementById("submit");
const newParagraph = document.querySelector('.number-container');
const paragraphHolder1 = document.querySelector('.name-container');
const paragraphCvv1 = document.querySelector('.CVV-container');
const paragraphValid1 = document.querySelector('.valid-thru-container')
card_number.addEventListener('keyup', (e) => {
    if (!e.target.value) {
        card_number1.innerText = "1234 1234 1234 1234";
    } else {
        const valuesOfInput = e.target.value.replaceAll(" ", "");
        if (e.target.value.length > 14) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            card_number1.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (e.target.value.length > 9) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 ");
            card_number1.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 ");
        } else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            card_number1.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else {
            card_number1.innerHTML = valuesOfInput;
        }
    }
});

cardHolder.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardHolderText.innerHTML = "CARDHOLDER NAME";
    } else {
        cardHolderText.innerHTML = e.target.value.toUpperCase();
    }
});

validThru.addEventListener('keyup', (e) => {
    if (!e.target.value) {
        validThruText.innerText = "03/30";
    } else {
        const valuesOfInput = e.target.value.replace("/", "");
        if (e.target.value.length > 2) {
            e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
            validThruText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
        } else {
            validThruText.innerHTML = valuesOfInput;
        }
    }
});

card_cvv.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        card_cvvText.innerHTML = "111";
    } else {
        card_cvvText.innerHTML = e.target.value;
    }
});

const paragraph = document.createElement('p');
paragraph.setAttribute('id', 'cardNumber');
const paragraphHolder = document.createElement('p');
paragraphHolder.setAttribute('id', 'holderName');
const paragraphCvv = document.createElement('p');
paragraphCvv.setAttribute('id', 'cvvNumber');
const paragraphValid = document.createElement('p');
paragraphValid.setAttribute('id', 'validDate1');


submitButton.addEventListener('click', ()=>{
    const errors = [];
    errors.push("Incorrect number");
    errors.push("Incorrect Name");
    errors.push("Incorrect Date ");
    errors.push(" Incorrect CVV number");
    console.log(errors)
    let cn = card_number.value.replaceAll(" ", "");
    if (card_number.value.length !== 19 || !Number.isInteger(Number(cn))) {
        card_number.style.border = "red solid";
        newParagraph.appendChild(paragraph);
        paragraph.style.fontSize = '10px';
        paragraph.style.color = "red";
        paragraph.innerHTML = errors[0];

    }else {
        paragraph.remove()
        card_number.style.border = "green solid";
    }
    if (cardHolder.value.length < 1 || cardHolder.value.length > 30 || Number.isInteger(Number(cardHolder.value)) ) {
        cardHolder.style.border = "red solid";
        paragraphHolder1.appendChild(paragraphHolder);
        paragraphHolder.style.fontSize = '10px';
        paragraphHolder.style.color = 'red';
        paragraphHolder.innerHTML = errors[1];
    }else {
        paragraphHolder.remove();
        cardHolder.style.border = "green solid";
    }
    if (card_cvv.value.length !== 3 || !Number.isInteger(Number(card_cvv.value))) {
        card_cvv.style.border = "red solid";
        paragraphCvv1.appendChild(paragraphCvv);
        paragraphCvv.style.fontSize = '10px';
        paragraphCvv.style.color = 'red';
        paragraphCvv.innerHTML = errors[3]
    }else {
        paragraphCvv.remove();
        card_cvv.style.border = "green solid"
    }
    const validDate = validThru.value.split("/");
    const validD = validThru.value.replaceAll("/", "");
    if (Number(validDate[0]) < 1 || Number(validDate[0]) > 12 || !Number.isInteger(Number(validD)) ) {
        validThru.style.border = "red solid";
        paragraphValid1.appendChild(paragraphValid);
        paragraphValid.style.fontSize = '10px';
        paragraphValid.style.color = 'red';
        paragraphValid.innerHTML = errors[2];
    }else {
        paragraphValid.remove();
        validThru.style.border = "green solid"
    }

})






