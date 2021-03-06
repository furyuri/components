import React from 'react';
import {shape} from 'prop-types';
import LogoSvg from './dsmJS.svg';

export default function Logo({styleOverrides}) {
  return <LogoSvg css={styleOverrides} />;
}

Logo.propTypes = {styleOverrides: shape()};
Logo.defaultProps = {styleOverrides: {}};
