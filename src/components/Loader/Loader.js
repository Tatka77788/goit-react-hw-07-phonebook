import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Spiner() {
  return <Loader type="Puff" color="#c71585" height={30} width={30} />;
}
