//tilt hata diya h maine mobile se 
import React from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';

const ROTATION_RANGE = 35;

export const TiltCard = ({
  title,
  subtitle,
  icon,
  gradient,
  mouseX,
  mouseY,
  image,
  onClick,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isMobile, setIsMobile] = React.useState(false);

  // Check for mobile device on mount and window resize
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  React.useEffect(() => {
    // Only apply tilt effect if not on mobile
    if (!isMobile) {
      const rotateX = (mouseY / window.innerHeight) * ROTATION_RANGE * 2 - ROTATION_RANGE;
      const rotateY = (mouseX / window.innerWidth) * ROTATION_RANGE * 2 - ROTATION_RANGE;
      x.set(rotateY);
      y.set(-rotateX);
    } else {
      // Reset to neutral position on mobile
      x.set(0);
      y.set(0);
    }
  }, [mouseX, mouseY, isMobile]);

  const springConfig = { damping: 30, stiffness: 200 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const transform = useMotionTemplate`rotateX(${ySpring}deg) rotateY(${xSpring}deg)`;

  return (
    <motion.div
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        transform: isMobile ? 'none' : transform,
      }}
      className={`relative h-96 w-72 cursor-pointer rounded-xl ${gradient} before:absolute before:inset-0 before:rounded-xl before:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)] after:absolute after:inset-[2px] after:rounded-xl after:bg-[linear-gradient(rgba(255,255,255,0.1),transparent_15%)]`}
    >
      <div
        style={{
          transform: isMobile ? 'none' : 'translateZ(20px)',
          transformStyle: isMobile ? 'flat' : 'preserve-3d',
        }}
        className="absolute inset-0 overflow-hidden rounded-xl"
      >
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-200"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-slate-900/30 to-slate-900/60" />
      </div>

      <div
        style={{ 
          transform: isMobile ? 'none' : 'translateZ(20px)',
        }}
        className="absolute inset-0 rounded-xl opacity-20 [background-image:_linear-gradient(rgba(255,255,255,0.1)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:_20px_20px]"
      />
      
      <div
        style={{
          transform: isMobile ? 'none' : 'translateZ(75px)',
          transformStyle: isMobile ? 'flat' : 'preserve-3d',
        }}
        className="absolute inset-0 flex flex-col items-center justify-center p-6"
      >
        <div
          style={{
            transform: isMobile ? 'none' : 'translateZ(50px)',
          }}
          className="relative mb-4 grid h-20 w-20 place-items-center rounded-full bg-slate-900/80 text-4xl shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-sm before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_70%)]"
        >
          {icon}
          <div className="absolute inset-0 animate-pulse rounded-full [box-shadow:_0_0_25px_currentColor]" />
        </div>

        <div
          style={{
            transform: isMobile ? 'none' : 'translateZ(50px)',
          }}
          className="text-center"
        >
          <h3 className="mb-2 text-3xl font-bold tracking-wider text-white [text-shadow:_0_0_20px_rgba(255,255,255,0.5)]">
            {title}
          </h3>
          <p className="text-lg font-medium text-slate-300/90 [text-shadow:_0_0_10px_rgba(255,255,255,0.3)]">
            {subtitle}
          </p>
        </div>
      </div>

      <div
        style={{ transform: isMobile ? 'none' : 'translateZ(2px)' }}
        className="absolute inset-2 rounded-xl bg-gradient-to-b from-white/8 to-transparent"
      />
    </motion.div>
  );
};

export default TiltCard;




