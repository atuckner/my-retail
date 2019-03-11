import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

import Colors from '../constants/Colors';

const Star = styled(FontAwesomeIcon)`
  color: ${Colors.red};
`;

const EmptyStar = styled(FontAwesomeIcon)`
  color: ${Colors.gray};
`;

const StarContainer = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default ({ rating }) => {
  const totalStars = 5

  const renderStars = (rating) => {
    let stars = [];

    for (let i = 1; i <= totalStars; i++) {
      const star = (
        i < rating + 1 ?
          <Star key={i} icon={faStar}></Star> :
          <EmptyStar key={i} icon={faStar}></EmptyStar>
      );

      stars.push(star);
    }
    return stars;
  }

  return (
    <StarContainer>
      {renderStars(rating)}
    </StarContainer>
  );
}
