const scene2 = document.querySelector('.scene-02');
const ambient = document.querySelector('.ambient-light');

window.addEventListener('scroll', () => {

    const trigger = scene2.offsetTop;
    const current = window.scrollY;

    const progress = Math.min(
        Math.max(
            (current - trigger + window.innerHeight) /
            window.innerHeight,
            0
        ),
        1
    );

    document.body.style.backgroundColor = `rgb(
        ${5 + progress * 210},
        ${5 + progress * 205},
        ${5 + progress * 190}
    )`;

    ambient.style.opacity = progress * 0.5;

});