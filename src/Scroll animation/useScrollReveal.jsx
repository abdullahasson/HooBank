import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const useScrollReveal = () => {
    useEffect(() => {

        const sr = ScrollReveal();

        sr.reveal('.left-animation-scroll', {
            origin: "left",
            duration: 1000,
            delay: 100,
            distance: "1000px",
            scale: 1,
            easing: "ease"
        });

        sr.reveal('.right-animation-scroll', {
            origin: "right",
            duration: 1000,
            delay: 100,
            distance: "1000px",
            scale: 1,
            easing: "ease"
        });
        sr.reveal('.right-animation-scroll-200', {
            origin: "right",
            duration: 1000,
            delay: 200,
            distance: "1000px",
            scale: 1,
            easing: "ease"
        });
        sr.reveal('.right-animation-scroll-300', {
            origin: "right",
            duration: 1000,
            delay: 300,
            distance: "1000px",
            scale: 1,
            easing: "ease"
        });

        sr.reveal('.top-animation-scroll', {
            origin: "top",
            duration: 1000,
            delay: 100,
            distance: "1000px",
            scale: 1,
            easing: "ease"
        });

        sr.reveal('.bottom-animation-scroll', {
            origin: "bottom",
            duration: 1000,
            delay: 100,
            distance: "1000px",
            scale: 1,
            easing: "ease"
        });
        sr.reveal('.bottom-animation-scroll-200', {
            origin: "bottom",
            duration: 1000,
            delay: 200,
            distance: "1000px",
            scale: 1,
            easing: "ease"
        });
        sr.reveal('.bottom-animation-scroll-300', {
            origin: "bottom",
            duration: 1000,
            delay: 300,
            distance: "1000px",
            scale: 1,
            easing: "ease"
        });


    }, []);
};