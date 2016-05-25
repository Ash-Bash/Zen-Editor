import React from 'react';
import ReactDom from 'react-dom';

import Layout from './components/Layout.js';

const app = document.getElementById('app');
ReactDom.render(<Layout className="LayoutComponent"/>, app);
