export const SAVE_ARTICLE = 'SAVE_ARTICLE';
export const UNSAVE_ARTICLE = 'UNSAVE_ARTICLE';
export const CLEAR_SAVED_ARTICLES = 'CLEAR_SAVED_ARTICLES';

export const saveArticle = (article) => ({
  type: SAVE_ARTICLE,
  payload: article,
});

export const unsaveArticle = (article) => ({
  type: UNSAVE_ARTICLE,
  payload: article,
});

export const clearSavedArticles = () => ({
  type: CLEAR_SAVED_ARTICLES,
});
