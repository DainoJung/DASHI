import Link from 'next/link'
import { cva } from 'class-variance-authority'

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const navLinkStyles = cva(
  "text-dark hover:text-primary transition-colors",
  {
    variants: {
      isActive: {
        true: "text-primary font-medium",
        false: "text-dark"
      }
    },
    defaultVariants: {
      isActive: false
    }
  }
)

export default function Header() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl">DASHI</Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className={navLinkStyles()}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          프로젝트 문의하기
        </button>
      </div>
    </header>
  )
} 