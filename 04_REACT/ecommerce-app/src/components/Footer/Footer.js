import React from 'react';

import FooterTop from './FooterTop';
import FooterMiddle from './FooterMiddle';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <React.Fragment className="font-titleFont">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </React.Fragment>
  );
};

export default Footer;
