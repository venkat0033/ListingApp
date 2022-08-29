const types = {
  ADD: 'ADD',
  FILTER: 'FILTER'
}

export const actionCreators = {
  add: (list) => ({ type: types.ADD, payload: list }),
  filter: (text) => ({ type: types.FILTER, payload: text })
}

export const initialState = {
  posts: [],
}

export function reducer(state, action) {
  switch (action.type) {
    case types.ADD:
      return { ...state, posts: action.payload, rowPosts: action.payload }
    case types.FILTER:
      return {
        ...state,
        posts: state.rowPosts.filter((post) => {
          if (!action.payload || action.payload.trim().length == 0 || post.body.indexOf(action.payload) > -1) {
            post.randomNumber = Math.floor(Math.random() * (9000000000 - 1000000000)) + 1000000000;
            return post;
          }
        }),
      }
  }
}
