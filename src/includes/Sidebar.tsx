"use client";


import ProfileCard from '@/components/ProfileCard';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="hide md:flex justify-center w-full">
        <div className="sticky top-0">
          <div className="relative">
          <ProfileCard
            name="Faiz Muazzam"
            title="Web Developer"
            handle="faizmuazzam"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/assets/img/me_transparent.png"
            grainUrl="/assets/img/grain.webp"
            iconUrl="/assets/img/iconpattern.png"
            behindGradient={`radial-gradient(
              farthest-side circle at var(--pointer-x) var(--pointer-y),
              hsla(30, 100%, 80%, var(--card-opacity)) 4%,
              hsla(30, 80%, 70%, calc(var(--card-opacity)*0.75)) 10%,
              hsla(30, 60%, 60%, calc(var(--card-opacity)*0.5)) 50%,
              hsla(30, 0%, 50%, 0) 100%
            ),
            radial-gradient(35% 52% at 55% 20%, #ffb347c4 0%, #ff7e0050 100%),
            radial-gradient(100% 100% at 50% 50%, #ff9f00ff 1%, #ff7e0050 76%),
            conic-gradient(
              from 124deg at 50% 50%,
              #ff6a00ff 0%,
              #ffc200ff 40%,
              #ffc200ff 60%,
              #ff6a00ff 100%
            )`}
            innerGradient={`linear-gradient(145deg, #ff9f008c 0%, #ffd58044 100%)`}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
