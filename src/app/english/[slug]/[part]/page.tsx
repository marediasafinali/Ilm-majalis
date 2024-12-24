import { LiteraturePage } from '@/components/LiteraturePage'
import { englishLiterature } from '@/data/english-content'

export default function EnglishLiteraturePartPage({ params }: { params: { slug: string, part: string } }) {
  const literature = englishLiterature.find(lit => lit.slug === params.slug)
  if (!literature) return <div>Literature not found</div>

  const part = literature.parts.find(p => p.slug === params.part)
  if (!part) return <div>Part not found</div>

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: literature.title, href: `/english/${literature.slug}` },
    { label: part.title, href: `/english/${literature.slug}/${part.slug}` },
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
      basePath={`/english/${literature.slug}/${part.slug}`}
    />
  )
}

