import React, { useState } from 'react';

export const NewsItem = ({ title, description, url, urlToImage }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
 
    setIsSaved(true);
  };

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
            {!isSaved ? (
              <button className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            ) : (
              <button className="btn btn-secondary" disabled>
                Saved
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
