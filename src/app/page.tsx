import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import CoursesSection from '@/components/CoursesSection'
import StatsSection from '@/components/StatsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ChallengeSection from '@/components/ChallengeSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <StatsSection />
      <ChallengeSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}