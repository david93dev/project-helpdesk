import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea"

import React from "react";

const NewCall = () => {
  return (
    <div className="pt-8">
      <div className="pb-4 flex justify-between items-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Abrir Chamado
        </h3>
      </div>
      <form action="" className="py-8">
        <div className="grid gap-2">
          <div className="grid  gap-2">
            <Label htmlFor="text">Título da solicitação</Label>
            <Input
              id="text"
              type="text"
              placeholder="Digite o título da solicitação "
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="text">Nome do solicitante</Label>
            <Input
              id="text"
              type="text"
              placeholder="Digite seu nome"
              required
            />
            <div className="grid gap-2">
              <Label htmlFor="text">Setor do solicitante</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Setor do solicitante" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Setores</SelectLabel>
                    <SelectItem value="Atendimento">Atendimento</SelectItem>
                    <SelectItem value="Segurança">Segurança</SelectItem>
                    <SelectItem value="Gestão do Afiliado">
                      Gestão do Afiliado
                    </SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Detalhes da solicitação</Label>
              <Textarea placeholder="Digite detalhes da sua solicitação." id="message" />
            </div>

             <div className="grid gap-2">
              <Label htmlFor="text">Tipo de Solicitação</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Setor do solicitante" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Bugs</SelectLabel>
                    <SelectItem value="Atendimento">Dúvidas</SelectItem>
                    <SelectItem value="Segurança">Nova Implementação</SelectItem>
                    <SelectItem value="Gestão do Afiliado">
                      Verificação de Apostas
                    </SelectItem>
                    <SelectItem value="Marketing">Solicitações de Acesso</SelectItem>
                    <SelectItem value="Outro">Outros</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

             <div className="grid gap-2">
              <Label htmlFor="text">Prioridade</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Prioridade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Setores</SelectLabel>
                    <SelectItem value="Atendimento">Atendimento</SelectItem>
                    <SelectItem value="Segurança">Segurança</SelectItem>
                    <SelectItem value="Gestão do Afiliado">
                      Gestão do Afiliado
                    </SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewCall;
