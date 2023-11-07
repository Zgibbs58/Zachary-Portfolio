import Typed from "typed.js";
import React from "react";
import { motion } from "framer-motion";
import headshot from "../assets/zach-headshot.jpg";
import MainButton from "../components/MainButton";
import SecondaryButton from "../components/SecondaryButton";
import SkillsCarousel from "../components/SkillsCarousel";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Zach Gibbs"],
      typeSpeed: 70,
      backSpeed: 70,
      smartBackspace: true,
      startDelay: 700,
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
      <section className="grid sm:grid-cols-2 py-20 mx-5 sm:mx-10 content-center justify-items-center">
        <figure className="flex justify-center w-3/4 mb-5 sm:mb-0">
          <img className="rounded-full" src={headshot} alt="Zach's headshot" />
        </figure>
        <div className="grid content-center">
          <h1 className="text-3xl font-bold">
            <span ref={el} />
          </h1>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}>
            <h2 className="mt-4 text-xl font-semibold">Full Stack Developer</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 2 }}>
            <p className="text mt-8">
              Web developer from Murfreesboro, TN with a passion for solving problems with code and creating beautiful, functional websites.
            </p>
          </motion.div>
          <motion.div
            className="mt-10 flex justify-center"
            //   initial={{ opacity: 0, y: 100 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   transition={{ ease: "easeOut", duration: 1, delay: 2.5 }}
            //
            animate={{
              scale: [0, 1.25, 1],
            }}
            transition={{ ease: "easeOut", duration: 1, delay: 2.5 }}
          >
            <MainButton />
            {/* <SecondaryButton /> */}
          </motion.div>
        </div>
      </section>
      {/* <SkillsCarousel /> */}
    </>
  );
}
