import Flicking, { MoveEvent, WillChangeEvent } from '@egjs/react-flicking';

const SponsorCarousel = ({ children }: React.PropsWithChildren) => {
  return (
    <Flicking
      viewportTag="div"
      cameraTag="div"
      cameraClass=""
      renderOnSameKey={false}
      align="center"
      onMove={(e: MoveEvent) => {}}
      onWillChange={(e: WillChangeEvent) => {}}
      horizontal={true}
      circular={true}
    >
      {children}
    </Flicking>
  );
};

export default SponsorCarousel;
