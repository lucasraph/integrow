import { Card } from "@/components/ui/card"
import { Compass, CheckCircle2 } from "lucide-react"

export function WhatIs() {
  const features = ["Qualificada", "Rastreada", "Conduzida com critério e responsabilidade"]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Título */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">O que é o Integrow?</h2>
          </div>

          {/* Descrição Principal */}
          <Card className="p-8 lg:p-12 bg-card">
            <div className="space-y-8">
              <p className="text-xl leading-relaxed text-card-foreground">
                O Integrow é um <strong>hub de netweaving estratégico</strong> que conecta especialistas, empresas e
                oportunidades de negócio de forma estruturada e transparente.
              </p>

              <div>
                <p className="text-lg font-semibold mb-4 text-card-foreground">Cada conexão é:</p>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                      <span className="text-lg text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Compass className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">Integrow Compass</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A curadoria acontece por meio do <strong>Integrow Compass</strong>, metodologia exclusiva que
                      avalia alinhamento ético, profissionalismo e capacidade de entrega — garantindo que as conexões
                      gerem valor real.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                O Integrow é um <strong>benefício exclusivo do Clube Ecoanima</strong>, criado para membros que desejam
                crescer juntos, com governança e propósito.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
