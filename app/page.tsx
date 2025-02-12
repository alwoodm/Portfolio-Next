'use client'

import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { Suspense } from 'react'

// Static components can be imported normally
import HeroSection from './components/HeroSection'

// Dynamic imports for interactive components
const ProjectsSection = dynamic(() => import('./components/ProjectsSection'))
const AboutSection = dynamic(() => import('./components/AboutSection'))
const ContactSection = dynamic(() => import('./components/ContactSection'))
const SkillsSection = dynamic(() => import('./components/SkillsSection'))

export const metadata: Metadata = {
  title: 'alwood - Software Developer Portfolio',
  description: 'Portfolio programisty, prezentujące projekty i umiejętności w zakresie rozwoju oprogramowania, IT i elektroniki.',
  keywords: ['portfolio', 'software developer', 'web development', 'IT', 'elektronika', 'projekty'],
  openGraph: {
    title: 'alwood - Software Developer Portfolio',
    description: 'Portfolio programisty, prezentujące projekty i umiejętności w zakresie rozwoju oprogramowania, IT i elektroniki.',
    type: 'website',
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <HeroSection />
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Ładowanie projektów...</div>}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Ładowanie umiejętności...</div>}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Ładowanie...</div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Ładowanie formularza kontaktowego...</div>}>
        <ContactSection />
      </Suspense>
    </main>
  )
}