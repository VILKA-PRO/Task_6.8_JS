const consoleLog = document.querySelector('#consoleLog');
const idAlert = document.querySelector('#alert');
const idPrompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    // alert('Служит для вывода информации в консоль');
    console.log('Служит для вывода информации в консоль');
});

idAlert.addEventListener('click', () => {
    alert('Служит для вывода информации пользователю');
    console.log('Пользователь нажал Alert');

});

idPrompt.addEventListener('click', () => {
    let promptedText = prompt('Служит для ввода информации пользователем');
    console.log('И вот, что ввел пользователь: ' + promptedText);
    alert('Вот, что вы ввели: ' + promptedText);
});