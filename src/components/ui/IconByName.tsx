import { BrainCircuit, Code, Database, Gamepad2, Globe, Layers, Smartphone, Terminal, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  code: Code,
  brain: BrainCircuit,
  layers: Layers,
  terminal: Terminal,
  globe: Globe,
  smartphone: Smartphone,
  database: Database,
  gamepad: Gamepad2,
};

export function IconByName({ name, size = 20, className }: { name: string; size?: number; className?: string }) {
  const Icon = icons[name] ?? Code;
  return <Icon size={size} className={className} aria-hidden="true" />;
}
