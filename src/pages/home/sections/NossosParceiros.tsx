import Slider from 'react-infinite-logo-slider'


import empresa1 from '@/assets/empresas/empresa1.png';
import empresa2 from '@/assets/empresas/empresa2.png';
import empresa3 from '@/assets/empresas/empresa3.png';
import empresa4 from '@/assets/empresas/empresa4.png';
import Button from '@/components/Button';

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

    const duplicatedSlides = [...slides, ...slides];

    // const isMobile = window.innerWidth < 700

    return (
        <>
            <div className="flex relative bottom-[10em] z-10 h-[45em] bg-white">
                <div className="nossos-parceiros-header mt-[10em] flex flex-col items-center w-full">

                    <div className="text-nossos flex flex-col items-center">
                        <h3 className="text-3xl text-loguin-blue font-bold">
                            Nossos Parceiros
                        </h3>
                        <p className="font-normal text-center">
                            Quem confia, cresce junto: a força dos nossos parceiros
                        </p>
                    </div>

                    <div className="empresas-carrosel w-full">
                        <Slider
                            width={"150px"}
                            duration={40}
                            pauseOnHover={true}
                            blurBorders={false}
                            blurBoderColor={'#fff'}
                        >
                            {duplicatedSlides.map((slide) => (
                                <Slider.Slide>
                                    <img src={slide.imagem} alt={slide.alt} className="w-48 h-48 object-contain" />
                                </Slider.Slide>
                            ))}
                        </Slider>
                    </div>

                    <p className='mt-4 w-[20em] md:w-[40em] text-justify'>Em nossa jornada, acreditamos que o
                        crescimento é uma jornada compartilhada.
                        Nossos parceiros são peças fundamentais
                        nesse processo, confiando em nossa visão e
                        colaborando para alcançar o sucesso
                        conjunto. Acreditamos que, ao construir
                        relacionamentos sólidos e confiáveis, não
                        apenas fortalecemos nossos laços, mas
                        também prosperamos em conjunto. Quem
                        confia, cresce junto.
                    </p>

                    <div className="mt-8 w-full md:w-[40em] px-[2em]">

                        <Button>
                            saiba mais
                        </Button>
                    </div>


                </div>
            </div >
        </>
    );
}
