"use client";

import { useEffect, useState } from "react";

type CountDownProps = {
  isOpen: boolean;
  targetDate: string;
};

export default function CountDown({ targetDate, isOpen }: CountDownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className={`h-full ${isOpen ? "overflow-y-auto" : "overflow-hidden"}`}>
      <section
        className="flex flex-col min-h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background/bg-cover-2.png')" }}
      >
        <div>
          <h1 className="text-sm font-bold text-white uppercase tracking-[0.3em] text-shadow-lg/30">
            Menuju Bahagia :
          </h1>

          <h1 className="text-sm font-bold text-white uppercase tracking-[0.3em] text-shadow-lg/30">
            05 December 2026
          </h1>
        </div>

        <div className="bg-emerald-600 p-3 shadow-lg/30">
          <p className="text-sm font-bold text-white uppercase text-shadow-lg/30">
            Days {formatNumber(timeLeft.days)} Hours{" "}
            {formatNumber(timeLeft.hours)} Minutes{" "}
            {formatNumber(timeLeft.minutes)} Seconds{" "}
            {formatNumber(timeLeft.seconds)}
          </p>
        </div>
      </section>
    </div>
  );
}
