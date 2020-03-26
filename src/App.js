import React from 'react';
import Header from './Header';

// https://telegra.ph/One-Piece-942-05-17
const link =
  'https://gist.githubusercontent.com/bickyeric/9aef86159b825c42cf06195e6f9d64e9/raw/218a8176a80e6828eb8064b32d06538920e5f546/gistfile1.txt';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.handleGetImage();
  }

  handleGetImage() {
    fetch(link)
      .then((res) => res.json())
      .then((res) => this.setState({ images: res }));
  }

  parseLink() {
    return window.location.pathname.substring(1).split('%7C');
  }

  render() {
    const { images } = this.state;
    return (
      <div className="tl_page_wrap">
        <div className="tl_page">
          <main className="tl_article tl_article_editable">
            <Header />
            <article
              id="_tl_editor"
              className="tl_article_content ql-container ql-disabled"
            >
              <div className="ql-editor" dir="auto">
                <h1 data-placeholder="Title" data-label="Title">
                  One Piece 942
                </h1>
                <address data-placeholder="Your name" data-label="Author">
                  MANGACANBLOG
                </address>
                {images.map((image, index) => (
                  <figure key={`f-${index * 1}`}>
                    <div className="figure_wrapper">
                      <img src={image} alt="fuck" />
                    </div>
                    <span className="cursor_wrapper" />
                    <figcaption
                      className="editable_text"
                      data-placeholder="Caption (optional)"
                    />
                  </figure>
                ))}
                <p>
                  <br />
                </p>
              </div>
              <div className="ql-clipboard" tabIndex="-1" />
              <div id="_tl_link_tooltip" className="tl_link_tooltip" />
              <div id="_tl_tooltip" className="tl_tooltip">
                <div className="buttons">
                  <span className="button_hover" />
                  <span className="button_group">
                    <button type="button" id="_bold_button" />
                    <button type="button" id="_italic_button" />
                    <button type="button" id="_link_button" />
                  </span>
                  <span className="button_group">
                    <button type="button" id="_header_button" />
                    <button type="button" id="_subheader_button" />
                    <button type="button" id="_quote_button" />
                  </span>
                </div>
                <div className="prompt">
                  <span className="close" />
                  <div className="prompt_input_wrap">
                    <input type="url" className="prompt_input" />
                  </div>
                </div>
              </div>
              <div id="_tl_blocks" className="tl_blocks">
                <div className="buttons">
                  <button type="button" id="_image_button" />
                  <button type="button" id="_embed_button" />
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
