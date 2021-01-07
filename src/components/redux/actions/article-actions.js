import {FETCH_ARTICLES_REQUEST, FETCH_ARTICLES_FAILURE, FETCH_ARTICLES_SUCCESS} from './action-types'
import axios from 'axios'

export const fetchArticles = () => {
  return (dispatch) => {
    dispatch(fetchArticlesRequest())
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(({data}) => {
      const articles = data
      dispatch(fetchArticlesSuccess(articles))
    })
    .catch(({message}) => {
      dispatch(fetchArticlesFailure(message))
    })
  }
}

export const fetchArticlesRequest = () => {
  return {
    type: FETCH_ARTICLES_REQUEST
  }
}

export const fetchArticlesSuccess = articles => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: articles
  }
}

export const fetchArticlesFailure = error => {
  return {
    type: FETCH_ARTICLES_FAILURE,
    payload: error
  }
}