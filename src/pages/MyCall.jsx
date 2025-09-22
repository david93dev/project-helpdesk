import HeaderPages from "@/components/HeaderPages";
import TableMyCall from "@/components/TableMyCall";
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



const MyCall = () => {
  return (
    <div className="mx-auto w-[78vw] pt-8">

      <HeaderPages title={"Meus chamados"} nameButton={"+ Novo Chamado"} to={"/app/novo-chamado"}/>

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
