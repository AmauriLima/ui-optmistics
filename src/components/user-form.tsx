import { useCreateUser } from "@/app/hooks/use-create-user";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function UserForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const { createUser } = useCreateUser();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      clearInputs();

      await createUser({
        name,
        username,
        blocked: false
      });
    } catch {
      toast.error('Erro ao cadastrar o usuário!');
    }
  }

  async function clearInputs() {
    setName('');
    setUsername('');
  }

  return (
    <form onSubmit={handleSubmit} className="bg-muted/50 p-4 rounded-md">
      <div className="flex gap-3">
        <Input
          placeholder="Nome do usuário"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <Input
          placeholder="@ do GitHub"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </div>
      <Button className="mt-3 w-full">Cadastrar</Button>
    </form>
  );
}
