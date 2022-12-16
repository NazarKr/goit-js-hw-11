export const getGalleryTemplate = ({
  largeImageURL,
  webformatURL,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `
      <div class="photo-card">
    <a class="gallery-link" href="${largeImageURL}">
      <img src="${webformatURL}" alt="" loading="lazy" />
    </a>
    <div class="info">
      <p class="info-item">
        <b>${likes}</b>
      </p>
      <p class="info-item">
        <b>${views}</b>
      </p>
      <p class="info-item">
        <b>${comments}</b>
      </p>
      <p class="info-item">
        <b>${downloads}</b>
      </p>
    </div>
  </div>;`;
};