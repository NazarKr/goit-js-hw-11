export const getGalleryTemplate = ({
  largeImageURL,
  webformatURL,
  likes,
  views,
  comments,
  downloads,
  tags,
}) => {
  return `
      <div class="photo-card">
    <a class="gallery-link" href="${largeImageURL}">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
      <p class="info-item">
        <b>Likes: <span class="info-text">${likes}</span></b>
      </p>
      <p class="info-item">
        <b>Views: <span class="info-text">${views}</span></b>
      </p>
      <p class="info-item">
        <b>Coments:<span class="info-text"> ${comments}</span></b>
      </p>
      <p class="info-item">
        <b>Downloads: <span class="info-text">${downloads}</span></b>
      </p>
    </div>
    </a>
  </div>`;
};
