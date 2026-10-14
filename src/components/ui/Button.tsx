import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition duration-200 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none";

const styles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-accent-2 text-white shadow-[0_8px_30px_-10px_rgba(124,108,255,0.7)] hover:brightness-110",
  secondary: "glass text-fg hover:bg-white/[0.07]",
  ghost: "text-muted hover:text-fg",
};

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type Props = { variant?: Variant } & (AnchorProps | ButtonProps);

export function Button(props: Props) {
  const { variant = "primary", className, children, ...rest } = props;
  const cls = cn(base, styles[variant], className);

  if ("href" in rest && rest.href) {
    return (
      <a className={cls} {...(rest as AnchorProps)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
}
