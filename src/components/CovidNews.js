import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NewsItem } from './NewsItem';

const CovidNews = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(''); 

  useEffect(() => {
    const apiKey = 'YOUR_API_KEY'; 

    const getArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=covid-19&from=${getLastMonthDate()}&to=${getCurrentDate()}&pageSize=20&apiKey=f9d9904b2d4a48649d37cb884e56a65f`
        );
        setArticles(response.data.articles);
        setError(null);
      } catch (error) {
        setError('Terjadi kesalahan saat mengambil data: ' + error.message);
      }
    };
    getArticles();
  }, []); 

  const getLastMonthDate = () => {
    const today = new Date();
    const lastMonth = new Date(today);
    lastMonth.setMonth(today.getMonth() - 1);
    return lastMonth.toISOString().split('T')[0];
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=f9d9904b2d4a48649d37cb884e56a65f`
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
          placeholder="Search COVID-19 News"
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <h1 className="text-center">COVID-19 News</h1>
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

export default CovidNews;
