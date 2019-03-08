import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

import StarRating from './StarRating';

const ReviewsWrapper = styled.div`
`;

const ReviewsContainer = styled.div`
  background: #f7f7f7;
  border-radius: 2px;
  padding: 10px;
  width: 440px;
  display: flex;
`;

const Header = styled.p`
  font-weight: 300;
  font-size: 0.9rem;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 0.7rem;
  line-height: 17px;
`;

const DescriptionTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
`;

const Label = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  margin-left: 5px;
`;

const Section = styled.div`
  width: 50%
  padding: 10px;
`;

const OverallRatingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 440px;
`;

const OverallRating = styled.div`
  display: flex
`;


export default () => {
  return (
    <ReviewsWrapper>
      <OverallRatingHeader>
        <OverallRating>
          <StarRating rating={5}/>
          <Label>overall</Label>
        </OverallRating>
        <Label>view all 14 reviews</Label>
      </OverallRatingHeader>
      <ReviewsContainer>
        <Section>
          <Header>PRO</Header>
          <Description>most helpful 4-5 star review</Description>
          <StarRating rating={5}/>
          <DescriptionTitle>Fantastic Blender</DescriptionTitle>
          <Description>This blender works amazingly, and blends within seconds. The single serve cups also work really well for smoothies or protein shakes!</Description>
        </Section>
        <Section>
          <Header>CON</Header>
          <Description>most helpful 1-2 star review</Description>
          <StarRating rating={1} />
          <DescriptionTitle>Very Unhappy</DescriptionTitle>
          <Description>Less than 2 months ago after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup.</Description>
        </Section>
      </ReviewsContainer>
    </ReviewsWrapper>
  );
}
