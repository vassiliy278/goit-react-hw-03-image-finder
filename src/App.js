import React, { PureComponent, Component } from 'react';
import imagesApi from './Services/imagesApi'
import Loader from './Components/Spinner/Spinner'
import Searchbar from './Components/Searchbar/Searchbar'
import ImageGallery from './Components/ImageGallery/ImageGallery'
import Button from './Components/Button/Button'

export default class App extends Component {
  state = {
    images: null,
    searchString: '',
    page: 1,
    loading: false
  }
  componentDidUpdate(pProps, pState) {
    const {searchString, page, images} = this.state;
    if(pState.searchString !== searchString) {
      this.setState({
        loading: true,
      })
    imagesApi.fetchImgsWithQuery(searchString, page)
      .then(result => this.setState((prevS)=>({
        images: result
      })))
      .catch(e=>console.log(e))
      .finally(() => {
        this.setState({
          loading: false
        })
      })
    }
    if(pState.page !== page) {
      this.setState({
        loading: true,
      })
      imagesApi.fetchImgsWithQuery(searchString, page)
        .then(res => this.setState((prevS)=>({
          images: [...prevS.images, ...res]
        })))
        .catch(e=>console.log(e))
        .finally(() => {
          this.setState({
            loading: false
          })
        })
      }
  }
  handleSubmit = (value) => {
    this.setState({
      searchString: value
    })
  }
  pageChange = () => {
    setTimeout(()=>{
      window.scroll({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
    })
    }, 700);
    this.setState((prevState) => {return {
      page: prevState.page + 1,
    }})
  }
  render() {
    const {images, loading, pig} = this.state
    return (
      <>
      <Searchbar onSubmit={this.handleSubmit}/>
      {images && loading && <Loader/>}
      <ImageGallery images={this.state.images}/>
      {loading ? <Loader/> : images && <Button byClick={this.pageChange}/>}
      </>
    )
  }
}