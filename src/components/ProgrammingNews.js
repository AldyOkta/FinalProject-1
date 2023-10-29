import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NewsItem } from './NewsItem';

const ProgrammingNews = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=programming&pageSize=20&apiKey=f9d9904b2d4a48649d37cb884e56a65f`
        );
        setArticles(response.data.articles);
        setError(null);
      } catch (error) {
        setError('Terjadi kesalahan saat mengambil data: ' + error.message);
      }
    };
    getArticles();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=programming${search}&pageSize=20&apiKey=f9d9904b2d4a48649d37cb884e56a65f`
        // Ganti 'YOUR_API_KEY' dengan kunci API Anda
      );
      setArticles(response.data.articles);
      setError(null);
    } catch (error) {
      setError('Terjadi kesalahan saat mencari berita: ' + error.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="search-container">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Programming News"
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <h1 className="text-center">Programming News</h1>
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
  );
};

export default ProgrammingNews;
