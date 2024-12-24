import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

const gujaratiLiterature = [
  { title: "મજલિસનો પરિચય", slug: "the-mathnawi-of-jalaluddin-rumi" }
]

export default function GujaratiLiteraturePage() {
  const breadcrumbItems = [
    { label: 'હોમ પેજ', href: '/' }
  ]

  return (
    <div style={{ fontFamily: 'var(--font-gujarati)' }} className="flex flex-col min-h-svh bg-background text-foreground">
      <main className="flex-1 container mx-auto py-8">
        <Breadcrumbs items={breadcrumbItems} />
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>ગુજરાતી સાહિત્ય</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {gujaratiLiterature.map((item) => (
                <li key={item.slug}>
                  <Link href={`/gujarati/${item.slug}`} className="hover:underline">
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

