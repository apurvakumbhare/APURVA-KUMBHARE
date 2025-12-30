import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import React from "react";

import {
    FaGithub,
    FaLinkedin,
    FaCode,
    FaLaptopCode,
    FaHome,
    FaCertificate
} from "react-icons/fa";

import "./BubbleMenu.css";

const MENU_ITEMS = [
    { label: "About", href: "/", icon: <FaHome />, rotation: -6, hoverStyles: { bgColor: "#10b981", textColor: "#fff" } },
    { label: "Projects", href: "/projects", icon: <FaLaptopCode />, rotation: 6, hoverStyles: { bgColor: "#f59e0b", textColor: "#000" } },
    { label: "Certificates", href: "/certificates", icon: <FaCertificate />, rotation: -6, hoverStyles: { bgColor: "#8b5cf6", textColor: "#fff" } },

    { label: "GitHub", href: "https://github.com/apurvakumbhare", external: true, icon: <FaGithub />, rotation: 6, hoverStyles: { bgColor: "#111827", textColor: "#fff" } },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/apurva-kumbhare-176b96305/", external: true, icon: <FaLinkedin />, rotation: -6, hoverStyles: { bgColor: "#0a66c2", textColor: "#fff" } },
    { label: "LeetCode", href: "https://leetcode.com/u/Apurva_Kumbhare/", external: true, icon: <FaCode />, rotation: 6, hoverStyles: { bgColor: "#f59e0b", textColor: "#000" } },
    { label: "CodeChef", href: "https://www.codechef.com/users/apurva0804", external: true, icon: <FaCode />, rotation: -6, hoverStyles: { bgColor: "#5b4638", textColor: "#fff" } }
];

export default function BubbleMenu({
    logo = "HV",
    menuBg = "#ffffff",
    menuContentColor = "#111",
    useFixedPosition = true
}) {
    const [open, setOpen] = useState(false);
    const overlayRef = useRef(null);
    const itemsRef = useRef([]);
    const labelsRef = useRef([]);

    const toggleMenu = () => {
        const next = !open;
        setOpen(next);
        document.body.classList.toggle("menu-open", next);
    };

    useEffect(() => {
        const items = itemsRef.current;
        const labels = labelsRef.current;
        const overlay = overlayRef.current;

        if (!overlay) return;

        if (open) {
            gsap.set(overlay, { display: "flex" });
            gsap.set(items, { scale: 0 });
            gsap.set(labels, { y: 20, opacity: 0 });

            items.forEach((el, i) => {
                gsap.to(el, {
                    scale: 1,
                    duration: 0.45,
                    delay: i * 0.08,
                    ease: "back.out(1.7)"
                });
                gsap.to(labels[i], {
                    y: 0,
                    opacity: 1,
                    delay: i * 0.08 + 0.15,
                    duration: 0.3
                });
            });
        } else {
            gsap.to(items, {
                scale: 0,
                duration: 0.25,
                onComplete: () => gsap.set(overlay, { display: "none" })
            });
        }
    }, [open]);

    return (
        <>
            <nav className={`bubble-menu ${useFixedPosition ? "fixed" : "absolute"}`}>
                <div className="bubble logo-bubble" style={{ background: menuBg }}>
                    {logo}
                </div>

                <button
                    className={`bubble toggle-bubble menu-btn ${open ? "open" : ""}`}
                    onClick={toggleMenu}
                    style={{ background: menuBg }}
                >
                    <span className="menu-line" style={{ background: menuContentColor }} />
                    <span className="menu-line short" style={{ background: menuContentColor }} />
                </button>
            </nav>

            <div ref={overlayRef} className="bubble-menu-items fixed">
                <ul className="pill-list">
                    {MENU_ITEMS.map((item, i) => {
                        const isDivider = i === 3;

                        return (
                            <React.Fragment key={i}>
                                {isDivider && <div className="menu-divider"></div>}

                                <li className="pill-col">
                                    {item.external ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="pill-link"
                                            style={{
                                                "--pill-bg": menuBg,
                                                "--pill-color": menuContentColor,
                                                "--hover-bg": item.hoverStyles.bgColor,
                                                "--hover-color": item.hoverStyles.textColor,
                                                "--item-rot": `${item.rotation}deg`
                                            }}
                                            ref={el => (itemsRef.current[i] = el)}
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="pill-icon">{item.icon}</span>
                                            <span className="pill-label" ref={el => (labelsRef.current[i] = el)}>
                                                {item.label}
                                            </span>
                                        </a>
                                    ) : (
                                        <NavLink
                                            to={item.href}
                                            className="pill-link"
                                            style={{
                                                "--pill-bg": menuBg,
                                                "--pill-color": menuContentColor,
                                                "--hover-bg": item.hoverStyles.bgColor,
                                                "--hover-color": item.hoverStyles.textColor,
                                                "--item-rot": `${item.rotation}deg`
                                            }}
                                            ref={el => (itemsRef.current[i] = el)}
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="pill-icon">{item.icon}</span>
                                            <span className="pill-label" ref={el => (labelsRef.current[i] = el)}>
                                                {item.label}
                                            </span>
                                        </NavLink>
                                    )}
                                </li>
                            </React.Fragment>
                        );
                    })}
                </ul>

            </div>
        </>
    );
}
