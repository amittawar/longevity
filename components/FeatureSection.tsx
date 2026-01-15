import React from 'react';


interface FeatureSectionProps {
  id?: string;
  tag: string;
  title: string;
  description: string;
  type?: 'workout-list' | 'timer-screen' | 'steps-tracking' | 'nutrition-log';
  imageSrc: string;
  reversed?: boolean;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  tag,
  title,
  description,
  type,
  imageSrc,
  reversed
}) => {
  return (
    <section id={id} className="md:py-10 py-6 px-6 relative overflow-hidden">
      <div className={`max-w-7xl mx-auto flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-32`}>

        <div className="flex-1 w-full lg:max-w-lg">
          <div className="flex flex-col mb-8 items-start">
            <div className="inline-flex items-center px-6 py-2.5 border border-yellow-400/40 rounded-full bg-yellow-400/5 backdrop-blur-md">
              <span className="text-yellow-400 text-[10px] font-bold tracking-[0.3em] uppercase">
                {tag}
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading leading-[1.1] mb-8">
            {title.split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {['STRENGTH.', 'ROUTINE.', 'COUNTS.', 'CHOICES.'].includes(word) ? (
                  <span className="text-yellow-400">{word} </span>
                ) : (
                  word + ' '
                )}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-gray-400 md:text-lg leading-relaxed font-medium">
            {description}
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center relative">
          {/* Subtle light effect behind mockup */}
          <div className="absolute inset-0 bg-yellow-500/5 blur-3xl rounded-full"></div>
          <div className="relative z-10 scale-90 md:scale-100">
            {/* <PhoneMockup screen={type} /> */}
            <img src={imageSrc} alt={`${title} Screen`} className="w-full max-w-[300px] mx-auto drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};