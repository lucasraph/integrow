import { Separator } from "@/components/ui/separator"

export function Footer() {
  const links = [
    { title: "Manifesto Integrow", href: "#manifesto" },
    { title: "Governança e Ética", href: "#governanca" },
    { title: "Como funciona o Compass", href: "#compass" },
    { title: "Termos e Privacidade", href: "#termos" },
    { title: "Sustentabilidade e Impacto", href: "#sustentabilidade" },
    { title: "Clube Ecoanima", href: "#ecoanima" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Logo e descrição */}
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold">Integrow</h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Hub de relacionamento e negócios que conecta pessoas, empresas e oportunidades de forma estratégica e
              sustentável.
            </p>
          </div>

          <Separator className="bg-primary-foreground/20" />

          {/* Links */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center sm:text-left">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          <Separator className="bg-primary-foreground/20" />

          {/* Copyright */}
          <div className="text-center text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Integrow. Todos os direitos reservados.</p>
            <p className="mt-2">Um benefício do Clube Ecoanima</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
