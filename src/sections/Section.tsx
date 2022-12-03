import { SectionProps } from '../types/Section';

const Section = ({
  color = 'bg-color--primary',
  textColor = 'text-color--primary',
  isFillViewport = false,
  isVerticallyCentered = false,
  children,
}: SectionProps) => {
  return (
    <div className={`section ${isFillViewport ? 'h-screen min-h-[448px]' : ''} ${color} ${textColor} flex`}>
      <div className={`mx-auto ${isVerticallyCentered ? 'my-auto' : ''} w-full max-w-6xl px-6`}>{children}</div>
    </div>
  );
};

export default Section;
