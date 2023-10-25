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
            ? 'https://newsapi.org/v2/everything?q=indonesia&pageSize=20&apiKey=f9d9904b2d4a48649d37cb884e56a65f'
            : `https://newsapi.org/v2/everything?q=${search}&apiKey=f9d9904b2d4a48649d37cb884e56a65f`
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

  return (
    <div>
      <div className="container-fluid">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search Data"
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
        />
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