import React from "react";

//import logo from "../../images/logo.png";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-1">
        </div>
        <div className="flex justify-center items-center flex-row mt-1">
            <a
                className="text-white text-sm text-center cursor pointer px-4"
                href="https://github.com/ElmeriVincent/Ether_Transactions"
                target="_blank"
            >
                <AiFillGithub fontSize={30} />
            </a>
            <a
                className="text-white text-sm text-center cursor pointer"
                href="https://fi.linkedin.com/in/elmeri-keitaanranta"
                target="_blank"
            >
                <AiFillLinkedin fontSize={30} />
            </a>
        </div>
        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
            <p className="text-white text-left text-xs">@ElmeriVincent</p>
            <p className="text-white text-right text-xs">All rights reserved</p>
        </div>
    </div>
);

export default Footer;