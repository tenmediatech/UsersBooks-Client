'use strict'

const store = require('../store.js')
const showBooksTemplate = require('../templates/book-listing.handlebars')

const signUpSuccess = function (data) {
  $('#feedback').html('Sign up successful')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#feedback').html('Something went wrong, please try again')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#feedback').html('User Signed In, Start Game')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').show()
  $('#book-section').show()
  // $('#search-book').show()
  // $('#create-book').show()
  $('.actionbutton').show()
  $('#sign-up-form').hide()
  store.user = response.user
  $('#sign-in-form').hide()
  $('#sign-out-button').removeClass('hidden')
  $('#create-example-form').removeClass('hidden')
  $('#container').html('Game Board').hide()
}

const signInFailure = function () {
  $('#feedback').html('Something went wrong, please try again')
  $('#sign-in-form').trigger('reset')
}

const changeedPassword = function () {
  $('#feedback').html('Password Changed successful')
  $('#change-password-form').trigger('reset')
}

const changeedPasswordFailure = function () {
  $('#feedback').html('Something went wrong, please try again')
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#feedback').html('Sign Out successful')
  $('#loadGame').hide()
  $('#change-password-form').trigger('reset')
  $('#change-password-form').hide()
  $('.actionbutton').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#book-section').hide()
}

// Hide the game board on loading page
$(document).ready(function () {
  $('#hidebeforesignin').hide()
  $('#loadGame').hide()
  $('#change-password-form').hide()
  $('#book-section').hide()
  // $('#search-book').hide()
  // $('#create-book').hide()
  $('.actionbutton').hide()
})

const createGameSuccess = function (response) {
  $('#loadGame').show()
  $('#feedback').html('Start your game')
  store.counter = 0
  store.game = response.game
}

const getGameSuccess = function (response) {
  $('#feedback').html(`You have ${response.games.length} games`)
}

const updateGameSuccess = function (response) {
  store.game = response.game
}

// Adding book success or failure
const addBookSuccess = function (response) {
  $('#feedback').html('Book added successful')
  $('#sign-up-form').trigger('reset')
  store.book = response.book
}
const addBookFailure = function () {
  $('#feedback').html('Something went wrong, please try again')
  $('#sign-up-form').trigger('reset')
}

// Searching book success or failure
const searchBookSuccess = function (response) {
  store.book = response.book
  $('#feedback').html(`Book found with title: ${store.book.title}`)
  $('#sign-up-form').trigger('reset')
}
const searchBookFailure = function () {
  $('#feedback').html('Something went wrong, please try again')
  $('#sign-up-form').trigger('reset')
}

// Getting books success or failure
// const getBookSuccess = function (response) {
//   store.book = response.book
//   $('#feedback').html(`List of all the books: ${store.book.title}`)
//   $('#sign-up-form').trigger('reset')
// }

const getBooksSuccess = (data) => {
  console.log(data)
  const showBooksHtml = showBooksTemplate({ books: data.books })
  // .html will replace the entire entry on the page for the class content.
  $('.content').html(showBooksHtml)
}

const getBookFailure = function () {
  $('#feedback').html('Something went wrong, please try again')
  $('#sign-up-form').trigger('reset')
}

const clearBooks = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changeedPassword,
  changeedPasswordFailure,
  signOutSuccess,
  createGameSuccess,
  getGameSuccess,
  updateGameSuccess,
  addBookSuccess,
  addBookFailure,
  searchBookSuccess,
  searchBookFailure,
  // getBookSuccess,
  getBooksSuccess,
  getBookFailure,
  clearBooks,
  failure
}
