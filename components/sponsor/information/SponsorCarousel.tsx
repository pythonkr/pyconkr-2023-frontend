import { LegacyRef } from 'react';
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking-inline.css';
import '@egjs/react-flicking/dist/flicking.css';

type SponsorCarouselProps = {
  ref?: LegacyRef<Flicking>;
};

const SponsorCarousel = ({
  ref,
  children,
}: React.PropsWithChildren<SponsorCarouselProps>) => {
  return (
    <Flicking
      ref={ref}
      viewportTag="div"
      align="prev"
      horizontal
      circular
      useFindDOMNode
    >
      {children}
    </Flicking>
  );
};

export default SponsorCarousel;
