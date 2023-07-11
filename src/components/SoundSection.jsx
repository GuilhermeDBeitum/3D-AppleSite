import React from "react";

function SoundSection() {

    const HandleLearnMore = () => {

        const element = document.querySelector(".display-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().bottom + 200,
            left: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section-content content">
                    <h2 className="title">New Sound System</h2>
                    <p className="text">Teel the base.</p>
                    <span className="description">From $41.62/mo. for 24 mo. or $999 before trade-in </span>
                    <ul className="links">
                        <li>
                            <button className="button">Buy</button>

                        </li>
                        <li>
                            <a className="link" onClick={HandleLearnMore}>Learn More</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SoundSection;