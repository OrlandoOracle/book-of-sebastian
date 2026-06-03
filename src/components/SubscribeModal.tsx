"use client";

import { useEffect, useState } from "react";

type Props = {
  label?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function SubscribeModal({
  label = "Get New Chapters",
  variant = "secondary",
  className = "",
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`}
        onClick={() => setOpen(true)}
      >
        {label}
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Subscribe"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            background: "rgba(5,5,8,0.72)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel reveal"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "30rem",
              padding: "2.75rem 2rem 2rem",
              textAlign: "center",
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "0.8rem",
                right: "1.05rem",
                background: "none",
                border: 0,
                color: "var(--color-ink-faint)",
                fontSize: "1.6rem",
                lineHeight: 1,
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <p className="eyebrow" style={{ marginBottom: "0.8rem" }}>
              The Book of Sebastian
            </p>
            <h2
              className="font-title"
              style={{
                fontSize: "1.9rem",
                color: "var(--color-ink)",
                margin: "0 0 0.6rem",
              }}
            >
              Get new <span className="gold-text">chapters</span>
            </h2>
            <p
              className="font-serif"
              style={{
                color: "var(--color-ink-soft)",
                margin: "0 0 1.4rem",
                fontSize: "1rem",
                lineHeight: 1.6,
              }}
            >
              The first chapters are free to read. Get each new one by email as
              the work is finished — free, unsubscribe anytime.
            </p>

            {/* Substack's own widget — runs on substack.com, so the subscribe
                actually lands. Framed inside the dark panel. */}
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--color-line)",
                background: "#fff",
              }}
            >
              <iframe
                src="https://sebastiangerhardt.substack.com/embed"
                title="Subscribe to The Book of Sebastian"
                width="100%"
                height={150}
                scrolling="no"
                style={{ border: 0, display: "block", colorScheme: "light" }}
              />
            </div>

            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.8rem",
                color: "var(--color-ink-faint)",
              }}
            >
              Prefer Substack?{" "}
              <a
                href="https://sebastiangerhardt.substack.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-gold)" }}
              >
                Subscribe there →
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
