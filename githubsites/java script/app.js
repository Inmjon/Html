document.getElementById('clickButton').addEventListener('click', function() {
    const output = document.getElementById('output');
    output.textContent = 'Tugmani bosdingiz! 🎉';
    output.style.color = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}