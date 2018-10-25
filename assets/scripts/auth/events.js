'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// SignUp
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// SignIn
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onChangePassword(data)
    .then(ui.changeedPassword)
    .catch(ui.changeedPasswordFailure)
}

// let showhide = 1
const onSignOut = function (event) {
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// Adding Book successful
const onAddBook = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addBook(data)
    .then(ui.addBookSuccess)
    .catch(ui.addBookFailure)
}

// Showing One Book successful
const onSearchBook = function (event) {
  event.preventDefault()
  const bookdata = getFormFields(event.target)
  api.searchBook(bookdata)
    .then(ui.searchBooksSuccess)
    .catch(ui.searchBookFailure)
}

const onGetBooks = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.getBookFailure)
}

const onClearBooks = (event) => {
  event.preventDefault()
  ui.clearBooks()
}

// Delete Books
const onDeleteBook = (event) => {
  event.preventDefault()
  const bookId = $(event.target).closest('section').data('id')
  // confirm function is the global browser function.
  if (confirm('Are you sure you want to delete this book?')) {
    api.deleteBook(bookId)
      .then(() => onGetBooks(event))
      .catch(ui.deleteBookFailure)
  }
  // ui.removeBook()
}

// Update Book title
const onUpdateBook = (event) => {
  event.preventDefault()
  const bookData = getFormFields(event.target)
  // confirm function is the global browser function.
  if (confirm('Are you sure you want to update this book?')) {
    api.updateBook(bookData)
      .then(ui.updateBooksSuccess)
      .catch(ui.updateBooksFailure)
  }
// ui.removeBook()
}

const addHandlers = () => {
  $('.content').on('click', 'button', onDeleteBook)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onAddBook,
  onSearchBook,
  onGetBooks,
  onClearBooks,
  onDeleteBook,
  onUpdateBook,
  addHandlers
}
