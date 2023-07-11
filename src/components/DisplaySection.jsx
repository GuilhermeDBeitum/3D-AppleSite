import React from "react";

function DisplaySection({ triggerPreview }) {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="display-section wrapper">
            <h2 className="title">New</h2>
            <p className="text">Brilliant. </p>
            <span className="description">
                A brighter, more colorful iPhone display
            </span>
            <button className="button" onClick={triggerPreview}>Try Me!</button>
            <button className="back-button" onClick={handleScrollToTop}>TOP</button>
        </div>
    );
}

export default DisplaySection;