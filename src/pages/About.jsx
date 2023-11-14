import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="w-full my-20">
        <motion.h3
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-5xl font-bold text-left underline underline-offset-8 decoration-4 decoration-emerald-500"
        >
          About
        </motion.h3>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est maiores vitae delectus exercitationem recusandae soluta nesciunt harum
        dignissimos eligendi, repellat dolore at id eaque sit neque maxime architecto quod cumque?
      </p>
    </>
  );
}