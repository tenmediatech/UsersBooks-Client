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
  console.log(event)
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addBook(data)
    .then(ui.addBookSuccess)
    .catch(ui.addBookFailure)
}

// Showing One Book successful
const onSearchBook = function (event) {
  console.log('hello')
  event.preventDefault()
  const form = event.target
  const bookData = getFormFields(form)
  // const data = getFormFields(event.target)
  api.searchBook(bookData)
    .then(ui.searchBookSuccess)
    .catch(ui.searchBookFailure)
}

// const onGetBooks = (event) => {
//   console.log('hello')
//   event.preventDefault()
//   const form = event.target
//   const bookData = getFormFields(form)
//   api.getBooks(bookData)
//     .then(ui.getBookSuccess)
//     .catch(ui.getBookFailure)
// }

const onGetBooks = (event) => {
  event.preventDefault()
  api.getBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure)
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
      .catch(ui.failure)
  }
  ui.removeBook()
}

const addHandlers = () => {
  $('#getGames').on('click', onGetBooks)
  $('#clearBooksButton').on('click', onClearBooks)
  $('.content').on('click', 'button', onDeleteBook)

  // $('.content').on('click', 'button', console.log(event))
  // this will listen to the big div of class content and anable the particular button.some
  // target specific button in the class content.
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
  addHandlers
}
