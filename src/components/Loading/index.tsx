/* eslint-disable consistent-return */
// Global Imports 💬
import React from 'react';
import PropTypes from 'prop-types';

// Local Imports 💬
import { Container } from './styled';

interface Props {
  isLoading: boolean;
}

export default function Loading(props: Props) {
  if (!props.isLoading) return null;

  return (
    <Container>
      <div />
      <span>Loading</span>
    </Container>
  );
}

// PropTypes config 💬
Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
