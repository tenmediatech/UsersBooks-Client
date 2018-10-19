'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

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

// Create Game
const onCreateGame = function () {
  event.preventDefault()
  store.click = 0
  for (let i = 1; i < 10; i++) {
    $(`#box${i}`).text('')
    $(`#box${i}`).removeClass('playerX')
    $(`#box${i}`).removeClass('playerO')
  }
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.creatGameFailure)
}

// On Click Game Update
store.click = 0
const onClickBox = function (event) {
  let data
  const currentIndex = $(event.target).data('index')
  if ($(event.target).text() === '') {
    if (store.click % 2 === 0) {
      $(this).addClass('playerX')
      $(event.target).text('X')
      $('#feedback').html('Player O turn')
      store.click++
      data = {
        'game': {
          'cell': {
            'index': currentIndex,
            'value': 'x'
          },
          'over': store.game.over
        }
      }
    } else {
      $(event.target).text('O')
      const currentIndex = $(event.target).data('index')
      $(this).addClass('playerO')
      $('#feedback').html('Player X turn')
      store.click++
      data = {
        'game': {
          'cell': {
            'index': currentIndex,
            'value': 'o'
          },
          'over': store.game.over
        }
      }
    }
  } else {
    $('#feedback').html('Invalid Move')
    this.target.event.off('click')
  }
  api.finalWinner()
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

// Getting Game records
const ongetGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getGame(data)
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  ongetGame,
  onClickBox
}
