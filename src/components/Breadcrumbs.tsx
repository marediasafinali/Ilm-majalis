import Link from 'next/link'
import { ChevronRight, House } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label='Breadcrumb'>
      <ol className='flex flex-wrap gap-1 items-center space-x-1 md:space-x-2 rtl:space-x-reverse'>
        {
          items.map((item, index) => (
            <li key={item.href} className='inline-flex items-center gap-1'>
              {index > 0 && <ChevronRight size={28} color='gray' />}
              <Link 
                href={item.href}
                className={`text-xl pt-1 font-medium text-primary`}
              >
                {index === 0 ? <House size={20} /> : item.label}
              </Link>
            </li>
          ))
        }
      </ol>
    </nav>
  )
}

