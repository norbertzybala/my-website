import gsap from 'gsap';

const upsideDown = () => {

    const tl = gsap.timeline({
        ease: "power1.in",
        // repeat:1,
        // yoyo:true,
        // repeatDelay:1
    });

    tl.to('.home', {
        rotateX: 180,
        duration: 0.5
    });

    tl.to('.content', {
        rotateX: -180,
        duration: 0
    }, "<25%");

    tl.call(() => {
       document.querySelector('html').classList.toggle('upsidedown');
    },null,"<50%")
}

const upsidedownButton = document.querySelector('.menu__upsidedown-btn');

upsidedownButton.addEventListener('click', () => {
    upsideDown();
});