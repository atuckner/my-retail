import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

const QuantityContainer = styled.div`
  height: 15px;
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 5px;
  width: 158px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 15px;
`;

const QuantityText = styled.span`
  font-size: 12px;
  margin-right: 7px;
  margin-left: 7px;
`;

const QuantityLabel = styled.span`
  font-size: 11px;
  margin-right: 7px;
  margin-left: 3px;
`;

const circleButtonStyles = css`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  background: #aaaaaa4f;
  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const CounterWrapper = styled.div`
  margin-right: 5px;
  margin-top: -3px; 
`;

const Plus = styled.div`
  ${circleButtonStyles}
  ::before,
  ::after {
    background: white;
    box-shadow: 1px 1px 1px #ffffff9e;
  }
  ::before {
    width: 2px;
    margin: 4px auto;
  }
  ::after {
    margin: auto 3px;
    height: 2px;
    box-shadow: none;
  }
`;

const Minus = styled.div`
  ${circleButtonStyles}
  ::before {
    background: white;
    margin: auto 3px;
    height: 2px;
    box-shadow: 0px 1px 1px #ffffff9e;
  }
`;

export default class Quantity extends PureComponent {
  state = {
    quantity: 1
  }

  incrementQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }))
  }

  decrementQuantity = () => {
    if (this.state.quantity === 1) return;

    this.setState(prevState => ({
      quantity: prevState.quantity - 1
    }))
  }

  render() {
    const { quantity } = this.state;

    return (
      <QuantityContainer>
        <QuantityLabel>quantity:</QuantityLabel>
        <CounterWrapper>
          <Minus onClick={() => { this.decrementQuantity() }}></Minus>
          <QuantityText>
            {quantity}
          </QuantityText>
          <Plus onClick={() => { this.incrementQuantity() }}></Plus>
        </CounterWrapper>
      </QuantityContainer>
    );
  }
}
