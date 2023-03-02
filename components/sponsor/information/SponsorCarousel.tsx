import Flickity from 'react-flickity-component';

const SponsorCarousel = ({ children }: React.PropsWithChildren) => {
  return (
    <Flickity
      className={'carousel'}
      elementType={'div'}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      {children}
    </Flickity>
  );
};

export default SponsorCarousel;
