"use client";

import React from 'react';
import { motion } from 'motion/react';

interface Partner {
    logoUrl: string;
    href: string;
}

interface ResponsiveHeroBannerProps {
    backgroundImageUrl?: string;
    badgeText?: string;
    badgeLabel?: string;
    title?: React.ReactNode;
    description?: string;
    primaryButton?: React.ReactNode;
    secondaryButton?: React.ReactNode;
    partnersTitle?: string;
    partners?: Partner[];
    children?: React.ReactNode;
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
    backgroundImageUrl = "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=2000",
    badgeLabel = "New",
    badgeText = "Nigeria's Premier Bespoke Atelier",
    title,
    description,
    primaryButton,
    secondaryButton,
    partnersTitle = "Partnering with leading visionaries worldwide",
    partners = [],
    children
}) => {
    // Animation Variants for premium staggered reveal
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative flex items-center">
            <motion.img
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.6 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                src={backgroundImageUrl}
                alt=""
                className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/95 via-background-dark/70 to-background-dark z-0" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30 z-0" />

            <div className="z-10 relative w-full">
                <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="mx-auto max-w-4xl text-center lg:text-left"
                    >
                        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur">
                            <span className="inline-flex items-center text-xs font-bold text-black bg-gold rounded-full py-0.5 px-2 font-sans">
                                {badgeLabel}
                            </span>
                            <span className="text-sm font-medium text-white/90 font-sans tracking-widest uppercase">
                                {badgeText}
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="sm:text-5xl md:text-6xl lg:text-8xl leading-[1.1] text-4xl text-white tracking-tight font-bold uppercase">
                            {title}
                        </motion.h1>

                        <motion.p variants={itemVariants} className="sm:text-xl text-base text-slate-300 max-w-2xl mt-8 mx-auto lg:mx-0 leading-relaxed opacity-90">
                            {description}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:gap-6 mt-12 gap-4 items-center justify-center lg:justify-start">
                            {primaryButton}
                            {secondaryButton}
                        </motion.div>

                        {partners.length > 0 && (
                            <motion.div variants={itemVariants} className="mx-auto lg:mx-0 mt-20 max-w-5xl">
                                <p className="text-sm text-white/70 text-center lg:text-left tracking-widest uppercase">
                                    {partnersTitle}
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 text-white/70 mt-8 items-center justify-items-center lg:justify-items-start gap-8">
                                    {partners.map((partner, index) => (
                                        <a
                                            key={index}
                                            href={partner.href}
                                            className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-contain bg-no-repeat grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
                                            style={{ backgroundImage: `url(${partner.logoUrl})` }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {children && <motion.div variants={itemVariants}>{children}</motion.div>}
                    </motion.div>
                </div>
            </div>

            {/* Vertical Delivery Badge - Professional Position (Preserved from original) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 z-20"
            >
                <div className="w-[1px] h-32 bg-gold/20"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gold/40 vertical-text py-4">
                    LAGOS • LONDON • DUBAI
                </span>
                <div className="w-[1px] h-32 bg-gold/20"></div>
            </motion.div>
        </section>
    );
};

export default ResponsiveHeroBanner;
