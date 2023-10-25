import React from 'react';

export const SavedItem = ({ title, description, url, urlToImage, onUnsave }) => {
  return (
    <div className="col-3">
      <div className="m-2 card" style={{ width: '18rem' }}>
        <img src={urlToImage} alt={urlToImage} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="container">
            <a href={url} className="btn btn-warning">
              News Page
            </a>
            <button className="btn btn-primary" onClick={onUnsave}>
              Unsave
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
