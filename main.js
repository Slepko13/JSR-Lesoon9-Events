
// document.getElementById('elem2').oncontextmenu = function (event) {
//     event.preventDefault();
//     alert("Context menu");
// }

// document.getElementById('elem3').onmouseover = function (event) {

//     alert("Mouse over");
// }

// document.getElementById('elem4').addEventListener("mouseout", function (event) {

//     alert("Mouse out");
// })

// document.getElementById('elem5').onfocus = function (event) {

//     document.getElementById('elem6').style.display = "block";
// }

// document.addEventListener('keydown', (event) => {
//     document.querySelector('#elem7').innerHTML = event.key;

// })

// Homework 

// Task1 

function checkPressed(myFunc, ...keys) {

    let pressed = new Set;
    document.addEventListener('keydown', function (event) {
        pressed.add(event.code);
        for (let key of keys) {
            if (!pressed.has(key)) {
                return;
            }
        }
        console.log(pressed);
        pressed.clear();
        myFunc();
    })
    document.addEventListener('keyup', function (event) {
        pressed.delete(event.code);
    });

}
checkPressed(setInput, "KeyA", "AltLeft");
checkPressed(setSpan, "KeyS", "ShiftLeft");
function setInput() {
    let x = document.querySelector("#taskSpan");
    x.style.display = "none";
    let y = document.getElementById("taskInput");

    y.style.display = "block";
    y.focus();
    console.log(x.innerHTML);
    y.value = x.innerHTML;
    document.querySelector('#help').innerHTML = "Press Shift + s";
}
function setSpan() {
    let x = document.querySelector("#taskSpan");
    x.style.display = "block";
    let y = document.getElementById("taskInput");
    y.style.display = "none";
    console.log(x.innerHTML);
    x.innerHTML = y.value;
    document.querySelector('#help').innerHTML = "Press Alt + a";
}


// Task 2

window.addEventListener('resize', function () {
    window.outerWidth < 600 ? document.querySelector('#currentWidth').innerHTML = "Мобільна версія" : document.querySelector('#currentWidth').innerHTML = "Десктопна версія";
})
window.outerWidth < 600 ? document.querySelector('#currentWidth').innerHTML = "Мобільна версія" : document.querySelector('#currentWidth').innerHTML = "Десктопна версія";

// Task 3
document.querySelector('#input').addEventListener('change', function (event) {
    document.querySelector('#inputValue').innerHTML = event.target.value;
})

//Task 4 
function showModal() {
    let x = document.querySelector('#modalBG');
    if (x.style.display == "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }

}

checkPressed(showModal, "KeyO", "AltLeft");
checkPressed(showModal, "KeyC", "AltLeft");
