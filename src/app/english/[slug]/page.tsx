import { LiteraturePage } from '@/components/LiteraturePage'
import { englishLiterature } from '@/data/english-content'

export default function EnglishLiteraturePage({ params }: { params: { slug: string } }) {
  const literature = englishLiterature.find(lit => lit.slug === params.slug)
  if (!literature) return <div>Literature not found</div>

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: literature.title, href: `/english/${literature.slug}` },
  ]

  return (
    <LiteraturePage
      title={literature.title}
      breadcrumbItems={breadcrumbItems}
      items={literature.parts.map(part => ({
        title: part.title,
        slug: part.slug,
        description: part.description
      }))}
      basePath={`/english/${literature.slug}`}
    />
  )
}

