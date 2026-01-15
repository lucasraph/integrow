import { Card } from "@/components/ui/card"
import {
  DollarSign,
  Link2,
  Shield,
  UsersIcon,
  Target,
  BarChart3,
  Compass,
  TrendingUp,
  Puzzle,
  Leaf,
  MessageCircle,
  Scale,
  Lightbulb,
  Eye,
} from "lucide-react"

export function Benefits() {
  const benefitsForIndicators = [
    { icon: DollarSign, title: "Renda recorrente", description: "Ganhe de forma contínua com suas indicações" },
    { icon: Link2, title: "Conexões protegidas", description: "Suas indicações são registradas e protegidas" },
    { icon: Shield, title: "Rastreabilidade total", description: "Acompanhe todo o processo de forma transparente" },
    { icon: UsersIcon, title: "Flexibilidade real", description: "Trabalhe no seu ritmo, sem dedicação exclusiva" },
  ]

  const benefitsForSpecialists = [
    { icon: Target, title: "Leads qualificados", description: "Receba oportunidades já validadas e alinhadas" },
    { icon: BarChart3, title: "Score visível", description: "Demonstre sua credibilidade com o Score Integrow" },
    { icon: Compass, title: "Match inteligente", description: "Conecte-se com quem realmente precisa de você" },
    { icon: TrendingUp, title: "Crescimento previsível", description: "Planeje seu negócio com pipeline constante" },
    { icon: Puzzle, title: "Parcerias seguras", description: "Trabalhe com profissionais validados" },
  ]

  const benefitsForEcosystem = [
    { icon: Leaf, title: "Sustentabilidade", description: "Modelo de negócio que cresce de forma saudável" },
    { icon: MessageCircle, title: "Comunicação consciente", description: "Diálogos verdadeiros e transparentes" },
    { icon: Eye, title: "Governança clara", description: "Regras definidas e respeitadas por todos" },
    { icon: Scale, title: "Distribuição justa de valor", description: "Cada um recebe pelo que contribui" },
    { icon: Lightbulb, title: "Inovação contínua", description: "Sempre evoluindo para servir melhor" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Benefícios para quem participa</h2>
          </div>

          {/* Para quem indica */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-2">Para quem indica</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefitsForIndicators.map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card text-center">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <benefit.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-card-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Para especialistas e empresas */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-accent mb-2">Para especialistas e empresas</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitsForSpecialists.map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card text-center">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                      <benefit.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-card-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Para o ecossistema */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-foreground mb-2">Para o ecossistema</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitsForEcosystem.map((benefit, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card text-center">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto">
                      <benefit.icon className="h-7 w-7 text-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-card-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
