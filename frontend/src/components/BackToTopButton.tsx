import { useEffect, useState } from "react";
import "./components-css/BackToTopButton.css";

export default function BackToTopButton() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    &#8679;
                </button>
            )}
            {/* &#8679; is used to create the upward arrow */}
        </>
    );
};