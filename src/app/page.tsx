import { englishLiterature } from '@/data/english-content'
import { gujaratiLiterature } from '@/data/gujarati-content'
import { LiteratureList } from "@/components/LiteratureList"

export default function Page() {
  return (
    <div className="flex flex-col min-h-svh bg-background text-foreground">
      <main className="flex-1 container mx-auto py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <LiteratureList language="gujarati" titleLabel="ગુજરાતી" literatureData={gujaratiLiterature} />
          <LiteratureList language="english" titleLabel="English" literatureData={englishLiterature} />
        </div>
      </main>
    </div>
  )
}

