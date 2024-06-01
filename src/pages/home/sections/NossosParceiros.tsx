import React from 'react';
import { motion } from 'framer-motion';

import empresa1 from '@/assets/empresas/empresa1.png';
import empresa2 from '@/assets/empresas/empresa2.png';
import empresa3 from '@/assets/empresas/empresa3.png';
import empresa4 from '@/assets/empresas/empresa4.png';

export default function NossosParceiros() {
    const slides = [
        { imagem: empresa1, alt: 'Empresa 1' },
        { imagem: empresa2, alt: 'Empresa 2' },
        { imagem: empresa3, alt: 'Empresa 3' },
        { imagem: empresa4, alt: 'Empresa 4' },
        { imagem: empresa1, alt: 'Empresa 1' },
        { imagem: empresa2, alt: 'Empresa 2' },
        { imagem: empresa3, alt: 'Empresa 3' },
        { imagem: empresa4, alt: 'Empresa 4' },
    ];

    const duplicatedSlides = [...slides, ...slides]; // Duplicando slides para efeito contínuo

    return (
        <>
            <div className="flex relative bottom-[8em] z-10 h-[50em] bg-white">
                <div className="nossos-parceiros-header mt-[10em] flex flex-col items-center w-full">
                    <h3 className="text-3xl text-loguin-blue font-bold">
                        Nossos Parceiros
                    </h3>
                    <p className="font-normal text-center">
                        Quem confia, cresce junto: a força dos nossos parceiros
                    </p>
                    <div className="empresas-carrosel">
                        <div className="relative h-full overflow-hidden py-12 bg-white mx-auto" style={{ width: "80%" }}>
                            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>
                            <motion.div
                                className="flex "
                                animate={{
                                    x: ['0%', '-100%'],
                                    transition: {
                                        ease: 'linear',
                                        duration: 35,
                                        repeat: Infinity,
                                    }
                                }}
                            >
                                {duplicatedSlides.map((slide, index) => (
                                    <div key={index} className="flex-shrink-0 px-4" style={{ width: `${100 / slides.length}%` }}>
                                        <div className="flex items-center justify-center h-full">
                                         
                                            <img src={slide.imagem} alt={slide.alt} className="w-48 h-48 object-contain" />

                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
