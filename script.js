function changeText() {
    let textArray = ['txt1', 'txt2', 'txt3', 'txt4', 'txt5'];
    let randomNumber = getRandomNumber(0, textArray.length - 1);
    console.log(randomNumber);
    document.getElementById('header').innerHTML = textArray[randomNumber];
}

function getRandomNumber(mn, mx) {
    return Math.floor(Math.random()*(mx-mn+1)+mn);
}