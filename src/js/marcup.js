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
        <b>Likes: ${likes}</b>
      </p>
      <p class="info-item">
        <b>Views: ${views}</b>
      </p>
      <p class="info-item">
        <b>Coments: ${comments}</b>
      </p>
      <p class="info-item">
        <b>Downloads: ${downloads}</b>
      </p>
    </div>
  </div>`;
};
