
const form = document.querySelector('.send-message-form');
const number = document.querySelector('#number');
const email = document.querySelector('#email');
const inputName = document.querySelector('#name');
const validationEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zAZ0-9-]+)*$/;
const validationNumber = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;


function showConfetti(){

    confetti({
        particleCount: 150,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        }
    })
}
function checkingForm(event) {
    event.preventDefault();

    const dataStorage = new FormData(form);
    let allCondition = true;

    for (const [field, fieldValue] of dataStorage) {
        if (field === 'name' && fieldValue.length <= 3) {
            inputName .style.borderBottom = "2px solid red";
            allCondition = false;
        }else if(field === 'name' && fieldValue.length >= 3){
            inputName.style.borderBottom = "2px solid var(--text-white)";
            
        }

        if (field === 'number' && !fieldValue.match(validationNumber)) {
            number.style.borderBottom = "2px solid red";
            allCondition = false;
        }else if(field === 'number' && fieldValue.match(validationNumber)){
            number.style.borderBottom = "2px solid var(--text-white)";
        }

        if (field === 'email' && !fieldValue.match(validationEmail)) {
            email.style.borderBottom = "2px solid red";
            allCondition = false;
        }else if(field === 'email' && fieldValue.match(validationEmail)){
            email.style.borderBottom = "2px solid var(--text-white)";
        }
    }

    if (allCondition) {
        showConfetti()
    }
}