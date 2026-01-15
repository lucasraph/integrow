import { CheckCircle2 } from "lucide-react"

export function ForWho() {
  const targetAudience = [
    "Profissionais que desejam gerar oportunidades sem dedicação exclusiva",
    "Especialistas que buscam leads qualificados e alinhados",
    "Empresas que precisam de parceiros confiáveis",
    "Pessoas com alta capacidade de conexão (nexialistas)",
    "Quem quer complementar renda com indicações justas",
    "Quem acredita em colaboração, ética e impacto positivo",
  ]

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">Para quem é o Integrow?</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
