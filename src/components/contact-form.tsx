"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { contactProjectTypes } from "@/content/site-content";

type ContactState = "idle" | "sending" | "sent" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  projectType: contactProjectTypes[0],
  projectLocation: "",
  timeline: "",
  description: "",
};

export function ContactForm() {
  const [status, setStatus] = useState<ContactState>("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState(initialForm);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        setStatus("error");
        setMessage("Submission could not be recorded. Please try again.");
        return;
      }

      setStatus("sent");
      setMessage("Project brief captured.");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setMessage("Submission could not be recorded. Please try again.");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="form-label">Name</span>
          <input
            className="form-input"
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          />
        </label>
        <label className="space-y-2">
          <span className="form-label">Email</span>
          <input
            type="email"
            className="form-input"
            required
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
          />
        </label>
        <label className="space-y-2">
          <span className="form-label">Phone</span>
          <input
            className="form-input"
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
          />
        </label>
        <label className="space-y-2">
          <span className="form-label">Project Type</span>
          <select
            className="form-input"
            value={form.projectType}
            onChange={(event) =>
              setForm((current) => ({ ...current, projectType: event.target.value }))
            }
          >
            {contactProjectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="form-label">Location</span>
          <input
            className="form-input"
            placeholder="City / region / facility"
            value={form.projectLocation}
            onChange={(event) =>
              setForm((current) => ({ ...current, projectLocation: event.target.value }))
            }
          />
        </label>
        <label className="space-y-2">
          <span className="form-label">Timeline / Budget Context</span>
          <input
            className="form-input"
            placeholder="Optional"
            value={form.timeline}
            onChange={(event) => setForm((current) => ({ ...current, timeline: event.target.value }))}
          />
        </label>
      </div>
      <label className="space-y-2">
        <span className="form-label">Project Description</span>
        <textarea
          className="form-input min-h-[12rem] resize-y"
          required
          placeholder="Tell us what environment you are working in, what performance issue you face, and where you are in the project lifecycle."
          value={form.description}
          onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))}
        />
      </label>
      <div className="flex flex-col gap-3 border-t border-[var(--line)] pt-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
          Serious enquiries only. Use the form to outline the environment, the performance concern and the point of intervention required.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-3 border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-medium uppercase tracking-[0.14em] text-[var(--panel-dark)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span>{status === "sending" ? "Submitting" : "Submit Enquiry"}</span>
          <Send className="h-4 w-4" />
        </button>
      </div>
      {message ? (
        <p
          className={
            status === "error"
              ? "text-sm text-red-600"
              : "text-sm leading-6 text-[var(--accent-strong)]"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
