import { DashboardCard } from "@/components/DashBoardCard";
import Payments from "@/components/Payments";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const itemsCard = [
  { title: "Total", date: "4" },
  { title: "Abertos", date: "1" },
  { title: "Em Andamento", date: "1" },
  { title: "Resolvidos (Mês)", date: "1" },
  { title: "Reabertos", date: "0" },
];

export function Dashboard() {
  return (
    <div className="pt-8">
      <div className="pb-4 flex justify-between items-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Dashboard
        </h3>

        <Button asChild>
          <Link to="/app/abrir-chamado">+ Novo Chamado</Link>
        </Button>
      </div>

      {/* grid responsiva para os cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {itemsCard.map((item) => (
          <DashboardCard key={item.title} title={item.title} date={item.date} />
        ))}
      </div>

      <Payments />
    </div>
  );
}
