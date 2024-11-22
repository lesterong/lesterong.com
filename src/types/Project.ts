export type ProjectProps = {
  title: string;
  position: string;
  description: string;
  isFeatured?: boolean;
  imageSource: string;
  links: Record<string, string>;
  date: string;
  note?: string;
};
