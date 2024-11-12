import {getImageType} from '@utils/';

describe('getImageType', () => {
  it('return "placeimg" for a URL that contains "placeimg.com"', () => {
    const url = 'https://placeimg.com/640/480/any';
    const result = getImageType(url);
    expect(result).toBe('placeimg');
  });

  it('return "imgur" for a URL that contains "imgur.com"', () => {
    const url = 'https://i.imgur.com/9DqEOV5.jpeg';
    const result = getImageType(url);
    expect(result).toBe('imgur');
  });

  it('return "unknown" for a URL that does not match "placeimg.com" or "imgur.com"', () => {
    const url = 'https://example.com/image.jpg';
    const result = getImageType(url);
    expect(result).toBe('unknown');
  });
});
