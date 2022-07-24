import gsap from 'gsap';

const upsideDown = () => {

    const tl = gsap.timeline({
        ease: "power1.in",
        duration: 0.8
    });

    tl.to('.home', {
        rotateX: 180,
    });

    tl.to('.content', {
        rotateX: -180,
        duration: 0
    }, "<25%");

    tl.call(() => {
       document.querySelector('html').classList.add('upsidedown');
    },null,"<50%")
}

upsideDown();