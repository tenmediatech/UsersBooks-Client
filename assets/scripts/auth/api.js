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

const getBooks = function () {
  return $.ajax({
    url: config.apiUrl + '/books'
  })
}

// Delete Book
const deleteBook = function (bookId) {
  return $.ajax({
    url: config.apiUrl + '/books/' + bookId,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

// Update Book
const updateBook = function (bookData) {
  // const id = bookData.id
  return $.ajax({
    url: config.apiUrl + `/books/${bookData.book.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: bookData
  })
}

// Showing 1 book from api for user
const searchBook = function (bookData) {
  // console.log(bookId)
  return $.ajax({
    url: config.apiUrl + `/books/${bookData.book.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
    data: bookData
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
  deleteBook,
  updateBook
}
