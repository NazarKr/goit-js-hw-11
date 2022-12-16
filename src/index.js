import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './js/refs';
import { fetchSearch } from './js/fetchSearch';
import { renderMurcup } from './js/renderMarcup';
import { smoothScroll } from './js/smoothScroll';

let query = '';
let page = 1;
let per_page = 40;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoomFactor: 0.05,
  enableKeyboard: true,
  disableScroll: true,
  fadeSpeed: 250,
});

refs.form.addEventListener('submit', handleSubmit);

const options = {
  rootMargin: '150px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(onEntry, options);

//

async function handleSubmit(e) {
  e.preventDefault();
  observer.observe(refs.sentinel);
  const form = e.currentTarget;
  const searchQuery = form.elements.searchQuery.value.trim();
  if (searchQuery === '') return;
  if (searchQuery !== query) {
    refs.gallery.innerHTML = '';
    query = searchQuery;
    page = 1;
  }

  await fetchSearch(query, page, per_page)
    .then(data => {
      if (data.hits.length === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        Notify.success(`Hooray! We found ${data.totalHits} images.`);
        renderMurcup(data.hits);
        smoothScroll();
        observer.observe(refs.sentinel);
      }
      return data;
    })
    .catch(error => error.message)
    .finally();
  
    await lightbox.refresh();
    await lightbox.on('shown.simplelightbox', function () {
      refs.body.classList.add('disable-scroll');
    });
    await lightbox.on('closed.simplelightbox', function () {
      refs.body.classList.remove('disable-scroll');
    });

}

function onEntry(entries) {
  entries.forEach(async entry => {
    if (entry.isIntersecting && query !== '') {
      page += 1;
      observer.observe(refs.sentinel);
      //
      await fetchSearch(query, page, per_page)
        .then(data => {
          renderMurcup(data.hits);
          smoothScroll();
          return data;
        })
        .then(data => {
          const totalPage = data.totalHits / per_page;
          if (page >= totalPage) {
            Notify.info(
              "We're sorry, but you've reached the end of search results."
            );
            observer.observe(refs.sentinel);
            return;
          }
        })
        .catch(error => error.message)
          .finally();
        
        await lightbox.refresh();
        await lightbox.on('shown.simplelightbox', () => {
          refs.body.classList.add('disable-scroll');
        });
        await lightbox.on('closed.simplelightbox', () => {
          refs.body.classList.remove('disable-scroll');
        });
    }
  });
}
