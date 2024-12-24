import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

interface LiteratureDataItem {
  slug: string;
  title: string;
}

interface LiteratureListProps {
  titleLabel: string;
  language: string;
  literatureData: LiteratureDataItem[];
}

export function LiteratureList({ titleLabel, language, literatureData }: LiteratureListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">{titleLabel}</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal list-inside space-y-2">
          {literatureData.map((item) => (
            <li key={item.slug}>
              <Link href={`/${language}/${item.slug}`} className="hover:underline font-medium">
                {item.title}
              </Link>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}

