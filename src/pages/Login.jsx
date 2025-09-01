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
import { useTheme } from "@/components/theme-provider";
import logoBlack from "../assets/logo-black.png";
import logoWhite from "../assets/logo-white.png";
import { Separator } from "@radix-ui/react-separator";
import { SidebarSeparator } from "@/components/ui/sidebar";

export default function Login() {
  const navigate = useNavigate();
  const { theme, resolvedTheme } = useTheme();
  const isDark =
    theme === "dark" || (theme === "system" && resolvedTheme === "dark");

  const logoSrc = isDark ? logoWhite : logoBlack;
  return (
    <>
      <div className="flex w-auto h-dvh justify-center items-center">
        <div className="absolute top-0 right-0 m-4">
          <ModeToggle />
        </div>
        <Card className="w-full max-w-sm">
          <div className="flex items-center justify-center mx-auto pr-5">
            <div className="w-50">
              <img className="" src={logoSrc} alt="logo" />
            </div>
          </div>
          <CardHeader>
            <CardTitle>Login</CardTitle>
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
                  <Input id="password" type="password" required />
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
