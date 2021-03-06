export const GENERATING_EBOOK = 'GENERATING_EBOOK'
export const GENERATED_EBOOK = 'GENERATED_EBOOK'
export const POSTING_EBOOK = 'POSTING_EBOOK'
export const POSTED_EBOOK = 'POSTED_EBOOK'

export function generatingEbook(channelId) {
  return {
    type: GENERATING_EBOOK,
    channelId
  }
}

export function generatedEbook(ebook) {
  return {
    type: GENERATED_EBOOK,
    ebook
  }
}

export function generateEbook(channelId) {
  return dispatch => {
    dispatch(generatingEbook(channelId))
    var url = '/api/ebook/generate?categoryType=Channel&categoryId=' + channelId
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(response => response.json())
    .then(json => {
      dispatch(generatedEbook(json))
    })
  }
}

export function postingEbook(ebookId) {
  return {
    type: POSTING_EBOOK,
    ebookId
  }
}

export function postedEbook(ebook) {
  return {
    type: POSTED_EBOOK,
    ebook
  }
}

export function postEbook(ebookId) {
  return dispatch => {
    dispatch(postingEbook(ebookId))
    var url = '/api/ebook/' + ebookId + '/post'
    return fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    }).then(response => response.json())
    .then(json => dispatch(postedEbook(json)))
  }
}
