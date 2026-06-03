import SubscribeModal from "./SubscribeModal";

type Props = { kind?: "chapter" | "essay" };

/**
 * Inline subscribe capture for the end of a chapter/essay (and anywhere the
 * reader's attention peaks). Opens the on-brand subscribe modal in place
 * instead of bouncing the reader off to Substack.
 */
export default function SubscribeCTA({ kind = "chapter" }: Props) {
  const noun = kind === "essay" ? "essays" : "chapters";
  return (
    <div className="glass-panel reveal mx-auto mt-16 max-w-xl p-10 text-center">
      <p className="eyebrow mb-3">Keep reading</p>
      <h3 className="font-title text-2xl font-semibold text-ink md:text-3xl">
        Don&apos;t miss the next one.
      </h3>
      <p className="mx-auto mt-3 max-w-md font-serif text-ink-soft">
        The first chapters are free to read here. Get each new {noun} by email
        as the work is finished — no schedule, no filler.
      </p>
      <div className="mt-6 flex justify-center">
        <SubscribeModal
          label={kind === "essay" ? "Get New Essays" : "Get New Chapters"}
          variant="primary"
        />
      </div>
    </div>
  );
}
