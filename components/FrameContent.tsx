"use client"
import Image from "next/image"

interface FrameContentProps {
  title: string
  content: string
  photo?: string
}

export function FrameContent({ title, content, photo }: FrameContentProps) {
  return (
    <div className="absolute inset-0 z-10 p-6 overflow-y-auto bg-black bg-opacity-70 custom-scrollbar">
      <div className="flex items-start space-x-4">
        {photo && (
          <div className="flex-shrink-0">
            <Image src={photo || "/placeholder.svg"} alt={title} width={100} height={100} className="rounded-full" />
          </div>
        )}
        <div className="flex-grow">
          <h2 className="text-2xl font-pp-editorial text-white mb-4">{title}</h2>
          <div
            className="text-white/80 text-sm space-y-4 prose prose-invert prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  )
}

