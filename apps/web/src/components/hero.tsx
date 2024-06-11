import { GradientBackground } from './gradient-bg';

export const Hero = () => {
  return (
    <section className="flex flex-col gap-10 overflow-hidden">
      <GradientBackground />
      <h1 className="text-5xl text-center">Hello Buddy!</h1>
      <p className="text-center text-3xl">Please join with us !</p>
    </section>
  );
};
