import { DashboardCard } from "@/components/DashBoardCard";
import HeaderPages from "@/components/HeaderPages";
import TableDash from "@/components/TableDash";
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
    <div className="mx-auto w-[78vw] pt-8">
      
      <HeaderPages title={"Dashboard"} />

      {/* grid responsiva para os cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl">
        {itemsCard.map((item) => (
          <DashboardCard key={item.title} title={item.title} date={item.date} />
        ))}
      </div>

      <div className="max-w-6xl">
        <TableDash />
      </div>
    </div>
  );
}
