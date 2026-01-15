import { Card } from "@/components/ui/card"
import { AlertCircle, Shield, TrendingUp, Users, Heart } from "lucide-react"

export function WhyIntegrow() {
  const problems = [
    "Conexões superficiais, sem continuidade ou responsabilidade",
    "Indicações sem rastreabilidade, proteção ou reconhecimento",
    "Acordos paralelos que fragilizam relações e reputações",
    "Falta de validação técnica e ética entre profissionais",
    "Ausência de governança, clareza e compromisso real",
  ]

  const purposes = [
    {
      icon: Heart,
      title: "Construir prosperidade ética",
      description: "Criar relações baseadas em confiança, critérios claros e profissionais validados.",
    },
    {
      icon: TrendingUp,
      title: "Gerar impacto por meio do capitalismo humano",
      description: "Riqueza como meio de transformação social, ambiental e econômica.",
    },
    {
      icon: Shield,
      title: "Proteger pessoas e oportunidades",
      description: "Indicações têm valor e devem ser respeitadas, registradas e remuneradas.",
    },
    {
      icon: Users,
      title: "Valorizar talentos por meio de conexões úteis",
      description: "Boas relações constroem carreiras, negócios e futuros.",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Título da Seção */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">Por que o Integrow existe</h2>
          </div>

          {/* Problemas */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              O Integrow nasce para resolver falhas estruturais de um mercado marcado por desorganização, informalidade
              e ausência de critérios claros. Observamos, de forma recorrente:
            </p>

            <Card className="p-8 bg-card border-destructive/20">
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <p className="text-card-foreground">{problem}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Solução */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Acreditamos em um modelo diferente de fazer negócios
              </h3>
              <p className="text-lg text-muted-foreground">
                Um modelo mais humano, organizado e justo. Nosso propósito é claro:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {purposes.map((purpose, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <purpose.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-card-foreground">{purpose.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{purpose.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Conclusão */}
          <div className="text-center">
            <p className="text-xl font-medium text-foreground max-w-3xl mx-auto text-balance">
              O Integrow existe para elevar o padrão do mercado — substituindo ruído por clareza e improviso por valor
              real.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
