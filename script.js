let leftPos = 0
let bottomPos = 0
let noButton = document.getElementById('nooo');
document.getElementById('yessir').addEventListener('click', () => {
    document.getElementById('invitation').style.display = 'none';
    document.getElementById('confirmation').style.display = null;
})

setInterval(function () {
    if (noButton.matches(':hover')) {
        requestAnimationFrame(moveNoButton());
    }
}, 100);

noButton.addEventListener('click', () => {
    while (noButton.matches(':hover')) {
        requestAnimationFrame(moveNoButton());
    }
})
noButton.addEventListener('touch', () => {
    moveNoButton()
})

function moveNoButton() {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    noButton.style.position = "absolute"
    noButton.style.left = leftPos + "%"
    noButton.style.bottom = bottomPos + "%"
}
