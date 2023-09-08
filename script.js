let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px'; // Add 'px' unit
    leaf.style.right = value * 1.5 + 'px'; // Add 'px' unit
    hill5.style.left = value * 1.5 + 'px'; // Add 'px' unit
    hill4.style.left = value * -1.5 + 'px'; // Add 'px' unit
    hill1.style.top = value * 1 + 'px';
});
