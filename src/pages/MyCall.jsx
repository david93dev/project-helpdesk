import TableMyCall from "@/components/TableMyCall";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";


const MyCall = () => {
  return (
    <div className="mx-auto w-[95vw] max-w-7xl pt-8">
      <div className="pb-4 flex justify-between max-w-6xl items-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Meus chamados
        </h3>

        <Button asChild>
          <Link to="/app/novo-chamado">+ Novo Chamado</Link>
        </Button>
      </div>

      <div className="mt-8 flex gap-2 max-w-2xl">
        <Input
          id="nome"
          type="text"
          placeholder="Busque por ID, Título, Email... "
          className="py-6 "
          required
        />
        <Select>
          <SelectTrigger className="w-[180px] py-6">
            <SelectValue placeholder="Todos" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="Em Andamento">Em Andamento</SelectItem>
              <SelectItem value="Resolvido">Resolvido</SelectItem>
              <SelectItem value="Aberto">
                Aberto
              </SelectItem>
              <SelectItem value="Reaberto">Reaberto</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="max-w-6xl">
        <TableMyCall />
      </div>

   
    </div>
  );
};

export default MyCall;
