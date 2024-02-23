//! 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

document.addEventListener("click", function() {
    document.getElementById("btnToClick").addEventListener("click", (e) => {
        console.log(e);
    });
});

//! 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
/*const focus = document.createElement("focus")
focus.type = "focus"*/
document.addEventListener("focus", function() {
    document.getElementById("focus").addEventListener("focus", (e) => {
        console.log(e);
    });
});

//! 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

document.addEventListener("input", function() {
    document.getElementById("input").addEventListener("input", (e) => {
        console.log(e);
    });
});