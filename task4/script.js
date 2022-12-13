let linkToChange = document.querySelector('a');

linkToChange.addEventListener('click', (event) => {
    console.log('клик произошел');
    event.preventDefault()
    let promptedText = prompt('Введите текст для ссылки');
    linkToChange.textContent = (promptedText);

});
