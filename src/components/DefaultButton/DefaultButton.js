import React from 'react';
import { DefaultButtonWrapper } from './DefaultButton.styled';

const DefaultButton = (props) => (
   // Somehow need to allow the text valuet to be a parameter
   <DefaultButtonWrapper>{props.text}</DefaultButtonWrapper>
);

export default DefaultButton;
