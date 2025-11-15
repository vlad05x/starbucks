import React, { memo } from "react";
import { Container, Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import InstagramIcon from "@/assets/icons/instagram-icon.svg?react";

const navigation = [
    {
        title: "Main",
        links: ["Buy", "More"]
    },
    {
        title: "We make",
        links: ["Process"]
    },
    {
        title: "Products",
        links: ["Cappuccino", "Fast", "Fast"]
    },
    {
        title: "Events",
        links: ["Drinks", "Eat"]
    },
    {
        title: "Contacts",
        links: ["Instagram", "Number"]
    }
];

export const Footer: React.FC = memo(() => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-[#0b0c0d] py-8">
            <Container maxWidth={false} className="px-4 sm:px-6 lg:px-8">
                {/* Main container with max-width */}
                <div className="max-w-7xl mx-auto">
                    {/* Content wrapper */}
                    <div className="flex flex-col space-y-12">
                        {/* Top section */}
                        <div className="flex flex-col lg:flex-row justify-between gap-8">
                            {/* Logo and contact */}
                            <div className="text-center lg:text-left">
                                <Typography
                                    component="a"
                                    href="/"
                                    variant="h4"
                                    sx={{
                                        fontWeight: 800,
                                        background: "linear-gradient(223deg, #237249 0%, #35c66b 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        fontFamily: "var(--font-family)",
                                        fontSize: "2.25rem",
                                        textDecoration: "none",
                                        display: "inline-block",
                                        cursor: "pointer",
                                        transition: "transform 0.2s ease",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                        },
                                        '@media (max-width: 768px)': {
                                            fontSize: "1.75rem"
                                        },
                                        '@media (min-width: 768px) and (max-width: 1024px)': {
                                            fontSize: "2rem"
                                        }
                                    }}
                                >
                                    StarBucks
                                </Typography>
                                <a
                                    href="tel:+79999999999"
                                    className="text-[#00754a] hover:underline text-lg block mt-2 sm:mt-3"
                                >
                                    +7-999-999-99-99
                                </a>
                            </div>

                            {/* Navigation */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                                {navigation.map((section, index) => (
                                    <div key={index} className="text-center lg:text-left">
                                        <Typography
                                            variant="body1"
                                            className="text-white font-bold text-[20px] mb-3"
                                        >
                                            {section.title}
                                        </Typography>
                                        <ul className="space-y-2">
                                            {section.links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <a
                                                        href="#"
                                                        className="text-[#BBB3B3] hover:text-white transition-colors duration-200 text-[20px]"
                                                    >
                                                        {link}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Scroll to top button - visible on lg screens and up */}
                            <div className="hidden lg:flex items-start justify-end">
                                <button
                                    onClick={scrollToTop}
                                    className="w-12 h-12 flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
                                    aria-label="scroll to top"
                                >
                                    <svg width="100%" height="100%" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.750002 42C0.750002 48.062 0.750073 52.5753 0.970704 56.1787C1.19099 59.7761 1.6287 62.4184 2.48242 64.7422C5.34157 72.5246 11.4754 78.6584 19.2578 81.5176C21.5816 82.3713 24.2239 82.809 27.8213 83.0293C31.4247 83.2499 35.938 83.25 42 83.25C48.062 83.25 52.5753 83.2499 56.1787 83.0293C59.7761 82.809 62.4184 82.3713 64.7422 81.5176C72.5246 78.6584 78.6584 72.5246 81.5176 64.7422C82.3713 62.4184 82.809 59.7761 83.0293 56.1787C83.2499 52.5753 83.25 48.062 83.25 42C83.25 35.938 83.2499 31.4247 83.0293 27.8213C82.809 24.2239 82.3713 21.5816 81.5176 19.2578C78.6584 11.4754 72.5246 5.34157 64.7422 2.48242C62.4184 1.6287 59.7761 1.19099 56.1787 0.970706C52.5753 0.750074 48.062 0.750002 42 0.750002C35.938 0.750002 31.4247 0.750073 27.8213 0.970704C24.2239 1.19099 21.5816 1.6287 19.2578 2.48242C11.4754 5.34157 5.34157 11.4754 2.48242 19.2578C1.6287 21.5816 1.19099 24.2239 0.970706 27.8213C0.750074 31.4247 0.750002 35.938 0.750002 42Z" stroke="url(#paint0_linear_44_123)" strokeWidth="1.5" />
                                        <path d="M41.25 60C41.25 60.4142 41.5858 60.75 42 60.75C42.4142 60.75 42.75 60.4142 42.75 60L41.25 60ZM42.5303 24.4697C42.2374 24.1768 41.7626 24.1768 41.4697 24.4697L36.6967 29.2426C36.4038 29.5355 36.4038 30.0104 36.6967 30.3033C36.9896 30.5962 37.4645 30.5962 37.7574 30.3033L42 26.0607L46.2426 30.3033C46.5355 30.5962 47.0104 30.5962 47.3033 30.3033C47.5962 30.0104 47.5962 29.5355 47.3033 29.2426L42.5303 24.4697ZM42.75 60L42.75 25L41.25 25L41.25 60L42.75 60Z" fill="url(#paint1_linear_44_123)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_44_123" x1="54.9419" y1="84" x2="58.0642" y2="20.1284" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#237249" />
                                                <stop offset="1" stopColor="#35C66B" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_44_123" x1="42.6541" y1="25" x2="54.2758" y2="31.7925" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#237249" />
                                                <stop offset="1" stopColor="#35C66B" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-800"></div>

                        {/* Bottom section */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <Typography variant="body2" className="text-gray-500 text-sm">
                                {new Date().getFullYear()} StarBucks. All rights reserved.
                            </Typography>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <InstagramIcon className="w-10 h-10" />
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
});

Footer.displayName = "Footer";