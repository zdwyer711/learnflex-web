import React from 'react';
import PropTypes from 'prop-types';
import { DefaultButtonWrapper } from './DefaultButton.styled';

const DefaultButton = (props) => (
   // Somehow need to allow the text valuet to be a parameter
   <DefaultButtonWrapper>{props.text}</DefaultButtonWrapper>
);

DefaultButton.propTypes = {};

DefaultButton.defaultProps = {};

export default DefaultButton;
