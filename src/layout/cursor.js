const cursor = document.querySelector(".pointer");

document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block"
})

document.addEventListener('mouseleave', () => {
    cursor.style.display = "none"
})