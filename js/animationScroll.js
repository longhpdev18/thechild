gsap.registerPlugin(ScrollTrigger);

gsap.to('.txtScroll', {
    y: -20,
    duration: 2,
    start: "top 60%",
    end: "top 40%",
    scrollTrigger: {
        trigger: '.section-1',
        start: "60% center",
        end: "+=300px",
        markers: true,
        scrub: true,
    },
})
gsap.to('.line-drag', {
    y: -25,
    duration: 3,
    start: "top 60%",
    end: "top 40%",
    scrollTrigger: {
        trigger: '.section-1',
        start: "60% center",
        end: "+=300px",
        markers: true,
        scrub: true,
    },
})
gsap.to('.txtHello', {
    scale: 100,
    duration: 1,
    start: "top 60%",
    end: "top 40%",
    scrollTrigger: {
        trigger: '.section-1',
        start: "60% center",
        end: "+=300px",
        markers: true,
        scrub: true,
    },
})