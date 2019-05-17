import React from 'react';
import Header from './Header';

// https://telegra.ph/One-Piece-942-05-17
const link = "https://gist.githubusercontent.com/bickyeric/9aef86159b825c42cf06195e6f9d64e9/raw/218a8176a80e6828eb8064b32d06538920e5f546/gistfile1.txt";

class App extends React.Component{

  constructor(){
    super()

    var param = this.parseLink()

    this.state = {
      images:[],
      sourceId:param[0],
      episodeId:param[1],
    }
  }

  componentDidMount(){
    this.handleGetImage()
  }

  handleGetImage = () => {
    fetch(link)
    .then(res => res.json())
    .then(res => this.setState({images:res}))
  }

  parseLink = () => {
    return window.location.pathname.substring(1).split("%7C")
  }

  render(){
    return (
      <div className="tl_page_wrap">
        <div className="tl_page">
          <main className="tl_article tl_article_editable">
            <Header></Header>
            <article id="_tl_editor" className="tl_article_content ql-container ql-disabled">
              <div className="ql-editor" dir="auto">
                <h1 data-placeholder="Title" data-label="Title">One Piece 942</h1>
                <address data-placeholder="Your name" data-label="Author">MANGACANBLOG</address>
                {this.state.images.map((image, index) => (
                  <figure key={index}>
                    <div className="figure_wrapper">
                      <img src={image} alt="fuck"></img>
                    </div>
                    <span className="cursor_wrapper" ></span>
                    <figcaption className="editable_text" data-placeholder="Caption (optional)"></figcaption>
                  </figure>
                ))}
                <p><br></br></p>
              </div>
              <div className="ql-clipboard" tabIndex="-1"></div>
              <div id="_tl_link_tooltip" className="tl_link_tooltip"></div>
              <div id="_tl_tooltip" className="tl_tooltip">
                <div className="buttons">
                  <span className="button_hover"></span>
                  <span className="button_group">
                    <button id="_bold_button"></button>
                    <button id="_italic_button"></button>
                    <button id="_link_button"></button>
                  </span>
                  <span className="button_group">
                    <button id="_header_button"></button>
                    <button id="_subheader_button"></button>
                    <button id="_quote_button"></button>
                  </span>
                </div>
                <div className="prompt">
                  <span className="close"></span>
                  <div className="prompt_input_wrap"><input type="url" className="prompt_input"></input></div>
                </div>
              </div>
              <div id="_tl_blocks" className="tl_blocks">
                <div className="buttons">
                  <button id="_image_button"></button>
                  <button id="_embed_button"></button>
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