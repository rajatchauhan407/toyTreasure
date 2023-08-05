import React from 'react';
import GeneralModalWrapper from '../../general-modal-wrapper';
// import {ReactComponent as LoaderSVG} from './block-loop.svg';
const LoaderBox = () => {
    return (
      <GeneralModalWrapper>
        <img src={require('./block-loop-ps.gif')} alt="Loading...." />
      </GeneralModalWrapper>
    );
  };
  export default LoaderBox;