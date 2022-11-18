import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import NavbarElement from './components/NavbarElement';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss';

ReactDom.render(<NavbarElement />, document.getElementById('nav'));
