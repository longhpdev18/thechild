gsap.timeline({
    scrollTrigger: {
        trigger: '.section-1',
        start: 'center center',
        end: 'bottom top',
        scrub: true,
        pin: true,
    }
})
    .to(".txtHello", { scale: 3 })
    .to('.txtScroll', { y: -50 })
    .to('.line-drag', { y: -50 });

gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: 'center center',
        end: 'bottom top',
        scrub: true,

        pin: true,
    }
})
    .to(".txtDalat", { scale: 3 })




