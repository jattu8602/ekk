import { Search, ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Image from 'next/image'

const MainHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="hidden md:block font-bold text-lg text-foreground">
              Ekta Krishi Kendra
            </span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <Input
                placeholder="Search for seeds, pesticides, fertilizers..."
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* User Links */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              <User size={18} className="mr-1" />
              Login
            </Button>
            <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
              Register
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden lg:inline-flex"
            >
              Sell with us
            </Button>
            <Button variant="default" size="sm" className="relative">
              <ShoppingCart size={18} className="mr-1" />
              <span className="hidden md:inline">Cart</span>
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
