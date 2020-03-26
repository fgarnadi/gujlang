import React from 'react';

class Header extends React.PureComponent {
  render() {
    return (
      <header className="tl_article_header">
        <h1 dir="auto">One Piece 942</h1>
        <address dir="auto">
          <a href="/" rel="author">
            MANGACANBLOG
          </a>
          <time dateTime="2019-05-17T16:13:15+0000">May 17, 2019</time>
        </address>
      </header>
    );
  }
}

export default Header;
