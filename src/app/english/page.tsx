import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const englishLiterature = [
  { title: "The Mathnawi of Jalaluddin Rumi", slug: "the-mathnawi-of-jalaluddin-rumi" }
]

export default function EnglishLiteraturePage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' }
  ]

  return (
    <div className="flex flex-col min-h-svh bg-background text-foreground">
      <main className="flex-1 container mx-auto py-8">
        <Breadcrumbs items={breadcrumbItems} />
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>English Literature</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {englishLiterature.map((item) => (
                <li key={item.slug}>
                  <Link href={`/english/${item.slug}`} className="hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

