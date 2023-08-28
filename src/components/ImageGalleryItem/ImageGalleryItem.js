import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  tags,
  openModal,
}) => {
  return (
    <GalleryItem>
      <a
        href={largeImageURL}
        onClick={e => {
          e.preventDefault();
          openModal({ srcDataModal: largeImageURL, altDataModal: tags });
        }}
      >
        <GalleryImg src={webformatURL} alt={tags} loading="lazy" />
      </a>
    </GalleryItem>
  );
};
