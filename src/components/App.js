import { SearchBar } from './Searchbar/Searchbar';
import { LoadMoreBtn } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { PER_PAGE, fetchImages } from './API';
import { Loader } from './Loader/Loader';
import { ModalElement } from './Modal/Modal';
import { useEffect, useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const openModal = ({ srcDataModal, altDataModal }) => {
    setIsModalOpen(true);
    setModalSrc(srcDataModal);
    setModalAlt(altDataModal);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalSrc('');
    setModalAlt('');
  };

  const changeQuery = newQuery => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setTotal(0);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const fetchImagesEffect = async () => {
      if (query !== '' && page !== 0) {
        setLoading(true);
        const { hits = [], totalHits = 0 } = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...hits]);
        setTotal(totalHits);
        setLoading(false);
      }
    };

    fetchImagesEffect();
  }, [query, page]);

  // useEffect(() => {
  //   if (query !== '' && page !== 0) {
  //     setLoading(true);
  //     fetchImages(query, page)
  //       .then(({ hits = [], totalHits = 0 }) => {
  //         setImages(prevImages => [...prevImages, ...hits]);
  //         setTotal(totalHits);
  //       })
  //       .finally(() => setLoading(false));
  //   }
  // }, [query, page]);

  return (
    <>
      <SearchBar changeQuery={changeQuery} />
      <ImageGallery images={images} openModal={openModal} />
      {loading && <Loader />}
      {PER_PAGE * page < total && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      <ModalElement
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        srcDataModal={modalSrc}
        altDataModal={modalAlt}
      />
    </>
  );
};
