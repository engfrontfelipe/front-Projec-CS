
import { LoginForm } from "@/components/login-form"
import { Cpu } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 overflow-hidden">
      {/* Imagem de fundo com blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg')",
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-1 self-center font-medium text-white text-2xl">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Cpu size={20} />
          </div>
          Grove Tech
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
