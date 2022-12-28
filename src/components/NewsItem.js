import React from 'react'

export default function NewsItem(props) {
    let {title, description, imglink, artcllink, author, time, source} = props;
    return (
      <div className="card mx-4">
          <img className="card-img-top" src={imglink} alt="FastNews"/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-white bg-success">
              {source}
            </span>
          <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">by {author?author:"Unknown"} on {new Date(time).toUTCString()}</small></p>
              <a target="_blank" rel="noreferrer" href={artcllink} className="btn btn-primary">Read More</a>
          </div>
      </div>
    )
}

