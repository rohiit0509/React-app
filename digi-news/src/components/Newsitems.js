import React from 'react'

function Newsitems(props) {
  let { title, description, imgUrl, newsUrl, author, date, } = props;
  return (
    <div className='row my-4 mx-2'>
      <div className="card">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className='cart-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Newsitems