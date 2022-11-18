import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import NavbarElement from './components/NavbarElement';
import CategoriesElement from './components/CategoriesElement';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss';
import HomePage from './pages/Home'

ReactDom.render(<NavbarElement />, document.getElementById('nav'));
ReactDom.render(<HomePage />, document.getElementById('main'));
