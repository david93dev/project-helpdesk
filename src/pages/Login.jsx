import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";


export default function Login() {
  const navigate = useNavigate();
 
  return (
    <>
      <div className="flex w-auto h-dvh justify-center items-center">
        <div className="absolute top-0 right-0 m-4">
          <ModeToggle />
        </div>
        <Card className="w-full max-w-sm">
          <div className="flex items-center justify-center mx-auto">
            <div >
              <span className="scroll-m-20 text-[var(--color-primary)] uppercase text-center text-4xl font-extrabold tracking-tight text-balance">HELPDESK</span>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Digite seu e-mail abaixo para acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Esqueceu a senha?
                    </a>
                  </div>
                  <Input id="password" type="password" placeholder="Digite sua senha " required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button
              onClick={() => navigate("/app")}
              type="submit"
              className="w-full"
            >
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
