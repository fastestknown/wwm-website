"use client";

import { useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-[560px] mx-auto text-center">
      <h2 className="font-heading text-3xl md:text-4xl text-[var(--trust-blue)] mb-4">
        Stay in the loop
      </h2>
      <p className="text-lg text-[var(--trust-blue)]/80 mb-8">
        We share what we&apos;re learning about fractional leadership, trust, and building
        something that actually matters. No noise. Just signal.
      </p>

      {status === "success" ? (
        <p className="text-[var(--teal-sage)] font-semibold text-lg">
          You&apos;re in. Thanks for joining.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={status === "loading"}
            className="flex-1 h-12 px-4 bg-[var(--off-white)] border border-[var(--trust-blue)]/30 rounded text-base text-[var(--trust-blue)] placeholder:text-[var(--trust-blue)]/40 focus:outline-none focus:border-2 focus:border-[var(--teal-sage)] transition-colors duration-200 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="h-12 px-6 bg-[var(--teal-sage)] text-[var(--trust-blue)] font-semibold rounded hover:brightness-90 active:brightness-85 transition-all duration-200 disabled:opacity-50 whitespace-nowrap"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-3 text-sm text-[var(--coral-accent)]">
          Something went wrong. Try again or email us directly.
        </p>
      )}
    </div>
  );
}
