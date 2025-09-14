import React from 'react'
import { TitleSection } from './components/TitleSection'
import { BoxText } from './components/BoxText';

const Service = () => {
  return (
    <div className="section-about mt-14">
      <TitleSection
        topSubTitle="My Services"
      >
        <span className="block">Crafting Interfaces</span>
        <div className="block pl-[60px]">
          Powering{" "}
          <span className="text-[#FFAE00] underline font-playfair italic cursor-target">Backends</span>
        </div>
      </TitleSection>

      <div className="flex flex-col gap-y-8 mt-16">
        <BoxText>
          <h5 className='text-[32px] leading-tight mb-5 font-semibold'>Stunning Interfaces</h5>
          <p>I craft clean, responsive, and modern UIs with React.js, Next.js, and Tailwind CSS, ensuring every design feels smooth and engaging.</p>
        </BoxText>
        <BoxText>
          <h5 className='text-[32px] leading-tight mb-5 font-semibold'>Powerful Back-End</h5>
          <p>From custom APIs to secure database management with Prisma or Laravel, I build robust systems that keep applications running flawlessly.</p>
        </BoxText>
        <BoxText>
          <h5 className='text-[32px] leading-tight mb-5 font-semibold'>End-to-End Solutions</h5>
          <p>I deliver complete web applications from architecture to deployment, bringing ideas to life with seamless front-end and back-end integration.</p>
        </BoxText>
        <BoxText>
          <h5 className='text-[32px] leading-tight mb-5 font-semibold'>Smart Integrations</h5>
          <p>I connect apps with APIs and third-party services to ensure data flows smoothly, securely, and efficiently across platforms.</p>
        </BoxText>
        <BoxText>
          <h5 className='text-[32px] leading-tight mb-5 font-semibold'>Modern Workflow</h5>
          <p>Using Git, GitHub, CI/CD, and Agile collaboration, I streamline development and deliver projects faster with reliable results.</p>
        </BoxText>
        
      </div>
    </div>
  )
}

export default Service;

