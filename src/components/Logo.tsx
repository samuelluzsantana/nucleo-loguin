import React from 'react';
import logobranca from '@/assets/GraficaInteligente_FT.png'
import logoescura from '@/assets/GraficaInteligente_FT2.png'

interface LogoProps {
  height: number;
  width: number;
  isDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ height, width, isDark = true }) => {
  return (
    <img
      src={isDark ? logoescura : logobranca}
      alt='Logo da Gráfica Inteligente'
      height={height}
      width={width}
    />
  );
};

export default Logo;
