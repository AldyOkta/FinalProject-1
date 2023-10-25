import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unsaveArticle, clearSavedArticles } from '../redux/actions/actions';
import { SavedItem } from './SavedItem';

const Saved = () => {
  const savedArticles = useSelector((state) => state.saved.savedArticles);
  const dispatch = useDispatch();

  const handleUnsave = (article) => {
    dispatch(unsaveArticle(article));
  };

  const handleClearSavedArticles = () => {
    dispatch(clearSavedArticles());
  };

  return (
    <div>
      <h1 className="text-center">Berita yang Disimpan</h1>
      <button onClick={handleClearSavedArticles}>Hapus Semua Berita yang Disimpan</button>
      <div className="row">
        {savedArticles.map((article, index) => (
          <SavedItem
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            onUnsave={() => handleUnsave(article)}
          />
        ))}
      </div>
    </div>
  );
};

export default Saved;
