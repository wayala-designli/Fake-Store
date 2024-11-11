type ImageType = 'placeimg' | 'imgur' | 'unknown';

export const getImageType = (url: string): ImageType => {
  if (url.includes('placeimg.com')) return 'placeimg';
  if (url.includes('imgur.com')) return 'imgur';
  return 'unknown';
};
