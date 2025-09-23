import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function CallDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  
  const [ticket, setTicket] = useState(location.state?.ticket ?? null);

  
  useEffect(() => {
    if (ticket) return;
    (async () => {
      try {
        const res = await fetch(`/api/calls/${id}`);
        if (!res.ok) throw new Error("Falha ao buscar chamado");
        const data = await res.json();
        setTicket(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [id, ticket]);

  const badgeClass = (s = "") => {
    const v = String(s).toLowerCase();
    const map = {
      success:    "border-emerald-500/20 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
      pending:    "border-amber-500/20  bg-amber-500/15  text-amber-700  dark:text-amber-300",
      processing: "border-sky-500/20    bg-sky-500/15    text-sky-700    dark:text-sky-300",
      failed:     "border-red-500/20    bg-red-500/15    text-red-700    dark:text-red-300",
    };
    return map[v] ?? "border-muted/40 bg-muted text-foreground/70";
  };

  return (
    <section className="mx-auto w-[95vw] max-w-4xl py-8">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h1 className="text-2xl font-semibold">Chamado ID: {id}</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate(-1)}>Voltar</Button>
        </div>
      </div>

      <Separator className="mb-4" />

      {!ticket ? (
        <p className="text-sm text-muted-foreground">Carregando...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-3 border rounded-md p-5">
            <h2 className="text-lg font-medium">{ticket.title}</h2>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={badgeClass(ticket.status)}>
                {ticket.status}
              </Badge>
              <span className="text-xs text-muted-foreground">{ticket.date}</span>
            </div>
            <p className="text-sm"><b>E-mail:</b> {ticket.email}</p>
          </div>

          <div className="space-y-3 border rounded-md p-5">
            <p className="text-sm font-medium">Descrição</p>
            <p className="text-sm text-foreground/90">
              {ticket.description ?? "Sem descrição fornecida."}
            </p>
          </div>

          <div className="space-y-3 border rounded-md p-5">
            <p className="text-sm font-medium">Comentários</p>
           <div className="border p-8 rounded-2xl">
             <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-sm text-foreground/90">
              <li className="" >{ticket.description ?? "Sem comentário fornecida."}</li>
            </ul>
           </div>
            <div className="flex gap-5 py-2">
                <Input />
                <Button >Enviar Comentário</Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 justify-end">
            <Button variant="secondary">Marcar como Resolvido</Button>
            <Button variant="secondary">Marcar como em Andamento</Button>
            <Button variant="destructive">Reabrir Chamado</Button>
          </div>

        </div>
      )}
    </section>
  );
}
