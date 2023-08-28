import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { LoadMoreBtn } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { PER_PAGE, fetchImages } from './API';
import { Loader } from './Loader/Loader';
import { ModalElement } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    total: 0,
    isModalOpen: false,
  };

  openModal = ({ srcDataModal, altDataModal }) =>
    this.setState({ isModalOpen: true, srcDataModal, altDataModal });

  closeModal = () => this.setState({ isModalOpen: false });

  changeQuery = newQuery => {
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
      total: 0,
      loading: true,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const { hits = [], totalHits = 0 } = await fetchImages(
        this.state.query,
        this.state.page
      );
      this.setState({
        images: [...this.state.images, ...hits],
        total: totalHits,
        loading: false,
      });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
    }));
  };

  render() {
    console.log('State', this.state.images?.length);
    return (
      <>
        <SearchBar changeQuery={this.changeQuery} />
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {this.state.loading && <Loader />}
        {PER_PAGE * this.state.page < this.state.total && (
          <LoadMoreBtn handleLoadMore={this.handleLoadMore} />
        )}
        <ModalElement
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          srcDataModal={this.state.srcDataModal}
          altDataModal={this.state.altDataModal}
        />
      </>
    );
  }
}
