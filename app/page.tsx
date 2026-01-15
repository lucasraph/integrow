import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { WhyIntegrow } from "@/components/sections/why-integrow"
import { NewWay } from "@/components/sections/new-way"
import { WhatIs } from "@/components/sections/what-is"
import { ForWho } from "@/components/sections/for-who"
import { HowItWorks } from "@/components/sections/how-it-works"
import { WhatMakesUnique } from "@/components/sections/what-makes-unique"
import { Benefits } from "@/components/sections/benefits"
import { Testimonials } from "@/components/sections/testimonials"
import { FinalCTA } from "@/components/sections/final-cta"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <WhyIntegrow />
        <NewWay />
        <WhatIs />
        <ForWho />
        <HowItWorks />
        <WhatMakesUnique />
        <Benefits />
        <Testimonials />
        <FinalCTA />
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}
