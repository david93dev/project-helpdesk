import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";

import React from "react";

const NewCall = () => {
  return (
    <div className="mx-auto w-[95vw] max-w-2xl pt-8">
      <div className="pb-4 flex justify-between items-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Abrir Chamado
        </h3>
      </div>
      <form action="" className="py-8">
        <div className="space-y-4">
          {/* Título */}
          <div>
            <Label className="mb-2" htmlFor="titulo">Título da solicitação</Label>
            <Input
              id="titulo"
              type="text"
              placeholder="Digite o título da solicitação"
              required
            />
          </div>

          {/* Nome */}
          <div>
            <Label className="mb-2" htmlFor="nome">Nome do solicitante</Label>
            <Input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              required
            />
          </div>

          {/* Setor */}
          <div>
            <Label className="mb-2" htmlFor="setor">Setor do solicitante</Label>
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

          {/* Detalhes */}
          <div>
            <Label className="mb-2" htmlFor="message">Detalhes da solicitação</Label>
            <Textarea
              id="message"
              placeholder="Digite detalhes da sua solicitação."
              required
            />
          </div>

          {/* Tipo */}
          <div>
            <Label className="mb-2" htmlFor="tipo">Tipo de Solicitação</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tipo de solicitação" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Tipos</SelectLabel>
                  <SelectItem value="Dúvidas">Dúvidas</SelectItem>
                  <SelectItem value="Nova Implementação">
                    Nova Implementação
                  </SelectItem>
                  <SelectItem value="Verificação de Apostas">
                    Verificação de Apostas
                  </SelectItem>
                  <SelectItem value="Solicitações de Acesso">
                    Solicitações de Acesso
                  </SelectItem>
                  <SelectItem value="Outros">Outros</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Prioridade */}
          <div>
            <Label className="mb-2" htmlFor="prioridade">Prioridade</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Prioridade" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Prioridades</SelectLabel>
                  <SelectItem value="Alta">Alta</SelectItem>
                  <SelectItem value="Média">Média</SelectItem>
                  <SelectItem value="Baixa">Baixa</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Anexos */}
          <div>
            <Label className="mb-2" htmlFor="anexos">Anexos</Label>
            <p className="text-muted-foreground mb-1 text-xs">
              Caso haja necessidade de um print, envie-nos.
            </p>
            <Input id="anexos" type="file" />
          </div>
        </div>

        <div className="my-5">
          <Button>Enviar Solicitação</Button>
        </div>
      </form>
    </div>
  );
};

export default NewCall;
