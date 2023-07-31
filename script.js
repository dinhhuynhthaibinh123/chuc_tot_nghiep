const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

//background: linear-gradient(90deg, #fef5f2, #ece1df, #dacecd, #c7bbbc, #b5a8ab, #a3969a, #90848b, #7d737b, #6b636c, #58535e, #46444f, #343541);
const colors = [
    "#fef5f2",
    "#ece1df",
    "#dacecd",
    "#c7bbbc",
    "#b5a8ab",
    "#a3969a",
    "#90848b",
    "#7d737b",
    "#6b636c",
    "#58535e",
    "#46444f",
    "#343541",
];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();
