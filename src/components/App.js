import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <Button variant="primary">Primary</Button> <Button variant="secondary">Secondary</Button> <Button variant="success">Success</Button> <Button variant="warning">Warning</Button> <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button> <Button variant="light">Light</Button> <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      </>
    );
  }
}

export default App;
