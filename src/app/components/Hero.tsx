"use client"
import React from 'react'
import { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { Button } from '@/components/ui/button'

function useCountUp(target: number, inView: boolean, duration = 1.2) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const increment = target / (duration * 60); // assume 60fps
        const raf = () => {
            start += increment;
            if (start >= target) {
                setValue(target);
            } else {
                setValue(Math.floor(start));
                requestAnimationFrame(raf);
            }
        };
        requestAnimationFrame(raf);
    }, [inView, target, duration]);
    return value;
}

const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * i,
            ease: "easeOut",
            duration: 0.6,
        },
    }),
};

const buttonContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5,
        },
    },
};

const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Hero() {
    const statsRef = useRef(null);
    const isInView = useInView(statsRef, { once: true, margin: "-100px" });
    const controls = useAnimation();
    const imageControls = useAnimation();

    // contadores
    const alunos = useCountUp(3000, isInView);
    const objetivos = useCountUp(1, isInView); // "Todos" fica como label, pode ser adaptado
    const suporte = useCountUp(1, isInView); // idem

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
            imageControls.start({
                y: [0, -8, 0],
                scale: [1, 1.03, 1],
                transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            });
        }
    }, [isInView, controls, imageControls]);

    const blobPaths = {
        one: "M421.5,314.5Q395,379,336.5,411.5Q278,444,212,421.5Q146,399,99,347.5Q52,296,66,229Q80,162,129,119Q178,76,245,62.5Q312,49,366,88Q420,127,438,185Q456,243,421.5,314.5Z",
        two: "M404,308.5Q380,377,321,406Q262,435,204.5,405.5Q147,376,104.5,325Q62,274,57,207.5Q52,141,96,99.5Q140,58,203.5,54Q267,50,323,78Q379,106,412.5,157Q446,208,404,308.5Z",
        three: "M410.5,304.5Q381,369,324,398Q267,427,203,411.5Q139,396,96,344Q53,292,60,227Q67,162,108.5,121Q150,80,212,66Q274,52,328,82.5Q382,113,418,162.5Q454,212,410.5,304.5Z",
    };

    return (
        <section
            id="inicio"
            className="relative overflow-hidden pt-20 pb-16 px-4 bg-gradient-to-b from-gray-900 via-[#0f111a] to-gray-900"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image src="/herobg.jpg" alt="Modern gym interior" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/40" />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    <div className="space-y-6">
                        <div className="space-y-6 overflow-hidden text-center md:text-start mt-15 md:mt-0">
                            <motion.h1
                                className="text-4xl lg:text-5xl font-bold leading-tight text-white"
                                variants={headingVariants}
                                initial="hidden"
                                animate={controls}
                                custom={1}
                            >
                                TRANSFORME SEU CORPO COM{" "}
                                <span className="text-green-400">TREINOS INTELIGENTES</span>
                            </motion.h1>
                            <motion.p
                                className="text-xl text-gray-300 max-w-2xl"
                                variants={headingVariants}
                                initial="hidden"
                                animate={controls}
                                custom={2}
                            >
                                Acesse uma plataforma completa com treinos, suporte e resultados
                                reais.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-col justify-center items-center md:items-start md:justify-normal sm:flex-row gap-4 mb-0"
                            variants={buttonContainer}
                            initial="hidden"
                            animate={controls}
                        >
                            <motion.div variants={buttonVariants}>
                                <Button
                                    size="lg"
                                    className="bg-green-400 hover:bg-green-500 cursor-pointer text-black font-semibold text-lg px-8 py-4 shadow-lg rounded-xl flex items-center gap-2"

                                >
                                    Iniciar agora
                                </Button>
                            </motion.div>
                            <motion.div variants={buttonVariants}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-green-400 text-green-400 bg-black hover:bg-green-400 cursor-pointer hover:text-black text-lg px-8 py-4 font-semibold rounded-xl flex items-center gap-2"

                                >
                                    Ver planos
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            ref={statsRef}
                            // className="grid grid-cols-1 sm:grid-cols-3 pt-8"
                            className="flex justify-around items-center sm:justify-between md:w-2/3 pt-8"
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.8 } },
                            }}
                        >
                            <motion.div
                                className="text-center sm:text-start"
                                variants={{
                                    hidden: { opacity: 0, y: 15 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                                }}
                            >
                                <div className="text-xl font-bold text-green-400">
                                    +{alunos.toLocaleString()}
                                </div>
                                <div className="text-gray-400">alunos
                                </div>
                            </motion.div>
                            <motion.div
                             className="text-center sm:text-start"
                                variants={{
                                    hidden: { opacity: 0, y: 15 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                                }}
                            >
                                <div className="text-xl font-bold text-green-400">Para Todos</div>
                                <div className="text-gray-400">os objetivos</div>
                            </motion.div>
                            <motion.div
                              className="text-center sm:text-start"
                                variants={{
                                    hidden: { opacity: 0, y: 15 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                                }}
                            >
                                <div className="text-xl font-bold text-green-400">Suporte</div>
                                <div className="text-gray-400">exclusivo AM</div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="relative flex justify-center">
                        <motion.div
                            className="relative bg-gradient-to-br from-green-400/20 to-transparent rounded-full p-8 h-96 w-96 flex items-center justify-center shadow-2xl"
                            animate={imageControls}
                        />
                        <Image
                            src="/hero.webp"
                            alt="AM PERSONAL TRAINER"
                            width={400}
                            height={400}
                            className="object-contain absolute top-10"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}