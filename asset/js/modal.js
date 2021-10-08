// modal function
const open = document.getElementById('buttonOpen');
const close = document.getElementById('buttonClose');

open.addEventListener('click', () => {
    document.getElementById('formMessage').style.display = 'block';
});

close.addEventListener('click', () => {
    document.getElementById('formMessage').style.display = 'none';
});