import DataTable from "@/components/DataTable"
import { columns } from "@/components/TableConfig-columns"

// dados compatíveis com as colunas
export const data = [
  {
    id: "1",
    email: "ana@example.com",
    status: "success",
    date: "2025-08-28 14:20",
  },
  {
    id: "2",
    email: "bob@example.com",
    status: "success",
    date: "2025-08-29 09:12",

  },
  {
    id: "3",
    email: "carol@example.com",
    status: "success",
    date: "2025-08-30 16:47",
  },
  {
    id: "4",
    email: "davi@example.com",
    status: "failed",
    date: "2025-08-31 08:03",
  },
]

export default function TableConfig() {
  return (
    <section className="py-4">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight py-4">Usuários cadastrados</h4>
      <DataTable columns={columns} data={data} />
    </section>
  )
}
