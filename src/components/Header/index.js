import React, { Component } from 'react';

import './styles.css';

class Header extends Component {

  render() {
    return (
      <header>
        <nav>
          <img src="https://i.imgur.com/KDIDiSE.png" />
          <div >
            <spam>Meu perfil</spam>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;