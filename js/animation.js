let tl = gsap.timeline();
// hero sec
// tl.from(".section-hero-data", {
//     x: -1000,
//     opacity: 0,
//     stagger: 0.3,
//     scrollTrigger: {
//         trigger: ".section-hero-data",
//         // markers:true,
//         start: "top 15%",
//         end: "top 10%",
//         scrub: 2,
//     }

// });

tl.from(".section-hero-image img", {
    scale: 0,
    opacity: 0,
    scrollTrigger: {
        scroller:"body",
        trigger: ".section-hero-image img",
        // markers:true,
        start: "-200px 20%",
        end: "-200px 7%",
        scrub: 2,
    }
});


tl.from(".bio-data", {
    x: 600,
    opacity: 0,
    scrollTrigger: {
        trigger: ".bio-data",
        scroller: "body",
        // markers:true,
        start: "-120px 20%",
        end: "-120px 10%",
        scrub: 2,
    }
});

tl.from(".bio-images img", {
    sacle: 0,
    y: 300,
    opacity: 0,
    duration: 1,
    scrub: 2,
    scrollTrigger: {
        trigger: ".bio-images img",
        scroller: "body",
        // markers:"true",
        start: "-300 50%",
        end: "-300 40%",
        scrub: 2,
    }
});

// 3 button


// tl.from("#portfolio-section .container .common-heading,#portfolio-section .container p, #portfolio-section .p-btns .hireme-btn", {
//     opacity:0,
//     // sacle: 0,
//     y: 50,
//     // opacity: 0,
//     // duration: 1,
//     stagger: 1,
//     scrollTrigger: {
//         trigger: "#portfolio-section .container .common-heading,#portfolio-section .container p, #portfolio-section .p-btns .hireme-btn",
//         scroller: "body",
// markers: true,
//         start: "-150px 50%",
//         end: "-150px 30%",
//         scrub: 2,
//     }
// });


tl.from("#portfolio-section .container .common-heading,#portfolio-section .container p,#portfolio-section .container .img-overlay img", {
    opacity:0,
    // sacle: 0,
    y: 100,
    // opacity: 0,
    // duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: "#portfolio-section .container .common-heading,#portfolio-section .container p,#portfolio-section .container .img-overlay img",
        scroller: "body",
// markers: true,
        start: "-150px 60%",
        end: "-150px 1%",
        scrub: 5,
    }
});
tl.from(".portfolio-images .img-overlay ", {

    y: 50,
    sacle: 0,
    opacity: 0,
    duration: 1,
    stagger: 2,
    scrollTrigger: {
        trigger: ".portfolio-images .img-overlay",
        scroller: "body",
        // markers: true,
        start: "-100px 60%",
        end: "-100px 10%",
        scrub: "2",
    }
});

// our services
tl.from(".section-service .common-heading,.section-service .paraAnimation", {
    y: 600,
    opacity: 0,
    duration: 2,
    stagger: 0.9,
    scrollTrigger: {
        trigger: ".section-service .common-heading,.section-service .paraAnimation",
        scroller: "body",
        // markers:true,
        start: "-900px 30%",
        end: "-900px 15%",
        scrub: 2,
    }
});

// icon box
tl.from(".section-service .container .services-box", {
    y: 80,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".section-service .container .services-box",
        scroller: "body",
        // markers: true,
        start: "-100px 70%",
        end: "-100px 20%",
        scrub: 2,
    }
});

// contact heading
tl.from(".contact-section .container .common-heading,.contact-section .container p,.contact-container form", {
    y: 600,
    opacity: 0,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: ".contact-section .container .common-heading,.contact-section .container p,.contact-container form",
        scroller: "body",
        // markers:true,
        start: "-800px 40%",
        end: "-800px 20%",
        scrub: 2,
    }
});
// footer

tl.from(".footer .container .f-about h3,.footer .container .f-about p  ,.footer .container .f-links,.footer .container .f-services,.footer .container .f-address ", {
    y: 200,
    opacity: 0,
    duration: 4,
    stagger: 1,
    scrollTrigger: {
        trigger: ".footer .container .f-about h3,.footer .container .f-about p  ,.footer .container .f-links,.footer .container .f-services,.footer .container .f-address ",
        scroller: "body",
        // markers:true,
        start: "-720px 30%",
        end: "-720px 10%",
        scrub: 2,
    }
});

// about page start
tl.from(".team .container-team h2 ", {
    y: 150,
    opacity: 0,
    duration: 2,
    stagger: 2,
    color: "#fff",
    scrollTrigger: {
        trigger: ".team .container-team h2",
        scroller: "body",
        // markers:true,
        start: "-250px 15%",
        end: "-250px 5%",
        scrub: 2,
    }
});

tl.from("section.team .container .about-img img ", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 1,
    color: "#fff",
    scrollTrigger: {
        trigger: "section.team .container .about-img img ",
        scroller: "body",
        // markers:true,
        start: "-180px 40%",
        end: "-180px 20%",
        scrub: 2,
    }
}
);

tl.from(".content-img > p,.content-img h1,.content-img p,.content-img div a", {
    y: 150,
    opacity: 0,
    duration: 2,
    stagger: 4,
    color: "#fff",
    scrollTrigger: {
        trigger: ".content-img > p,.content-img h1,.content-img p,.content-img div a",
        scroller: "body",
        // markers:true,
        start: "50px 80%",
        end: "50px 50%",
        scrub: 2,
    }
});
// tl.from("section.team ", {
//     y: 100,
//     opacity: 0,
//     duration: 2,
//     stagger: 4,
//     color: "#fff",
//     scrollTrigger: {
//         trigger: "section.team .content-img div a",
//         scroller: "body",
//         // markers:true,
//         start: "40px 80%",
//         end: "40px 50%",
//         scrub: 2,
//     }
// });

// offer services
tl.from(".offer .container h2,.offer .container p", {
    y: 150,
    opacity: 0,
    duration: 5,
    stagger: 4,
    color: "#fff",
    scrollTrigger: {
        trigger: ".offer .container h2,.offer .container p",
        scroller: "body",
        // markers:true,
        start: "-260px 80%",
        end: "-260px 40%",
        scrub: 2,
    }
});
tl.from("section.team .container .box", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 2,
    color: "#fff",
    scrollTrigger: {
        trigger: "section.team .container .box",
        scroller: "body",
        // markers:true,
        start: "-150px 30%",
        end: "-150px 10%",
        scrub: 2,
    }
});