import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveArticle, unsaveArticle, clearSavedArticles } from '../redux/actions/actions'; // Menambahkan pengimporan aksi yang diperlukan
import { SavedItem } from './SavedItem';

const Saved = () => {
  const dispatch = useDispatch();
  const savedArticles = useSelector((state) => state.saved.savedArticles);

  useEffect(() => {
    // Ambil data dari localStorage saat komponen dimuat pertama kali
    const savedArticlesFromStorage = JSON.parse(localStorage.getItem('savedArticles'));
    if (savedArticlesFromStorage) {
      dispatch(clearSavedArticles());
      savedArticlesFromStorage.forEach((article) => dispatch(saveArticle(article))); // Hapus tanda kurung kurawal yang tidak perlu di sini
    }
  }, [dispatch]);

  const handleUnsave = (article) => {
    dispatch(unsaveArticle(article));
  };

  return (
    <div>
      <h1 className="text-center">Saved News</h1>
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
