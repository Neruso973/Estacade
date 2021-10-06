// modal function
const open = document.getElementById('open-modal');
const close = document.getElementById('close-modal');

open.addEventListener('click', () => {
    document.getElementById('modal').style.display = 'block';
});

close.addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});