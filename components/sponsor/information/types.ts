export interface CardProps {
  title: string;
  description: string;
}

export interface SimpleCardProps extends CardProps {
  id: number;
}

export interface ImageCardProps extends CardProps {
  id?: number;
  imgUrl: string;
  alt: string;
}
