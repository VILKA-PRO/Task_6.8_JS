
// three CIRCLEs SOLUTION 
// ==================================

const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

trafficLightEl.addEventListener('click', makeRed);
trafficLightEl2.addEventListener('click', makeRed);
trafficLightEl3.addEventListener('click', makeRed);

function makeRed() {
   
    trafficLightEl.style.background = ('#E7625F');
    trafficLightEl2.style.background = ('#202020');
    trafficLightEl3.style.background = ('#202020');

    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl2.removeEventListener('click', makeRed);
    trafficLightEl3.removeEventListener('click', makeRed);
    
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', makeYellow);
    trafficLightEl3.addEventListener('click', makeYellow);

    
    console.log('makeRed completed')
}

function makeYellow() {
    trafficLightEl.style.background = ('#202020');
    trafficLightEl2.style.background = ('#F0E68C');
    trafficLightEl3.style.background = ('#202020');

    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl3.removeEventListener('click', makeYellow);

    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightEl2.addEventListener('click', makeGreen);
    trafficLightEl3.addEventListener('click', makeGreen);
    
    console.log('makeYellow completed')
}

function makeGreen() {
    trafficLightEl.style.background = ('#202020');
    trafficLightEl2.style.background = ('#202020');
    trafficLightEl3.style.background = ('#18A558');

    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl2.removeEventListener('click', makeGreen);
    trafficLightEl3.removeEventListener('click', makeGreen);

    trafficLightEl.addEventListener('click', makeRed);
    trafficLightEl2.addEventListener('click', makeRed);
    trafficLightEl3.addEventListener('click', makeRed);    console.log('makeGreen completed')

}


function makeBlack() {
    trafficLightEl.style.background = ('#3B3B3B');
    trafficLightEl.removeEventListener('click', makeBlack);
    trafficLightEl.addEventListener('click', makeYellow);
}








// ONE CIRCLE SOLUTION 
// ==================================

// const trafficLightEl = document.querySelector('#trafficLight');


// function makeGreen() {
//     trafficLightEl.style.background = ('#18A558');
//     trafficLightEl.removeEventListener('click', makeGreen);
//     trafficLightEl.addEventListener('click', makeYellow);
// }

// function makeYellow() {
//     trafficLightEl.style.background = ('#F0E68C');
//     trafficLightEl.removeEventListener('click', makeYellow);
//     trafficLightEl.addEventListener('click', makeRed);
// }

// function makeRed() {
//     trafficLightEl.style.background = ('#E7625F');
//     trafficLightEl.removeEventListener('click', makeRed);
//     trafficLightEl.addEventListener('click', makeGreen);
// }
// function makeBlack() {
//     trafficLightEl.style.background = ('#3B3B3B');
//     trafficLightEl.removeEventListener('click', makeBlack);
//     trafficLightEl.addEventListener('click', makeYellow);
// }

// trafficLightEl.addEventListener('click', makeGreen);