'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: userData
  })
}

const signIn = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: userData
  })
}

const onChangePassword = function (passwordData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: passwordData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

// Create Game api call
// const createGame = function (userData) {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     method: 'POST'
//   })
// }

// Getting Game from api for user
// const getGame = function (userData) {
//   return $.ajax({
//     url: config.apiUrl + '/games/',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     method: 'GET',
//     data: userData
//   })
// }
// Update Game api
// const updateGame = function (clickData) {
//   return $.ajax({
//     url: config.apiUrl + `/games/${store.game.id}`,
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     method: 'PATCH',
//     data: clickData
//   })
// }

// Adding Book to api
const addBook = function (bookData) {
  return $.ajax({
    url: config.apiUrl + '/books',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: bookData
  })
}

// Showing 1 book from api for user
const searchBook = function (bookId) {
  return $.ajax({
    url: config.apiUrl + `/books/${store.book.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

// Showing All books from api for user
// const getBooks = function (bookId) {
//   return $.ajax({
//     url: config.apiUrl + '/books',
//     headers: {
//       Authorization: `Token token=${store.user.token}`
//     },
//     method: 'GET'
//   })
// }

// const getBooks = function (bookId) {
//   console.log('api')
//   return $.ajax({
//     url: config.apiUrl + '/books'
//   })
// }

const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books'
  })
}

const deleteBook = function (bookId) {
  return $.ajax({
    url: config.apiUrl + '/books/' + bookId,
    method: 'DELETE'
  })
}

module.exports = {
  signUp,
  signIn,
  onChangePassword,
  signOut,
  addBook,
  searchBook,
  getBooks,
  deleteBook
}
