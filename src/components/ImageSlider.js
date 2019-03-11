import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const MainImage = styled.img`
  margin-bottom: 40px;
  height: 20rem;
`;

const SmallImage = styled.img`
  height: 4rem;
  border: ${props => props.border ? '1px solid gray' : 'none'};
  border-radius: 3px;
  padding: 5px;
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  margin-top: 29px;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 1.7rem;
  cursor: pointer;
`;

const SliderContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 225px;
`;

export default class ImageSlider extends Component {
  state = {
    currentIndex: 0,
    lastDisplayedIndex: 2
  }

  previous = () => {
    if (this.state.currentIndex === 0) return;

    if (this.state.currentIndex === this.state.lastDisplayedIndex - 2) {
      return this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        lastDisplayedIndex: prevState.currentIndex - 1
      }));
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }

  next = () => {
    if (this.state.currentIndex === this.props.images.length - 1) {
      return this.setState({ currentIndex: 0, lastDisplayedIndex: 2 });
    }

    if (this.state.currentIndex === this.state.lastDisplayedIndex) {
      return this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        lastDisplayedIndex: prevState.currentIndex + 3
      }));
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  render() {
    const { images } = this.props;
    const { currentIndex, lastDisplayedIndex } = this.state;
    const indexedImages = images.map((imageSrc, i) => {
      return [i, imageSrc]
    })
    const displayImages = indexedImages.slice(lastDisplayedIndex - 2, lastDisplayedIndex + 1)

    return (
      <Container>
        <MainImage src={images[currentIndex]} alt='Product'/>
        <SliderContainer>
            <div onClick={() => { this.previous() }}>
              <ArrowIcon icon='angle-left'></ArrowIcon>
            </div>
            <ImageContainer>
              { displayImages.map((image) =>
                <SmallImage src={image[1]} key={`${image[1]}_${image[0]}`} alt='Product' border={image[0] === currentIndex} />) }
            </ImageContainer>
            <div onClick={() => { this.next() }}>
              <ArrowIcon icon='angle-right'></ArrowIcon>
            </div>
        </SliderContainer>
      </Container>
    )
  }
}
