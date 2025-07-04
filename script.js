let nameUser = document.querySelector('.input-value');
let Greets = document.querySelector('.greet');
let nameFinal = document.querySelector('.final-name');
const now = new Date();

function submitt() {
    if (nameUser.value == '') {
        alert('Please Enter Your Name : ');
    }
    else {
        Greets.style.display = 'flex';
    }
    nameFinal.innerHTML = nameUser.value;
    switch (true) {
        case (now.getHours() > 0 && now.getHours() < 10):
            nameFinal.innerHTML = nameFinal.innerHTML + ' Good Morning';
            break;
        case (now.getHours() > 10 && now.getHours() < 17):
            nameFinal.innerHTML = nameFinal.innerHTML + ' Good Afternoon';
            break;
        case (now.getHours() > 17 && now.getHours() < 24):
            nameFinal.innerHTML = nameFinal.innerHTML + ' Good Night';
            break;
        default:
            nameFinal.innerHTML = nameFinal.innerHTML + ' Wrost!!';
    }
}

function back() {
    Greets.style.display = 'none';
}