import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { Breadcrumbs } from '@/components/Breadcrumbs'

interface LiteratureItem {
  title: string;
  slug: string;
  description: string;
}

interface LiteraturePageProps {
  title: string;
  breadcrumbItems: Array<{ label: string; href: string }>;
  items: LiteratureItem[];
  basePath: string;
}

export function LiteraturePage({ title, breadcrumbItems, items, basePath }: LiteraturePageProps) {
  return (
    <div className="flex flex-col min-h-svh bg-background text-foreground">
      <main className="flex-1 container mx-auto py-8">
        <Breadcrumbs items={breadcrumbItems} />
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="text-2xl">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-8 list-disc list-inside space-y-2">
              {items.map((item, index) => (
                <li key={index}>
                  <Link href={`${basePath}/${item.slug}`} className="hover:underline text-xl font-semibold">
                    {item.title}
                  </Link>
                  {
                    item.description && 
                    <div className="ml-10 mt-2" dangerouslySetInnerHTML={{ __html: item.description }} />
                  }
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

