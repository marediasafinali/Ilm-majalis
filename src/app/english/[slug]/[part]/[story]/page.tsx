import { StoryPage } from '@/components/StoryPage'
import { englishLiterature } from '@/data/english-content'

export default function EnglishStoryPage({ params }: { params: { slug: string, part: string, story: string } }) {
  const literature = englishLiterature.find(lit => lit.slug === params.slug)
  if (!literature) return <div>Literature not found</div>

  const part = literature.parts.find(p => p.slug === params.part)
  if (!part) return <div>Part not found</div>

  const story = part.stories.find(s => s.slug === params.story)
  if (!story) return <div>Story not found</div>

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: literature.title, href: `/english/${literature.slug}` },
    { label: part.title, href: `/english/${literature.slug}/${part.slug}` },
    { label: story.title, href: `/english/${literature.slug}/${part.slug}/${story.slug}` },
  ]

  const nextStory = story.next ? part.stories.find(s => s.slug === story.next) : null
  const previousStory = story.previous ? part.stories.find(s => s.slug === story.previous) : null

  return (
    <StoryPage
      title={literature.title}
      partTitle={part.title}
      storyTitle={story.title}
      breadcrumbItems={breadcrumbItems}
      content={<div className="text-xl flex flex-col space-y-8 pt-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: story.content }} />}
      nextStory={nextStory ? {
        title: nextStory.title,
        href: `/english/${literature.slug}/${part.slug}/${nextStory.slug}`
      } : null}
      previousStory={previousStory ? {
        title: previousStory.title,
        href: `/english/${literature.slug}/${part.slug}/${previousStory.slug}`
      } : null}
    />
  )
}

