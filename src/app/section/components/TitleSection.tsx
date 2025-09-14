import TextType from '@/components/TextType'
import React from 'react'

type TitleProps = {
  topSubTitle: string;
  textSubType?: string[];
  children?: React.ReactNode
}

export const TitleSection = ({ topSubTitle, textSubType, children }: TitleProps) => {
  return (
    <>
      <div className="text-2xl mb-6">
        <p className='inline'>
          <span className="inline-block w-5 h-5 bg-amber-500 mr-3 rounded-full"></span>
          {topSubTitle}
        </p>
        {textSubType && (<TextType
          text={textSubType}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="inline-block ml-2 cursor-target"
        />)}

      </div>
      <h3 className="text-7xl font-semibold leading-tight">
        {children}
      </h3>
    </>
  )
}
