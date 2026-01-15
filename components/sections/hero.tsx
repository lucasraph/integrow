import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground overflow-hidden pt-20">
      {/* Padrão de fundo sutil */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Brand */}
          <div className="inline-block mb-6">
            <Image
              src="/images/logo-integrow.png"
              alt="Integrow"
              width={280}
              height={80}
              className="h-16 w-auto mx-auto filter brightness-0 invert"
              priority
            />
            <div className="h-1 w-24 bg-accent mx-auto rounded-full mt-4"></div>
          </div>

          {/* Título Principal */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Conexões inteligentes que viram negócios reais.
          </h2>

          {/* Subtítulo */}
          <div className="space-y-4 text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            <p className="text-pretty leading-relaxed">
              O Integrow é um hub de relacionamento e negócios que conecta pessoas, empresas e oportunidades de forma
              estratégica e sustentável — guiado pela metodologia exclusiva <strong>Integrow Compass</strong>.
            </p>
            <p className="text-base sm:text-lg">
              Um benefício do <strong>Clube Ecoanima</strong>, criado para quem acredita em valor, ética e impacto real.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full group"
              asChild
            >
              <a href="#formulario">
                Quero fazer parte
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 rounded-full"
              asChild
            >
              <a href="#manifesto">
                <Download className="mr-2 h-5 w-5" />
                Baixar o manifesto
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
