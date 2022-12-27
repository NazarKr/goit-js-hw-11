import { refs } from './refs';
import { getGalleryTemplate } from './marcup';

export function renderMurcup(items) {
  const markup = items.map(getGalleryTemplate).join('');
  return refs.gallery.insertAdjacentHTML('beforeend', markup);
}