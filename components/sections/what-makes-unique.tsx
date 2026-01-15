import { Heart, Leaf, Users, Eye, Network, Compass, Globe } from "lucide-react"

export function WhatMakesUnique() {
  const features = [
    { icon: Heart, text: "Pessoas no centro" },
    { icon: Leaf, text: "Sustentabilidade integral" },
    { icon: Users, text: "Colaboração acima da competição" },
    { icon: Eye, text: "Transparência como regra" },
    { icon: Network, text: "Netweaving estratégico" },
    { icon: Compass, text: "Curadoria estruturada" },
    { icon: Globe, text: "Impacto social real" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">O que torna o Integrow único?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <p className="text-lg font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
