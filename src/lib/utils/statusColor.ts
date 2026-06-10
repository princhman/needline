const STATUS_COLORS: Record<string, string> = {
  triage: "bg-zinc-500",
  backlog: "bg-slate-500",
  unstarted: "bg-blue-500",
  planned: "bg-blue-500",
  started: "bg-yellow-500",
  paused: "bg-orange-500",
  completed: "bg-green-500",
  canceled: "bg-red-500",
  duplicate: "bg-purple-500",
};

export function getStatusColor(status: string) {
  const normalized = status.trim().toLowerCase();

  return STATUS_COLORS[normalized] ?? "bg-muted-foreground";
}
