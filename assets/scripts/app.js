'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
const bookEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

// Creating matrix board

$(() => {
  // Form event listeners
  bookEvents.addHandlers()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  // Add Book event listeners
  $('#getBooks').on('click', authEvents.onGetBooks)
  $('#clearBooksButton').on('click', authEvents.onClearBooks)
  $('#add-book-form').on('submit', authEvents.onAddBook)
  $('#search-book-form').on('submit', authEvents.onSearchBook)
  $('#updateBook').on('submit', authEvents.onUpdateBook)
})
