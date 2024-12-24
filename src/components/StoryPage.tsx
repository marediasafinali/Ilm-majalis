'use client'

import { useState, useEffect } from 'react'

import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'

interface StoryPageProps {
  title: string;
  partTitle: string;
  storyTitle: string;
  breadcrumbItems: Array<{ label: string; href: string }>;
  content: React.ReactNode;
  nextStory?: { title: string; href: string } | null;
  previousStory?: { title: string; href: string } | null;
}

export function StoryPage({ 
  title, 
  partTitle, 
  storyTitle, 
  breadcrumbItems, 
  content, 
  nextStory,
  previousStory 
}: StoryPageProps) {
  const [showGoToTop, setShowGoToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-svh bg-background text-foreground">
      <main className="flex-1 container mx-auto py-8">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="mt-5 flex flex-col gap-10 p-3">
          <div>
            <h1 className="text-3xl font-bold">{title}, {partTitle}</h1>
            <h2 className="text-2xl font-semibold mt-2">{storyTitle}</h2>
          </div>
          <div className="flex flex-col gap-4">
            <audio controls className="w-full md:w-1/2">
              <source src="https://d581av8ppdtpz.cloudfront.net/gujarati/rumi/mathnawi/part1/story_11.m4a" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <div className="prose max-w-none">
              {content}
            </div>
          </div>
          <div className="flex justify-between mt-8">
            {previousStory && (
              <Button
                variant="outline"
                className="bg-black text-white text-lg hover:bg-gray-800 hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-black transition-colors"
                asChild
              >
                <Link href={previousStory.href} className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  {previousStory.title}
                </Link>
              </Button>
            )}
            {nextStory && (
              <Button
                variant="outline"
                className="ml-auto bg-black text-white text-lg hover:bg-gray-800 hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-black transition-colors"
                asChild
              >
                <Link href={nextStory.href} className="flex items-center">
                  {nextStory.title}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </main>
      {showGoToTop && (
        <Button
          style={{ bottom: '6.5rem', right: '1.5rem' }}
          variant="outline"
          className="fixed bg-black text-white hover:bg-gray-800 hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-black transition-colors rounded-full p-4"
          onClick={scrollToTop}
          aria-label="Go to top"
        >
          <ChevronUp className="h-6 w-6" />
          Back to Top
        </Button>
      )}
    </div>
  )
}

