import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-integrow.png"
              alt="Integrow"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#porque" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Por que existimos
            </Link>
            <Link
              href="#como-funciona"
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Como funciona
            </Link>
            <Link href="#para-quem" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Para quem é
            </Link>
            <Button asChild size="sm" className="rounded-full">
              <Link href="#formulario">Entrar na lista</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </header>
  )
}
