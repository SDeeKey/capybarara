import React from 'react';
import Button from "@/components/ui/button";

const Introduction = () => {
    return (
        <div className='flex'>
            <div className='flex flex-row mt-24 ml-20 mr-20 space-between gap-48 items-cente'>
                <div className='flex flex-col h-fit'>
                    <h1 className='text-6xl font-bold tracking-tighter'>Hi, I’m Capybarara 👋</h1>
                    <h3 className='text-base mt-2'>
                        Known for its adorable appearance and friendly nature, the Capybarara is now embarking on a
                        journey to find a new job. Motivated by the desire to explore new opportunities and challenges,
                        the Capybarara is determined to utilize its unique skills and traits to secure a fulfilling
                        position!
                    </h3>
                    <div className='flex mt-12 justify-end'>
                        <Button/>
                    </div>
                </div>
                <img className='' src="capybara.svg" alt="capybara"/>
            </div>
        </div>
    );
};

export default Introduction;