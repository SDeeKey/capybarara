import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="flex flex-row justify-between items-center space-between pl-20 pr-20 pt-4 pb-4">
                <img src="Logo.svg" alt="Logo"/>
                <div>
                    <ul className="flex flex-row gap-5">
                        <li>Experience</li>
                        <li>Work</li>
                        <li>Testimonials</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;