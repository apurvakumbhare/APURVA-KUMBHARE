import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

export const ChromaGrid = ({
    items,
    className = '',
    radius = 300,
    columns = 3,
    rows = 2,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out'
}) => {
    const rootRef = useRef(null);
    const fadeRef = useRef(null);
    const setX = useRef(null);
    const setY = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const demo = [
        { title: "React", icon: "⚛️", borderColor: "#61DAFB", gradient: "linear-gradient(135deg,#61dafb,#000)" },
        { title: "JavaScript", icon: "🟨", borderColor: "#F7DF1E", gradient: "linear-gradient(135deg,#f7df1e,#000)" },
        { title: "HTML", icon: "📄", borderColor: "#E34F26", gradient: "linear-gradient(135deg,#e34f26,#000)" },
        { title: "CSS", icon: "🎨", borderColor: "#1572B6", gradient: "linear-gradient(135deg,#1572b6,#000)" },
        { title: "Java", icon: "☕", borderColor: "#E11D48", gradient: "linear-gradient(135deg,#e11d48,#000)" },
        { title: "Spring Boot", icon: "🌱", borderColor: "#22C55E", gradient: "linear-gradient(135deg,#22c55e,#000)" },
        { title: "MySQL", icon: "🗄️", borderColor: "#0EA5E9", gradient: "linear-gradient(135deg,#0ea5e9,#000)" },
        { title: "Docker", icon: "🐳", borderColor: "#0DB7ED", gradient: "linear-gradient(135deg,#0db7ed,#000)" },
        { title: "Git", icon: "🔧", borderColor: "#F97316", gradient: "linear-gradient(135deg,#f97316,#000)" }
    ];

    const data = items?.length ? items : demo;

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px');
        setY.current = gsap.quickSetter(el, '--y', 'px');
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x, y) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = e => {
        const r = rootRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    const handleCardClick = url => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleCardMove = e => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <div
            ref={rootRef}
            className={`chroma-grid ${className}`}
            style={{
                '--r': `${radius}px`,
                '--cols': columns,
                '--rows': rows
            }}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
        >
            {data.map((c, i) => (
                <article
                    key={i}
                    className="chroma-card"
                    onMouseMove={handleCardMove}
                    style={{
                        '--card-border': c.borderColor || 'transparent',
                        '--card-gradient': c.gradient
                    }}
                >
                    <div className="tech-card">
                        <span className="tech-icon">{c.icon}</span>
                        <span className="tech-name">{c.title}</span>
                    </div>
                </article>
            ))}
    
            <div className="chroma-overlay" />
            <div ref={fadeRef} className="chroma-fade" />
        </div>
    );
};

export default ChromaGrid;
