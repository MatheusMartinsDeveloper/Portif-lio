"use client"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
    useEffect(() => {
        Aos.init({
            startEvent: "DOMContentLoaded",
            delay: 100,
            duration: 1000,
            easing: "ease-in-out"
        });
    }, []);

    return null;
}