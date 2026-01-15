import { Card } from "@/components/ui/card"
import { UserCheck, Target, Sprout, Handshake, Truck, DollarSign } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: UserCheck,
      title: "Entrada e Validação (Integrow Compass)",
      description:
        "Todo membro passa por uma avaliação que considera valores, atuação profissional e alinhamento com o ecossistema. O resultado é o Score Integrow, que orienta conexões e oportunidades.",
    },
    {
      number: "2",
      icon: Target,
      title: "Indicação de Oportunidades",
      description:
        "Indicações são registradas na plataforma, garantindo rastreabilidade e reconhecimento. Sem acordos paralelos, sem conflitos, sem perda de valor. As conexões certas passam a encontrar você.",
      highlights: ["Sem acordos paralelos", "Sem conflitos", "Sem perda de valor"],
    },
    {
      number: "3",
      icon: Sprout,
      title: "Nutrição (Relacionamento + Marketing)",
      description:
        "Uma equipe especializada qualifica cada lead com profundidade (BANT), preparando o terreno para decisões conscientes e alinhadas. Aqui, o foco é entender antes de vender.",
    },
    {
      number: "4",
      icon: Handshake,
      title: "Fechamento",
      description:
        "Profissionais treinados conduzem propostas e negociações com clareza e responsabilidade. O fechamento acontece naturalmente, sem pressão ou jogos — apenas alinhamento entre necessidade e solução.",
    },
    {
      number: "5",
      icon: Truck,
      title: "Entrega e Pós-Venda",
      description:
        "Acompanhamento transparente, reconhecimento de cada participação e abertura para novas oportunidades futuras.",
    },
    {
      number: "6",
      icon: DollarSign,
      title: "Comissionamento Transparente",
      description:
        "A remuneração é proporcional ao nível de envolvimento na jornada. Tudo registrado na plataforma, sem zonas cinzentas.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Como o Integrow funciona</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow bg-card relative overflow-hidden group"
              >
                {/* Número grande de fundo */}
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {step.number}
                </div>

                <div className="relative space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                      <h3 className="text-xl font-bold text-card-foreground">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed pl-[72px]">{step.description}</p>

                  {step.highlights && (
                    <div className="pl-[72px] space-y-2">
                      {step.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          <span className="text-sm font-medium text-accent">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
