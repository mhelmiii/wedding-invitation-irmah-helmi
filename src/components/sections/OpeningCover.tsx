"use client";

import { weddingData } from "@/src/data/wedding";
import { motion } from "motion/react";

type OpeningCoverProps = {
  isOpen: boolean;
  onOpen: () => void;
};

export default function OpeningCover({ isOpen, onOpen }: OpeningCoverProps) {
  return (
    <section
      className={`absolute inset-0 z-50 flex min-h-screen items-end justify-center bg-cover bg-center transition-transform duration-2000 ease-in-out ${
        isOpen ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
      style={{ backgroundImage: "url('/images/background/bg-cover.png')" }}
    >
      <div className="text-center mb-20">
        <motion.p
          transition={{ type: "spring", duration: 2 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-6 text-sm font-bold text-emerald-900 uppercase tracking-[0.3em] text-shadow-lg/30"
        >
          The Wedding of
        </motion.p>

        <motion.h1
          transition={{ type: "spring", duration: 3 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="font-script text-5xl font-bold mb-5 text-emerald-900 text-shadow-lg/30"
        >
          {weddingData.bride.name} & {weddingData.groom.name}
        </motion.h1>

        <motion.p
          transition={{ type: "spring", duration: 4 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mb-6 text-2x1 font-bold text-emerald-900 text-shadow-lg/30"
        >
          Tamu Undangan
        </motion.p>

        <motion.button
          transition={{ type: "spring", duration: 5 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          type="button"
          onClick={onOpen}
          className="rounded-full bg-emerald-900 shadow-lg/30 px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
        >
          Open Invitation
        </motion.button>
      </div>
    </section>
  );
}
