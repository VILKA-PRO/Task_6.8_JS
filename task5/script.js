const btn = document.querySelector('button');
const inputedText = document.querySelector('duplicateField');


input.oninput = function() {
    duplicateField.innerHTML = input.value;
  };

btn.addEventListener('click', () => {
    console.log (input.value);
    document.getElementById('input').value = '';
    // document.getElementById('duplicateField').value = '';
    duplicateField.textContent = ('');
}); 
  