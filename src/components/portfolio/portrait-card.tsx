"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { softenIn, viewportOnce } from "./motion";

type PortraitCardProps = {
  src: string;
  alt: string;
};

export function PortraitCard({ src, alt }: PortraitCardProps) {
  return (
    <motion.div
      variants={softenIn(0.16, 0.94)}
      initial="hidden"
      animate="show"
      whileHover={{
        y: -8,
        rotate: -1.1,
        scale: 1.012,
      }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      viewport={viewportOnce}
      className="motion-card paper-card grain-overlay relative mx-auto w-full max-w-[24rem] rounded-[2rem] p-3"
    >
      <motion.div
        className="relative aspect-[5/6] overflow-hidden rounded-[1.5rem] bg-surface"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 80vw, 24rem"
        />
      </motion.div>
    </motion.div>
  );
}
