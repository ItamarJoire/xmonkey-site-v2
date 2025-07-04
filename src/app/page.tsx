'use client'

import { GridBackgroundDemo } from '@/components/aceternity/gridBackgroundDemo'
import { About } from '@/components/ui/about'
import { Assessments } from '@/components/ui/assessments'
import { Brands } from '@/components/ui/brands'
import { Differences } from '@/components/ui/differences'
import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'
import { Hero } from '@/components/ui/hero'
import { HowWeWork } from '@/components/ui/howWeWork'
import { Range } from '@/components/ui/range'
import { Services } from '@/components/ui/services'
import { Testimonials } from '@/components/ui/testimonials'
import { VideoPlay } from '@/components/ui/videoPlay'
import { WhyMarketing } from '@/components/ui/whyMarketing'

import { useAppContext } from '@/hooks/useVideo'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  const { isOpen } = useAppContext()

  return (
    <>
      <ToastContainer autoClose={3000} />

      <GridBackgroundDemo>
        <Hero />
      </GridBackgroundDemo>

      <WhyMarketing />
      <Brands />
      <Services />
      <HowWeWork />
      <Range />
      <Testimonials />

      <Assessments />
      <Differences />

      <About />
      <Footer />

      {isOpen && <VideoPlay />}
    </>
  )
}
