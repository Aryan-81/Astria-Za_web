const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (pos) => {
    let x = pos.pageX;
    let y = pos.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
    function mousestopped() {
        cursor.style.display = "none";
    }
    timeout = setTimeout(mousestopped, 1000);
});
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
})