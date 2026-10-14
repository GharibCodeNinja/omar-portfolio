export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const isTodo = (s: string) => s.trim().startsWith("TODO");

/** Placeholder ("TODO...") strings only show in development, never on the live site. */
export function visible(list: string[]) {
  return process.env.NODE_ENV === "production" ? list.filter((s) => !isTodo(s)) : list;
}
