import React from 'react';
import Header from '../component/Header'
import Tag from './Tag'
import LeftShare from './LeftShare'

const link = "https://gist.githubusercontent.com/bickyeric/9aef86159b825c42cf06195e6f9d64e9/raw/218a8176a80e6828eb8064b32d06538920e5f546/gistfile1.txt";

class Index extends React.Component{

  constructor(){
    super()

    this.state = {
      images:[]
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

  render(){
    return (
      <div>
        <Header></Header>

        <div className="container">
          <div className="row">
            <LeftShare></LeftShare>

            <div className="col-md-8 col-md-offset-2 col-xs-12">
              <div className="mainheading">
                <div className="row post-top-meta">
                  <div className="col-md-2">
                    <a href="author.html">
                      <img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"></img>
                    </a>
                  </div>
                  <div className="col-md-10">
                    <a className="link-dark" href="author.html">One Piece</a><a href="#" className="btn follow">Follow</a>
                    <span className="author-description">Founder of WowThemes.net and creator of <b>"Mediumish"</b> theme that you're currently previewing. Developing professional premium themes, templates, plugins, scripts since 2012.</span>
                    <span className="post-date">22 July 2017</span>
                  </div>
                </div>
                <h1 className="posttitle">One Piece 942 | Daimyo Hakumai, Shimotsuki Yasuie</h1>
              </div>

              {this.state.images.map((link, index) => (
                <img key={index} className="featured-image img-fluid" src={link}></img>
              ))}

              <Tag></Tag>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
