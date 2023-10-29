import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NewsItem } from './NewsItem';

export const News = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(
          search === ''
            ? 'https://newsapi.org/v2/top-headlines?country=id&apiKey=ceae45acc7c04620ad1a3589b1f6f383'
            : `https://newsapi.org/v2/top-headlines?${search}&country=id&apiKey=ceae45acc7c04620ad1a3589b1f6f383`
        );
        setArticles(response.data.articles);
        setError(null);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          setError('Batasan frekuensi permintaan tercapai. Silakan coba lagi nanti.');
        } else {
          setError('Terjadi kesalahan saat mengambil data: ' + error.message);
        }
      }
    };
    getArticles();
  }, [search]);

    const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?${search}&country=id&apiKey=ceae45acc7c04620ad1a3589b1f6f383`
        // Ganti 'YOUR_API_KEY' dengan kunci API Anda
      );
      setArticles(response.data.articles);
      setError(null);
    } catch (error) {
      setError('Terjadi kesalahan saat mencari berita: ' + error.message);
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="search-container">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search News Indonesia"
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
        <h1 className="text-center">News {search}</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="row">
          {articles.map((article, index) => (
            <NewsItem
              key={index}
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;