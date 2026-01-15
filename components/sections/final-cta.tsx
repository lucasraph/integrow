import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance leading-tight">
            Se você acredita que negócios podem ser éticos, humanos e transformadores
          </h2>

          <p className="text-2xl font-medium">Esse é o seu lugar.</p>

          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-xl px-10 py-7 rounded-full group mt-8"
            asChild
          >
            <a href="#formulario">
              Quero entrar no Integrow
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
