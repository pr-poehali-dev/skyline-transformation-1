import { Hero3DWebGL as Hero3D } from "@/components/hero-webgl"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  SlideContents,
  SlideIntroduction,
  SlideRelevance,
  SlideGoals,
  SlideMain,
  SlideMethods,
  SlideConclusion,
  SlideFinal,
} from "@/components/presentation-slides"

export default function Index() {
  return (
    <div className="dark">
      <Navbar />
      <main>
        <Hero3D />
        <SlideContents />
        <SlideIntroduction />
        <SlideRelevance />
        <SlideGoals />
        <SlideMain />
        <SlideMethods />
        <SlideConclusion />
        <SlideFinal />
      </main>
      <Footer />
    </div>
  )
}