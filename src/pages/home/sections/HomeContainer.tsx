// react
import { motion } from 'framer-motion';
// components
import Button from "@/components/Button";
import { FlipWords } from "@/components/ui/flip-words";
// assets 
import Background from '@/assets/bg/background.png'
import assets from '@/assets/bg/assets.png'
import assets2 from '@/assets/bg/assets2.png'
// assets/icons
import { PiCaretDownLight } from "react-icons/pi";

export default function HomeContainer() {


    const words = ["completo", "rápido", "pratico", "moderno"];

    return (
        <>
            <img src={Background}
                className="relative  select-none bottom-[7em] w-full h-[50em] md:h-[65em]"
                alt="Descrição da Imagem"
            />

            <div className="flex flex-col w-full justify-center items-center md:items-start  absolute top-[10em] z-10 text-white">
                <div className="texto-e-button ml-0 md:ml-[13em]">
                    <div className="textos-home ">
                        <h1 className="w-[7.5em] md:w-[9.5em]  text-[2.5em] md:text-6xl leading-[1] font-semibold flex flex-col justify-start">
                            <div className="flex flex-col md:flex-row">
                                <span className="mr-0 md:mr-[1rem]">o mais</span>
                                <span><FlipWords words={words} /> <br /></span>
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <span className="mr-0 md:mr-[1rem]">sistema</span>
                                <span>integrado <span className="block md:hidden ">de</span></span>
                            </div>
                            <span className="flex w-full"><span className="hidden mr:0 md:block  md:mr-[1rem]">de</span> gestão gráficas</span>
                        </h1>

                        <h2 className="w-[21em] text-sm mt-8 font-normal md:w-[30em] md:text-xl">
                            otimize todos os processos da sua gráfica
                            e estabeleça conexões inteligentes e
                            intuitivas entre os setores.
                        </h2>
                    </div>

                    <div className="w-full flex justify-center">

                        <div className="mt-8 w-[15em]">
                            <Button>
                                saiba mais
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="assets h-full w-full flex justify-between mt-[1.25em] md:mt-[5.25em]">
                    <img src={assets2}
                        className="select-none bottom-[2em] h-[7em] md:h-[15em] md:relative md:bottom-[27em]"
                        alt="Descrição da Imagem"
                    />

                    <img src={assets}
                        className="select-none bottom-[7em] h-[10em]  md:h-[35em] md:relative md:bottom-[10em]"
                        alt="Descrição da Imagem"
                    />
                </div>

                <div className="scroll w-full flex justify-center absolute text-white top-[33em] md:top-[40em]">
                    <motion.div
                        style={{ top: "43em" }}
                        animate={{ y: [0, -20, 0], transition: { duration: 2, repeat: Infinity } }}
                    >
                        <motion.div className="scroll-assets cursor-pointer">
                            <PiCaretDownLight size={40} className="hidden md:block" />
                            <PiCaretDownLight size={20} className="block md:hidden" />


                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </>
    )
}