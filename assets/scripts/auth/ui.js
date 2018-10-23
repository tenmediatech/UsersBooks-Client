'use strict'

const store = require('../store.js')
const showBooksTemplate = require('../templates/book-listing.handlebars')

const signUpSuccess = function (data) {
  $('#feedback').html('Sign up successful')
  $('#sign-up-form').trigger('reset')
  $('#id02').css('display', 'none')
}

const signUpFailure = function () {
  $('#feedback').html('Something went wrong, please try again')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#feedback').html('Sign in successful')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').show()
  $('#book-section').show()
  $('.actionbutton').show()
  $('#sign-up-form').hide()
  $('#content').show()
  store.user = response.user
  $('#loadAuth').hide()
  $('#id01').css('display', 'none')
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
  $('#id03').css('display', 'none')
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
  $('#loadAuth').show()
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#book-section').hide()
  $('#content').hide()
  $('#feedback').html('Sign Out successful')
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

const getBooksSuccess = (data) => {
  const showBooksHtml = showBooksTemplate({ books: data.books })
  // .html will replace the entire entry on the page for the class content.
  $('.content').html(showBooksHtml)
}

const getBookFailure = function () {
  $('#feedback').html('Something went wrong, please try again')
  $('#sign-up-form').trigger('reset')
}

// Searching books
const searchBooksSuccess = (response) => {
  store.book = response.book
  $('.content').html(`Book ${store.book.title} is found`)
}
const searchBookFailure = function () {
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
  addBookSuccess,
  addBookFailure,
  searchBooksSuccess,
  searchBookFailure,
  getBooksSuccess,
  getBookFailure,
  clearBooks,
  failure
}
