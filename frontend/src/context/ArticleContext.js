import { createContext, useReducer } from 'react'

export const ArticlesContext = createContext()

export const articlesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        articles: action.payload
      }
    case 'CREATE_ITEM':
      return {
        articles: [action.payload, ...state.articles]
      }
    case 'DELETE_ITEM':
      return {
        articles: state.articles.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const ArticlesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(articlesReducer, {
    items: null
  })

  return (
    <ArticlesContext.Provider value={{...state, dispatch}}>
      { children }
    </ArticlesContext.Provider>
  )
}
