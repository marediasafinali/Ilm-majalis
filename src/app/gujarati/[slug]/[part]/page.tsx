import { LiteraturePage } from '@/components/LiteraturePage'
import { gujaratiLiterature } from '@/data/gujarati-content'

export default function GujaratiLiteraturePartPage({ params }: { params: { slug: string, part: string } }) {
  const literature = gujaratiLiterature.find(lit => lit.slug === params.slug)
  if (!literature) return <div>Literature not found</div>

  const part = literature.parts.find(p => p.slug === params.part)
  if (!part) return <div>Part not found</div>

  const breadcrumbItems = [
    { label: 'હોમ પેજ', href: '/' },
    { label: literature.title, href: `/gujarati/${literature.slug}` },
    { label: part.title, href: `/gujarati/${literature.slug}/${part.slug}` },
  ]

  return (
    <LiteraturePage
      title={`${literature.title} - ${part.title}`}
      breadcrumbItems={breadcrumbItems}
      items={part.stories.map(story => ({
        title: story.title,
        slug: story.slug,
        description: story.description
      }))}
      basePath={`/gujarati/${literature.slug}/${part.slug}`}
      fontFamily="var(--font-gujarati)"
    />
  )
}

