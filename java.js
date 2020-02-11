function ocupation(container, text, interval) {
    size = text.length;
    slot = document.querySelector(container);
    let i = 0;
    timer = setInterval(function () {
        slot.innerHTML = slot.innerHTML.substr(0,slot.innerHTML.length-1)+text.charAt(i)+".";
        if (i >= size) {
            clearInterval(timer);
            return true;
        } else {
            i++;
        }
    }, interval);
};
const text = 'Software Developer';
ocupation(".ocupation", text, 100);
