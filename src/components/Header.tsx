import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="w-full border-b flex justify-center py-6">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo1.jpg"
            alt="Ilm Majalis Logo"
            width={80}
            height={80}
            priority
          />
        </Link>
          <h1 className="text-3xl font-bold">ILM MAJALIS</h1>
        <ThemeToggle />
      </div>
    </header>
  )
}

