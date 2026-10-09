import slugifyLib from 'slugify';

export const createSlug = (text) => {
  if (!text) return '';
  return slugifyLib(text, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  });
};
