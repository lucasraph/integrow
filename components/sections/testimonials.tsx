import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      text: "Aqui a indicação é respeitada de verdade.",
      author: "Membro Integrow",
    },
    {
      text: "A curadoria muda completamente o nível das conexões.",
      author: "Especialista",
    },
    {
      text: "Comecei indicando. Hoje recebo negócios prontos.",
      author: "Nexialista",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">O que dizem nossos membros</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <Quote className="h-10 w-10 text-primary/20" />
                  <p className="text-lg text-card-foreground italic leading-relaxed">"{testimonial.text}"</p>
                  <p className="text-sm font-medium text-muted-foreground">— {testimonial.author}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
