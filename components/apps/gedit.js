import React, { Component } from 'react';

export class Gedit extends Component {

    render() {
        return (
            <div style={{ backgroundImage: "url(./images/memes/contact-back.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center" }} className="w-full h-full relative flex flex-col text-white select-none">
                <div className="relative flex-grow flex flex-row flex-wrap justify-evenly items-center font-normal windowMainScreen">
                    <a href="mailto:x.solution1027@gmail.com" target="_blank" className="sm:w-2/12 w-[120px] flex flex-row justify-evenly">
                        <img className="w-28 cursor-pointer contact-icon" alt="jane gmail" src="https://img.icons8.com/color/344/gmail-new.png" />
                    </a>
                    <a href="https://join.skype.com/invite/jkpt3fUCnQgr" target="_blank" className="sm:w-2/12 w-[120px] flex flex-row justify-evenly">
                        <img className="w-28 cursor-pointer contact-icon" alt="jane skype" src="https://img.icons8.com/color/344/skype--v1.png" />
                    </a>
                    <a href="https://t.me/xprofessional1130" target="_blank" className="sm:w-2/12 w-[120px] flex flex-row justify-evenly">
                        <img className="w-28 cursor-pointer contact-icon" alt="jane telegram" src="https://img.icons8.com/color/344/telegram-app--v1.png" />
                    </a>
                    <a href="https://discord.gg/566uubX9" target="_blank" className="sm:w-2/12 w-[120px] flex flex-row justify-evenly">
                        <img className="w-28 cursor-pointer contact-icon" alt="jane discord" src="https://img.icons8.com/avantgarde/344/discord-logo.png" />
                    </a>
                    {/* <a href="https://www.linkedin.com/in/jane-yang-a4458b272/" target="_blank" className="sm:w-2/12 w-[120px] flex flex-row justify-evenly">
                        <img className="w-28 cursor-pointer contact-icon" alt="jane linkedin" src="https://img.icons8.com/fluency/344/linkedin-circled.png" />
                    </a> */}
                </div>
                <div className="text-center py-2 w-full bg-ub-gedit-light bg-opacity-60 border-b border-t border-blue-400">
                    <span className="text-sm md:text-lg"> Copyright © Jane </span>
                </div>
            </div>
        )
    }
}

export default Gedit;

export const displayGedit = () => {
    return <Gedit> </Gedit>;
}
