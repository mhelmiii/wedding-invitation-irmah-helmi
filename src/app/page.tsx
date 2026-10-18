"use client";

import { useState } from "react";
import CountDown from "../components/sections/CountDown";
import OpeningCover from "../components/sections/OpeningCover";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const weddingDate = "2026-12-05T09:00:00";

  return (
    <main className="w-full max-w-107.5 min-h-screen bg-white shadow-2xl shadow-black/50 relative overflow-x-hidden">
      <OpeningCover isOpen={isOpen} onOpen={handleOpen} />
      <CountDown isOpen={isOpen} targetDate={weddingDate} />
    </main>
  );
}
