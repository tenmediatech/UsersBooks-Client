'use strict'

const store = require('../store.js')

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
}

// Hide the game board on loading page
$(document).ready(function () {
  $('#hidebeforesignin').hide()
  $('#loadGame').hide()
  $('#change-password-form').hide()
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
  updateGameSuccess
}
