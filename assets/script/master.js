const item = document.querySelector(".item");
const tl = gsap.timeline({ paused: true })
    .to(".text", {
        color: "white",
        x: 10,
    })
    .to(".dot", {
        backgroundColor: "#F93",
        scale: 1.5,
    }, 0);

item.addEventListener("mouseenter", () => tl.play());
item.addEventListener("mouseleave", () => tl.reverse());