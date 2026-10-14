/**
 * Extra facts ONLY the "Ask Omar" chatbot knows. Nothing in this file is rendered on the website:
 * it is imported by src/app/api/chat/route.ts (server) and by no page or component.
 *
 * Add one fact per entry, written as a complete, self-contained sentence (or "Q: ... A: ...").
 * Keep each entry focused on one topic so the right one is retrieved for a question.
 *
 * IMPORTANT: this is NOT secret. The bot will repeat these to any visitor who asks.
 * Don't put phone numbers, salary expectations, or anything private here.
 *
 * Examples (delete the leading // and edit to your real facts):
 *   "Omar is available to start immediately and is open to relocating.",
 *   "Q: Why did Omar choose Flutter? A: He wanted one codebase for Android and iOS while keeping real-time audio performance.",
 *   "Omar's favorite project is Specto because it combined signal-processing theory with on-device AI.",
 */
export const botKnowledge: string[] = [];
