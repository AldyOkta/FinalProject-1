import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveArticle, unsaveArticle } from '../redux/actions/actions';

export const NewsItem = ({ title, description, url, urlToImage }) => {
  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch();
  const savedArticles = useSelector((state) => state.saved.savedArticles);

  useEffect(() => {
    const isArticleSaved = savedArticles.some((article) => article.url === url);
    setIsSaved(isArticleSaved);
  }, [savedArticles, url]);

  const handleSave = () => {
    if (!isSaved) {
      dispatch(saveArticle({ title, description, url, urlToImage }));
    } else {
      dispatch(unsaveArticle({ title, description, url, urlToImage }));
    }
    setIsSaved(!isSaved);
  };

  const openNewsPageInNewTab = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="col-3">
      <div className="m-2 card" style={{ width: '18rem' }}>
        <img src={urlToImage} alt={urlToImage} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="container">
            <a href={url} className="btn btn-warning" onClick={openNewsPageInNewTab}>
              News Page
            </a>
            <button
              className={isSaved ? 'btn btn-secondary' : 'btn btn-primary'}
              onClick={handleSave}
            >
              {isSaved ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
