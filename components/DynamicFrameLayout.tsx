"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FrameComponent } from "./FrameComponent"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const GRID_SIZE = 9
const CELL_SIZE = 120

interface Frame {
  id: number
  video: string
  defaultPos: { x: number; y: number; w: number; h: number }
  mediaSize: number
  title: string
  content: string
  photo?: string
}

const initialFrames: Frame[] = [
  {
    id: 1,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    defaultPos: { x: 0, y: 0, w: 3, h: 3 },
    mediaSize: 1,
    title: "Work Experience",
    content: `
      <h3>Student Ambassador</h3>
      <p>WeHub</p>
      <p>January 2025 - Present</p>
      <ul>
        <li>Representing WeHub and promoting its initiatives among students and professionals.</li>
        <li>Facilitating networking opportunities and engaging with stakeholders to drive outreach efforts.</li>
        <li>Organizing events, workshops, and panel discussions to support entrepreneurship and innovation.</li>
        <li>Assisting in marketing and communications to enhance WeHub’s visibility.</li>
      </ul>

      <h3>Design Lead</h3>
      <p>MSS, MJCET</p>
      <p>January 2025 - Present </p>
      <ul>
        <li>Led the creative direction for branding, marketing, and promotional materials.</li>
        <li>Designed visual content, including posters, social media graphics, and event banners.</li>
        <li>Collaborated with teams to ensure cohesive and impactful visual communication.</li>
        <li>Managed design projects from concept to execution, maintaining brand consistency.</li>

      </ul>
      
      <h3>Junior Manager, Incoming Global Sector</h3>
      <p>AIESEC</p>
      <p>August 2022 - January 2023</p>
      <ul>
        <li>Managed international exchange programs, coordinating with global partners and local stakeholders.</li>
        <li>Facilitated onboarding and cultural adaptation for incoming participants.</li>
        <li>Assisted in business development and strategic planning to expand program reach.</li>
        <li>Conducted market research and outreach to potential corporate partners.</li>

      </ul>
    `,
    photo: "https://pin.it/3WbPYnaES",
  },
  {
    id: 2,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    defaultPos: { x: 3, y: 0, w: 3, h: 3 },
    mediaSize: 1,
    title: "Education",
    content: `
      <h3>Bachelor of Laws - LLB , Business Administration and Management </h3>
      <p>Sultan-Ul-Uloom College of Law</p>
      <p>Expected Graduation: Jun 2026</p>
      <p>Relevant Coursework: Corporate Law, Business Strategy, Negotiation, Intellectual Property</p>
    
    `,
    photo: "https://via.placeholder.com/100x100.png?text=Jane+Doe",
  },
  {
    id: 3,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    defaultPos: { x: 6, y: 0, w: 3, h: 3 },
    mediaSize: 1,
    title: "Volunteering",
    content: `
      <h3>Student Volunteer</h3>
      <p>Association for Protection of Civil Rights (APCR) – RIFA Expo</p>
      <p>November 2024 </p>
      <ul>
        <li>Assisted in organizing and managing the RIFA Expo, ensuring smooth event operations.</li>
        <li>Engaged with attendees, providing information about APCR’s initiatives.</li>
        <li>Supported logistics, coordination, and event execution.</li>
      </ul>
      
      <h3>Student Volunteer</h3>
      <p>Confederation of Women Entrepreneurs of India (COWE)</p>
      <p>February - March 2025 </p>
      <ul>
        <li>Contributed to the planning and execution of the summit, promoting women’s entrepreneurship.</li>
        <li>Assisted speakers, delegates, and participants, ensuring a seamless experience.</li>
        <li>Helped with event marketing, registration, and audience engagement.</li>
      </ul>
    `,
    photo: "https://via.placeholder.com/100x100.png?text=Jane+Doe",
  },
  {
    id: 4,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    defaultPos: { x: 0, y: 3, w: 3, h: 3 },
    mediaSize: 1,
    title: "Skills",
    content: `
      <h3>Legal Skills</h3>
      <ul>
        <li>Legal Research and Writing</li>
        <li>Contract Drafting and Review</li>
        <li>Case Analysis and Statutory Interpretation</li>
        <li>Corporate Law, Mergers & Acquisitions (M&A)</li>
        <li>Legal Memoranda and Compliance Reports</li>
      </ul>
      
      <h3>Business Skills</h3>
      <ul>
        <li>Financial Analysis</li>
        <li>Strategic Planning</li>
        <li>Market Research</li>
        <li>Business Development</li>
        <li>Project Management</li>
      </ul>

      <h3>Design & Technical Skills/h3>
      <ul>
        <li>Graphic Design ( Canva, Figma)</li>
        <li>Branding, Visual Identity & Presentation Design</li>
        <li>Digital Marketing and Social Media Strategy</li>
        <li>Content Creation, Copywriting & Storytelling</li>
      </ul>
    `,
    photo: "https://via.placeholder.com/100x100.png?text=Jane+Doe",
  },
  {
    id: 5,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    defaultPos: { x: 3, y: 3, w: 3, h: 3 },
    mediaSize: 1,
    title: "",
    content: ``
    ,
    photo:"public/shai.png",
  },
  {
    id: 6,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    defaultPos: { x: 6, y: 3, w: 3, h: 3 },
    mediaSize: 1,
    title: "",
    content: ``,
    photo: "https://via.placeholder.com/100x100.png?text=Jane+Doe",
  },
  {
    id: 7,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    defaultPos: { x: 0, y: 6, w: 3, h: 3 },
    mediaSize: 1,
    title: "Interests",
    content: `
      <h3>Things I Find Interesting</h3>
      <ul>
        <li>Legal Technology & Innovation</li>
        <li>Corporate Social Responsibility</li>
        <li>International Business Law</li>
        <li>Sustainable Business Practices</li>
        <li>Legal Philosophy & Ethics</li>
      </ul>
      
      <h3>Personal Interests</h3>
      <ul>
        <li>Sketching </li>
        <li>Designing </li>
        <li>Journaling </li>
        <li>Photography</li>
      </ul>
    `,
    photo: "https://via.placeholder.com/100x100.png?text=Jane+Doe",
  },
  {
    id: 8,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
    defaultPos: { x: 3, y: 6, w: 3, h: 3 },
    mediaSize: 1,
    title: "",
    content: ` `,
    photo: "https://via.placeholder.com/100x100.png?text=Jane+Doe",
  },
  {
    id: 9,
    // video: "",
    defaultPos: { x: 6, y: 6, w: 3, h: 3 },
    mediaSize: 1,
    title: "Contact Me",
    content: `
      <h3>Get In Touch</h3>
      <p>I'm always open to discussing new opportunities, projects, or just connecting with like-minded professionals.</p>
      <ul>
        <li>Email: shaiinads3@gmail.com</li>
        <li>Phone: (+91) 91773-36947</li>
        <li>LinkedIn: linkedin.com/in/shaima-nadeem-11317224a</li>
        <li>Twitter: @shaionic</li>
      </ul>
      <p>Based in Hyderabad, Telangana </p>
      <p>Available for in-person meetings in the NYC area and remote collaboration worldwide.</p>
    `,
    photo: "https://via.placeholder.com/100x100.png?text=Jane+Doe",
  },
]

export default function DynamicFrameLayout() {
  const [frames, setFrames] = useState<Frame[]>(initialFrames)
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null)
  const [hoverSize, setHoverSize] = useState(6)
  const [gapSize, setGapSize] = useState(16)
  const [showControls, setShowControls] = useState(false)
  const [cleanInterface, setCleanInterface] = useState(true)
  const [autoplayMode, setAutoplayMode] = useState<"all" | "hover">("all")

  const getRowSizes = () => {
    if (hovered === null) {
      return "1fr 1fr 1fr"
    }
    const { row } = hovered
    const nonHoveredSize = (9 - hoverSize) / 2
    return [0, 1, 2].map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getColSizes = () => {
    if (hovered === null) {
      return "1fr 1fr 1fr"
    }
    const { col } = hovered
    const nonHoveredSize = (9 - hoverSize) / 2
    return [0, 1, 2].map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`)).join(" ")
  }

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 3 ? "center" : "bottom"
    const horizontal = x === 0 ? "left" : x === 3 ? "center" : "right"
    return `${vertical} ${horizontal}`
  }

  const updateFrameProperty = (id: number, property: keyof Frame, value: number) => {
    setFrames(frames.map((frame) => (frame.id === id ? { ...frame, [property]: value } : frame)))
  }

  const toggleControls = () => {
    setShowControls(!showControls)
  }

  const toggleCleanInterface = () => {
    setCleanInterface(!cleanInterface)
    if (!cleanInterface) {
      setShowControls(false)
    }
  }

  const updateCodebase = () => {
    console.log("Updating codebase with current values:")
    console.log("Hover Size:", hoverSize)
    console.log("Gap Size:", gapSize)
    console.log("Frames:", frames)
  }

  return (
    <div className="space-y-4 w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="autoplay-toggle"
              checked={autoplayMode === "all"}
              onCheckedChange={(checked) => setAutoplayMode(checked ? "all" : "hover")}
            />
            <label htmlFor="autoplay-toggle" className="text-sm text-white/70">
              {autoplayMode === "all" ? "Autoplay All" : "Hover Autoplay"}
            </label>
          </div>
        </div>
      </div>
      {!cleanInterface && (
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">Dynamic Frame Layout</h2>
          <div className="space-x-2">
            <Button onClick={toggleControls}>{showControls ? "Hide Controls" : "Show Controls"}</Button>
            <Button onClick={updateCodebase}>Update Codebase</Button>
            <Button onClick={toggleCleanInterface}>{cleanInterface ? "Show UI" : "Hide UI"}</Button>
          </div>
        </div>
      )}
      {!cleanInterface && showControls && (
        <>
          <div className="space-y-2">
            <label htmlFor="hover-size" className="block text-sm font-medium text-gray-200">
              Hover Size: {hoverSize}
            </label>
            <Slider
              id="hover-size"
              min={4}
              max={8}
              step={0.1}
              value={[hoverSize]}
              onValueChange={(value) => setHoverSize(value[0])}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="gap-size" className="block text-sm font-medium text-gray-200">
              Gap Size: {gapSize}px
            </label>
            <Slider
              id="gap-size"
              min={0}
              max={20}
              step={1}
              value={[gapSize]}
              onValueChange={(value) => setGapSize(value[0])}
            />
          </div>
        </>
      )}
      <div
        className="relative w-full h-full"
        style={{
          display: "grid",
          gridTemplateRows: getRowSizes(),
          gridTemplateColumns: getColSizes(),
          gap: `${gapSize}px`,
          transition: "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
        }}
      >
        {frames.map((frame) => {
          const row = Math.floor(frame.defaultPos.y / 3)
          const col = Math.floor(frame.defaultPos.x / 3)
          const transformOrigin = getTransformOrigin(frame.defaultPos.x, frame.defaultPos.y)

          return (
            <motion.div
              key={frame.id}
              className="relative"
              style={{
                transformOrigin,
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={() => setHovered({ row, col })}
              onMouseLeave={() => setHovered(null)}
            >
              <FrameComponent
                video={frame.video}
                width="100%"
                height="100%"
                className="absolute inset-0"
                mediaSize={frame.mediaSize}
                onMediaSizeChange={(value) => updateFrameProperty(frame.id, "mediaSize", value)}
                showControls={showControls && !cleanInterface}
                label={frame.title}
                autoplayMode={autoplayMode}
                isHovered={
                  hovered?.row === Math.floor(frame.defaultPos.y / 3) &&
                  hovered?.col === Math.floor(frame.defaultPos.x / 3)
                }
                title={frame.title}
                content={frame.content}
                photo={frame.photo}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

