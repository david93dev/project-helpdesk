import HeaderPages from "@/components/HeaderPages";
import TableConfig from "@/components/TableConfig";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ConfigPage = () => {
  return (
    <div className="mx-auto w-[78vw] pt-8">
      <HeaderPages title={"Configurações"} />

      <div className="w-full my-2 flex justify-start items-center px-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Adicionar Novo Perfil</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Cadastrar Perfil</DialogTitle>
              <DialogDescription>
                Cadastre as informações do seu perfil.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center space-y-2 gap-2">
              <div className="grid w-full flex-1 gap-2">
                <Label htmlFor="Name">Nome</Label>
                <Input id="link" placeHolder="Altere seu nome" readOnly />
              </div>
              <div className="grid w-full flex-1 gap-2">
                <Label htmlFor="Local">Local</Label>
                <Input id="local" placeHolder="Altere seu local" readOnly />
              </div>
              <div className="grid w-full flex-1 gap-2">
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  placeHolder="Altere seu telefone"
                  readOnly
                />
              </div>
              <div className="grid w-full flex-1 gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeHolder="Altere seu Email" readOnly />
              </div>
               <div className="grid w-full flex-1 gap-2">
                <Label htmlFor="Cargo">Cargo</Label>
                <Input id="Cargo" placeHolder="Altere seu cargo" readOnly />
              </div>
              <div className="grid w-full flex-1 gap-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" placeHolder="Digite sua senha" readOnly />
              </div>
            </div>
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cadastrar
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div>
        <TableConfig />
      </div>
    </div>
  );
};

export default ConfigPage;
