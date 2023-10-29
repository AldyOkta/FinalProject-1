import { SAVE_ARTICLE, UNSAVE_ARTICLE, CLEAR_SAVED_ARTICLES } from './actions';

const initialState = {
  savedArticles: [],
};

const savedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ARTICLE:
      return {
        savedArticles: [...state.savedArticles, action.payload],
      };
    case UNSAVE_ARTICLE:
      return {
        savedArticles: state.savedArticles.filter(
          (article) => article.url !== action.payload.url
        ),
      };
    case CLEAR_SAVED_ARTICLES:
      return {
        savedArticles: [],
      };
    default:
      return state;
  }
};

export default savedReducer;
