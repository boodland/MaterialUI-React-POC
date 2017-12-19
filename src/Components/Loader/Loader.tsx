import * as React from 'react';

import { LinearProgress } from '../../AppMaterialUI';

import './Loader.css';

const Loader = () => (
  <LinearProgress className="loader-overlay" />
);

export default Loader;
