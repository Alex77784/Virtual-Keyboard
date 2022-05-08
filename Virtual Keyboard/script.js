let keyboardDefault = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'NumpadDecimal', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'
];
let keyboardFace = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']',
    '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift', 'Cntr', 'Win', 'Alt', '', 'Alt', '&#9668', '&#9660', '&#9658', 'Cntr'
];

let capsLock = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'
];
let shift = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'
];

// screenBegin
let body = document.body,//*
    display = document.createElement('textarea');
body.prepend(display);
// screenEnd

// title
let title = document.createElement('h1');
body.prepend(title);//*body
title.innerHTML = 'Virtual Keyboard';

// keyboardBegin
let keyboardCreate = document.createElement('div');
display.after(keyboardCreate);
// keyboardEnd

// rowKeyboardBedin
let row1 = document.createElement('ul');
keyboardCreate.prepend(row1);
let row2 = document.createElement('ul');
keyboardCreate.append(row2);
let row3 = document.createElement('ul');
keyboardCreate.append(row3);
let row4 = document.createElement('ul');
keyboardCreate.append(row4);
let row5 = document.createElement('ul');
keyboardCreate.append(row5);
// rowKeyboardEnd

// addClassRow
let row1Class = row1.classList.add('row1'),
    row2Class = row2.classList.add('row2'),
    row3Class = row3.classList.add('row3'),
    row4Class = row4.classList.add('row4'),
    row5Class = row5.classList.add('row5');

// createButton with class
for (let i = 0; i < 14; i++) {
    const element = keyboardFace[i];
    let buttonRow1 = document.createElement('li');

    row1.append(buttonRow1);
    buttonRow1.innerHTML = element;
    buttonRow1.classList.add('btn' + element);
};

for (let i = 14; i < 29; i++) {
    const element = keyboardFace[i];
    const elementDefault = keyboardDefault[i];
    let buttonRow2 = document.createElement('li');

    row2.append(buttonRow2);
    buttonRow2.innerHTML = element;
    buttonRow2.classList.add('btn' + elementDefault)
};

for (let i = 29; i < 42; i++) {
    const element = keyboardFace[i];
    const elementDefault = keyboardDefault[i];
    let buttonRow3 = document.createElement('li');

    row3.append(buttonRow3);
    buttonRow3.innerHTML = element;
    buttonRow3.classList.add('btn' + elementDefault);
};

for (let i = 42; i < 55; i++) {
    const element = keyboardFace[i];
    const elementDefault = keyboardDefault[i];
    let buttonRow4 = document.createElement('li');

    row4.append(buttonRow4);
    buttonRow4.innerHTML = element;
    buttonRow4.classList.add('btn' + elementDefault);
};

for (let i = 55; i < keyboardDefault.length; i++) {
    const element = keyboardFace[i];
    const elementDefault = keyboardDefault[i];
    let buttonRow5 = document.createElement('li');

    row5.append(buttonRow5);
    buttonRow5.innerHTML = element;
    buttonRow5.classList.add('btn' + elementDefault);
};

// backlight buttons
document.onkeydown = (event) => {
    document.querySelector('.btn' + event.code).
        classList.add('active');
};
document.onkeyup = (event) => {
    document.querySelector('.btn' + event.code).
        classList.remove('active');
};

