"use client"
import { Slider } from "@/components/ui/slider"
import { useEffect, useRef } from "react"
import { FrameContent } from "./FrameContent"

interface FrameComponentProps {
  video: string
  width: number | string
  height: number | string
  className?: string
  mediaSize: number
  onMediaSizeChange: (value: number) => void
  showControls: boolean
  label: string
  autoplayMode: "all" | "hover"
  isHovered: boolean
  title: string
  content: string
  photo?: string
}

export function FrameComponent({
  video,
  width,
  height,
  className = "",
  mediaSize,
  onMediaSizeChange,
  showControls,
  label,
  autoplayMode,
  isHovered,
  title,
  content,
  photo,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (autoplayMode === "all") {
      videoRef.current?.play()
    } else if (autoplayMode === "hover") {
      if (isHovered) {
        videoRef.current?.play()
      } else {
        videoRef.current?.pause()
      }
    }
  }, [isHovered, autoplayMode])

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
        {/* Video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-full h-full overflow-hidden"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <video
              className="w-full h-full object-cover"
              src={video}
              loop
              muted
              playsInline
              autoPlay={autoplayMode === "all" || (autoplayMode === "hover" && isHovered)}
              ref={videoRef}
              onMouseEnter={(e) => {
                if (autoplayMode === "hover") {
                  e.currentTarget.play()
                }
              }}
              onMouseLeave={(e) => {
                if (autoplayMode === "hover") {
                  e.currentTarget.pause()
                }
              }}
            />
          </div>
        </div>

        {/* Content Overlay */}
        <FrameContent title={title} content={content} photo={photo} />
      </div>

      {/* Controls */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 z-10">
          <div className="space-y-2">
            <div>
              <label htmlFor={`media-size-${label}`} className="block text-sm font-medium text-white">
                Media Size: {mediaSize.toFixed(2)}
              </label>
              <Slider
                id={`media-size-${label}`}
                min={0.5}
                max={3}
                step={0.01}
                value={[mediaSize]}
                onValueChange={(value) => onMediaSizeChange(value[0])}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

