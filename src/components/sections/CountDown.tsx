"use client";

type OpeningCoverProps = {
  isOpen: boolean;
};

export default function CountDown({ isOpen }: OpeningCoverProps) {
  return (
    <div className={`h-full ${isOpen ? "overflow-y-auto" : "overflow-hidden"}`}>
      <section className="flex min-h-screen items-center justify-center bg-cover bg-center">
        <div className="text-center">
          <h1>Test</h1>
        </div>
      </section>
    </div>
  );
}
