const scene3 = document.querySelector('.scene-03');
const scene3Title = document.querySelector('.copy-03 h2');
const scene3Reveal = document.querySelector('.scene-03-reveal');

let scene3Played = false;

window.addEventListener('scroll', () => {

    const trigger =
        scene3.offsetTop -
        window.innerHeight / 2;

    if(window.scrollY > trigger && !scene3Played){

        scene3Played = true;

        scene3Title.style.opacity = "1";
        scene3Title.style.transform = "translateY(0)";

        setTimeout(() => {

            scene3Reveal.style.opacity = "1";
            scene3Reveal.style.transform = "translateY(0)";

        }, 2500);
    }

});

const observer =
new IntersectionObserver(
entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

    const scene04 =
        document.getElementById('scene-04');

    scene04.classList.add('active');

    const t1 =
        document.querySelector('.text-1');

    setTimeout(
    ()=>{
        t1.classList.add('active');
    },
    1500
    );

}

});

},
{
threshold:.0
}
);

observer.observe(
document.getElementById(
'scene-04'
)
);