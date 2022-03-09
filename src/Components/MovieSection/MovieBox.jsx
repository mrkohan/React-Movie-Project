import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MovieBox extends Component {
  render() {
    return (
    
<div className="movie_card md:w-full xl:w-1/3 sm:w-full lg:w-1/3 mb-4" >
<Link to={`/movie/${this.props.movie.id}/${this.props.movie.slug}`}>
  <div className="info_section">
    <div className="movie_header">
      { <img className="locandina" src={this.props.movie.featured_media_medium}/> }
      <h1>{this.props.movie.title.rendered}</h1>
      <h4>Director : {this.props.movie.acf.director}</h4>
      <span className="minutes">{this.props.movie.acf.length}</span>
      { <p className="type">{this.props.movie.x_categories}</p> }
    </div>
    <div className="movie_desc">
      <p className="text" dangerouslySetInnerHTML={{ __html: this.props.movie.content.rendered }}></p>
    </div>
  </div>
  <div className="blur_back" style={{backgroundImage: `url(${this.props.movie.featured_media_original})`}}></div>
  </Link>
</div>

    );
  }
}
