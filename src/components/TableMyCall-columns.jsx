import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

export const columns = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "title", header: "Título" },
  { accessorKey: "email", header: "Email" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const value = String(row.getValue("status") ?? "").toLowerCase();
      const map = {
        success: {
          label: "Sucesso",
          className:
            "border-emerald-500/20 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
        },
        pending: {
          label: "Pendente",
          className:
            "border-amber-500/20  bg-amber-500/15  text-amber-700  dark:text-amber-300",
        },
        processing: {
          label: "Em andamento",
          className:
            "border-sky-500/20    bg-sky-500/15    text-sky-700    dark:text-sky-300",
        },
        failed: {
          label: "Falhou",
          className:
            "border-red-500/20    bg-red-500/15    text-red-700    dark:text-red-300",
        },
      };
      const cfg = map[value] ?? {
        label: value || "—",
        className:
          "border-muted/40 bg-muted text-foreground/70 dark:text-foreground/70",
      };
      return (
        <Badge variant="outline" className={cfg.className}>
          {cfg.label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row }) => String(row.getValue("date") ?? "—"),
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const ticket = row.original; // { id, title, email, status, date, ... }
      return (
        <Button asChild variant="outline" size="sm">
          <Link to={`/app/meus-chamados/${ticket.id}`} state={{ ticket }}>
            Ver
          </Link>
        </Button>
      );
    },
  },
];
