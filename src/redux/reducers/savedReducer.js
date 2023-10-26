// savedReducer.js
import { SAVE_ARTICLE, UNSAVE_ARTICLE, CLEAR_SAVED_ARTICLES } from '../actions/actions';

const initialState = {
  savedArticles: JSON.parse(localStorage.getItem('savedArticles')) || [],
};

const savedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ARTICLE:
      const newSavedArticles = [...state.savedArticles, action.payload];
      localStorage.setItem('savedArticles', JSON.stringify(newSavedArticles));
      return {
        savedArticles: newSavedArticles,
      };
    case UNSAVE_ARTICLE:
      const updatedSavedArticles = state.savedArticles.filter(
        (article) => article.url !== action.payload.url
      );
      localStorage.setItem('savedArticles', JSON.stringify(updatedSavedArticles));
      return {
        savedArticles: updatedSavedArticles,
      };
    case CLEAR_SAVED_ARTICLES:
      localStorage.removeItem('savedArticles');
      return {
        savedArticles: [],
      };
    default:
      return state;
  }
};

export default savedReducer;
