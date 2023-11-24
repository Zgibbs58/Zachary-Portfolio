import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CtaBtn from "../components/CtaBtn";
import AboutMe from "../components/AboutMe";

export default function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Zach Gibbs"],
      typeSpeed: 70,
      backSpeed: 70,
      smartBackspace: true,
      startDelay: 300,
      backDelay: 5000,
      cursorChar: "|",
      loop: true,
      showCursor: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="grid lg:grid-cols-2 mx-5 lg:mx-10 content-center justify-items-center overflow-x-hidden h-screen">
        <figure className="flex justify-center w-3/4 sm:w-1/2 md:w-1/3 lg:w-3/4 mb-5 lg:mb-0">
          <img className="rounded-full" src="/images/zach-headshot.jpg" alt="Zach's headshot" />
        </figure>
        <div className="grid content-end">
          <h1 className="text-4xl font-bold">
            <span ref={el} />
          </h1>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 1.25 }}>
            <h2 className="mt-4 text-2xl font-semibold">Full Stack Developer</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}>
            <p className="text md:mx-36 lg:mx-0 mt-8">
              Web developer based in Murfreesboro, TN with a passion for solving problems through coding and crafting visually appealing, functional
              websites.
            </p>
          </motion.div>
          <motion.div
            className="my-8 flex justify-center"
            animate={{
              scale: [0, 1.25, 1],
            }}
            transition={{ ease: "easeOut", duration: 1, delay: 2 }}
          >
            <CtaBtn />
          </motion.div>
        </div>
      </section>
      <section>
        <AboutMe />
      </section>
    </>
  );
}
