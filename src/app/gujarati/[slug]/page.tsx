import { LiteraturePage } from '@/components/LiteraturePage'
import { gujaratiLiterature } from '@/data/gujarati-content'

export default function GujaratiLiteraturePage({ params }: { params: { slug: string } }) {
  const literature = gujaratiLiterature.find(lit => lit.slug === params.slug)
  if (!literature) return <div>Literature not found</div>

  const breadcrumbItems = [
    { label: 'હોમ પેજ', href: '/' },
    { label: literature.title, href: `/gujarati/${literature.slug}` },
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
      basePath={`/gujarati/${literature.slug}`}
      fontFamily="var(--font-gujarati)"
    />
  )
}

