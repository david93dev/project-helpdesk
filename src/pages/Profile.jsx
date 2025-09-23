import HeaderPages from "@/components/HeaderPages";
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

const Profile = () => {
  return (
    <div className="mx-auto w-[78vw] pt-8">
      <HeaderPages
        title={"Perfil"}
        nameButton={"+ Novo Chamado"}
        to={"/app/novo-chamado"}
      />

      <div className="flex flex-col justify-center space-y-2 border p-5 rounded-2xl">
        <p>
          <b>Nome:</b> José Fulano da Silva{" "}
        </p>
        <p>
          <b>Local:</b> São Paulo, SP{" "}
        </p>
        <p>
          <b>Tel:</b> (11) 9 9999-9999{" "}
        </p>
        <p>
          <b>Cargo:</b> Atendimento{" "}
        </p>
        <p>
          <b>E-mail:</b> email@email.com{" "}
        </p>
        <p>
          <b>CPF:</b> 111.111.111-11{" "}
        </p>
      </div>

      <div className="w-full my-2 flex justify-end items-center px-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Editar Perfil</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Alterar Perfil</DialogTitle>
              <DialogDescription>
                Altere as informações do seu perfil.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center space-y-2 gap-2">
              <div className="grid w-full flex-1 gap-2">
                <Label htmlFor="Name" >
                  Nome
                </Label>
                <Input
                  id="link"
                  placeHolder="Altere seu nome"
                  readOnly
                />
              </div>
              <div className="grid w-full flex-1 gap-2">
                <Label htmlFor="Local" >
                  Local
                </Label>
                <Input
                  id="local"
                  placeHolder="Altere seu local"
                  readOnly
                />
              </div>
               <div className="grid w-full flex-1 gap-2">
                <Label htmlFor="telefone" >
                  Telefone
                </Label>
                <Input
                  id="telefone"
                  placeHolder="Altere seu telefone"
                  readOnly
                />
                
              </div>
              <div className="grid w-full flex-1 gap-2">
                <Label htmlFor="Cargo" >
                  Cargo
                </Label>
                <Input
                  id="Cargo"
                  placeHolder="Altere seu cargo"
                  readOnly
                />
              </div>
              <div className="grid w-full flex-1 gap-2">
                <Label htmlFor="email" >
                  Email
                </Label>
                <Input
                  id="email"
                  placeHolder="Altere seu Email"
                  readOnly
                />
                
              </div>
            </div>
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Alterar
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Profile;
