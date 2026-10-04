import { weddingData } from "@/src/data/wedding";

export default function OpeningCover() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em]">
          The Wedding of
        </p>

        <h1 className="text-5xl font-bold mb-5">
          {weddingData.bride.name} & {weddingData.groom.name}
        </h1>

        <button
          type="button"
          className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
        >
          Open Invitation
        </button>
      </div>
    </section>
  );
}
