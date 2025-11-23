'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

export function ShaderGradientCard() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted
    ? theme === 'system'
      ? systemTheme
      : theme
    : 'dark';

  const lightColors = {
    color1: '#92dbe0',
    color2: '#0b7bff',
    color3: '#3865cf',
    brightness: 0.8,
  };

  const darkColors = {
    color1: '#4da3ff',
    color2: '#1a1a2e',
    color3: '#16213e',
    brightness: 0.6,
  };

  const colors = currentTheme === 'dark' ? darkColors : lightColors;

  return (
    <div className="shader-gradient-container">
      <ShaderGradientCanvas
        style={{
          width: '100%',
          height: '100%',
        }}
        lazyLoad={undefined}
        fov={undefined}
        pixelDensity={1}
        pointerEvents="auto"
      >
        <ShaderGradient
          animate="on"
          type="sphere"
          wireframe={false}
          shader="defaults"
          uTime={0}
          uSpeed={0.3}
          uStrength={0.3}
          uDensity={0.8}
          uFrequency={5.5}
          uAmplitude={3.2}
          positionX={-0.1}
          positionY={0}
          positionZ={0}
          rotationX={0}
          rotationY={130}
          rotationZ={70}
          color1={colors.color1}
          color2={colors.color2}
          color3={colors.color3}
          reflection={0.4}
          cAzimuthAngle={270}
          cPolarAngle={180}
          cDistance={0.5}
          cameraZoom={15.1}
          lightType="env"
          brightness={colors.brightness}
          envPreset="city"
          grain="on"
          toggleAxis={false}
          zoomOut={false}
          hoverState=""
          enableTransition={true}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
