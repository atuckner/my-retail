import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import itemData from '../utils/itemData';
import ImageSlider from './ImageSlider';
import Quantity from './Quantity';
import Reviews from './Reviews';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: 100%
`;

const LargeButton = styled.button`
  display: inline-block;
  font-family: arial;
  border: none;
  padding: 0.3rem 1.7rem;
  margin: 0;
  margin-right: 8px;
  text-decoration: none;
  font-weight: 500;
  background: ${({ color }) => color ? color : '#cc0000'};
  color: white;
  font-family: sans-serif;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  text-transform: uppercase;
  -webkit-appearance: none;
  -moz-appearance: none;
`

const SmallButton = styled.button`
  display: inline-block;
  font-family: arial;
  border: none;
  padding: 0.3rem 1.2rem;
  margin: 0;
  margin-right: 5px;
  text-decoration: none;
  font-weight: 600;
  background: #f7f7f7;
  color: darkgray;
  font-family: sans-serif;
  font-size: 0.6rem;
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  text-transform: uppercase;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const FloatRight = styled.div`
  float: right;

  @media (max-width: 768px) {
    float: none;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 1.6rem;
`;

const PriceWrapper = styled.div`
  margin-top: 20px;
`;

const Price = styled.h2`
  display: inline-block;
`;

const PriceLabel = styled.p`
  margin-left: 5px;
  font-size: 0.8rem;
  display: inline-block;
`;

const PromotionWrapper = styled.div`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  width: 390px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const TagIcon = styled(FontAwesomeIcon)`
  color: #cc0000;
  margin-right: 10px;
`;

const PromotionText = styled.h2`
  color: #cc0000;
  font-size: 0.8rem;
  font-weight: 400;
`;

const Returns = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ReturnsLabel = styled.h3`
  font-size: 0.9rem;
  font-weight: 400;
`;

const ReturnsDividerDiv = styled.div`
  border-left: 1px solid gray;
  margin: 12px;
`;

const ReturnsText = styled.p`
  font-size: 0.2rem;
`;

const ProductHighlights = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
`;

const ProductHighlightsList = styled.ul`
  font-size: 0.8rem;
  font-weight: 200;
`;

const ProductHighlightsListItem = styled.li`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default class ResponsiveLayout extends PureComponent {
  render() {
    const {
      title,
      primaryImageSrc,
      price,
      purchasingChannelCode
    } = itemData;

    return (
      <Container>
        <Column>
          <FloatRight>
            <TitleWrapper>
              <Title>{title}</Title>
            </TitleWrapper>
            <ImageSlider images={[primaryImageSrc, primaryImageSrc, primaryImageSrc, primaryImageSrc, primaryImageSrc, primaryImageSrc, primaryImageSrc]}/>
            <Reviews></Reviews>
          </FloatRight>
        </Column>
        <Column>
          <PriceWrapper>
            <Price>{price}</Price>
            <PriceLabel>online price</PriceLabel>
          </PriceWrapper>
          <PromotionWrapper>
            <PromotionText>
              <TagIcon icon='tag' />
              spend $50, ship free
            </PromotionText>
            <PromotionText>
              <TagIcon icon='tag' />
              $25 gift card with purchase of a select Ninja Blender
            </PromotionText>
          </PromotionWrapper>
          <Quantity/>
          {
            (purchasingChannelCode === '0' || '2') && <LargeButton color='black'>Pick Up in Store</LargeButton>
          }
          {
            (purchasingChannelCode === '0' || '1') && <LargeButton>Add to Cart</LargeButton>
          }
          <Returns>
            <ReturnsLabel>returns</ReturnsLabel>
            <ReturnsDividerDiv/>
            <div>
              <ReturnsText>This item must be returned within 30 days of the ship date. See return policy for details.</ReturnsText>
              <ReturnsText>Prices, promotions, styles and availability may vary by store and online.</ReturnsText>
            </div>
          </Returns>
          <SmallButton>Add to Registry</SmallButton>
          <SmallButton>Add to List</SmallButton>
          <SmallButton>Share</SmallButton>
          <ProductHighlights>product highlights</ProductHighlights>
          <ProductHighlightsList>
            <ProductHighlightsListItem>Wattage Output: 1100 Watts</ProductHighlightsListItem>
            <ProductHighlightsListItem>Number of Speeds: 3</ProductHighlightsListItem>
            <ProductHighlightsListItem>Capacity (volume): 72.0 Oz</ProductHighlightsListItem>
            <ProductHighlightsListItem>Appliance Capabilities: Blends</ProductHighlightsListItem>
            <ProductHighlightsListItem>Includes: Travel Lid</ProductHighlightsListItem>
            <ProductHighlightsListItem>Material: Plastic</ProductHighlightsListItem>
            <ProductHighlightsListItem>Finish: Painted</ProductHighlightsListItem>
            <ProductHighlightsListItem>Metal Finish: Chrome</ProductHighlightsListItem>
            <ProductHighlightsListItem>Safety and Security Feature: Non-Slip Base</ProductHighlightsListItem>
            <ProductHighlightsListItem>Care and Cleaning: Easy-To-Clean, Dishwasher Safe Parts</ProductHighlightsListItem>
          </ProductHighlightsList>
        </Column>
      </Container>
    );
  }
}
