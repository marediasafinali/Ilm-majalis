import { StoryPage } from '@/components/StoryPage'
import { gujaratiLiterature } from '@/data/gujarati-content'

export default function GujaratiStoryPage({ params }: { params: { slug: string, part: string, story: string } }) {
  const literature = gujaratiLiterature.find(lit => lit.slug === params.slug)
  if (!literature) return <div>Literature not found</div>

  const part = literature.parts.find(p => p.slug === params.part)
  if (!part) return <div>Part not found</div>

  const story = part.stories.find(s => s.slug === params.story)
  if (!story) return <div>Story not found</div>

  const breadcrumbItems = [
    { label: 'હોમ પેજ', href: '/' },
    { label: literature.title, href: `/gujarati/${literature.slug}` },
    { label: part.title, href: `/gujarati/${literature.slug}/${part.slug}` },
    { label: story.title, href: `/gujarati/${literature.slug}/${part.slug}/${story.slug}` },
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
        href: `/gujarati/${literature.slug}/${part.slug}/${nextStory.slug}`
      } : null}
      previousStory={previousStory ? {
        title: previousStory.title,
        href: `/gujarati/${literature.slug}/${part.slug}/${previousStory.slug}`
      } : null}
    />
  )
}

