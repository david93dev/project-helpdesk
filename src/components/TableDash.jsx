import DataTable from "@/components/DataTable"
import { columns } from "@/components/TableDash-columns"

// dados compatíveis com as colunas
export const data = [
  {
    id: "1",
    title: "Falha no pagamento Pix",
    email: "ana@example.com",
    status: "success",
    date: "2025-08-28 14:20",
  },
  {
    id: "2",
    title: "Não consigo acessar o painel",
    email: "bob@example.com",
    status: "pending",
    date: "2025-08-29 09:12",
  },
  {
    id: "3",
    title: "Erro 500 ao criar chamado",
    email: "carol@example.com",
    status: "processing",
    date: "2025-08-30 16:47",
  },
  {
    id: "4",
    title: "Bug no tema escuro",
    email: "davi@example.com",
    status: "failed",
    date: "2025-08-31 08:03",
  },
]

export default function Payments() {
  return (
    <section className="py-4">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight py-4">Últimos chamados</h4>
      <DataTable columns={columns} data={data} />
    </section>
  )
}
