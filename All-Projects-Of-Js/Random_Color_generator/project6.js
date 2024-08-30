const RandomColorGeneration = () => {
    let color = '#';
    const hex = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        let RandomGeneration = Math.floor(Math.random() * 16);
        color += hex[RandomGeneration];
    }
    return color;
}
let IntervalId;
const startChangingColor = () => {
    if (!IntervalId) {
        IntervalId = setInterval(() => {
            document.body.style.backgroundColor = RandomColorGeneration();
        }, 1000);
    }
}
const stopChangingColor = () => {
    clearInterval(IntervalId);
    IntervalId = null;
}
document.querySelector("#start").addEventListener('click', startChangingColor);
document.querySelector("#stop").addEventListener('click', stopChangingColor);