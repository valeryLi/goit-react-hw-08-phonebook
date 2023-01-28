import ParticlesBg from 'particles-bg';

export const AnimatedBg = () => {
  return (
    <ParticlesBg
      type="circle"
      num={200}
      bg={{
        position: 'fixed',
        zIndex: -1,
        width: '100%',

        color: 'rgba(0, 0, 0, 0.2)',
      }}
    />
  );
};
