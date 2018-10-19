'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

// Creating matrix board

$(() => {
  // Form event listeners
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)

  // Create game event listeners
  $('#newGame').on('click', authEvents.onCreateGame) // calls events.js
  $('#getGames').on('click', authEvents.ongetGame) // calls events.js

  // Boxes event listeners
  $('#box1').on('click', authEvents.onClickBox)
  $('#box2').on('click', authEvents.onClickBox)
  $('#box3').on('click', authEvents.onClickBox)
  $('#box4').on('click', authEvents.onClickBox)
  $('#box5').on('click', authEvents.onClickBox)
  $('#box6').on('click', authEvents.onClickBox)
  $('#box7').on('click', authEvents.onClickBox)
  $('#box8').on('click', authEvents.onClickBox)
  $('#box9').on('click', authEvents.onClickBox)
})
