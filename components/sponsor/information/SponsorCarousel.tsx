import { RefObject } from 'react';
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking-inline.css';
import '@egjs/react-flicking/dist/flicking.css';

type SponsorCarouselProps = {
  flickingRef: RefObject<Flicking> | null;
};

const SponsorCarousel = ({
  flickingRef,
  children,
}: React.PropsWithChildren<SponsorCarouselProps>) => {
  return (
    <Flicking
      ref={flickingRef}
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
