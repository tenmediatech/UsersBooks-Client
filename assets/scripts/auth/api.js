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
const createGame = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST'
  })
}

// Getting Game from api for user
const getGame = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET',
    data: userData
  })
}
// Update Game api
const updateGame = function (clickData) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: clickData
  })
}

// Final Winner Check
const finalWinner = function () {
  store.counter += 1
  if (store.counter >= 9) {
    $('#feedback').html('Tie Game, try again')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  }
  if ($('#box1').hasClass('playerX') && $('#box2').hasClass('playerX') && $('#box3').hasClass('playerX')) {
    $('#feedback').html('Player X is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box1').hasClass('playerO') && $('#box2').hasClass('playerO') && $('#box3').hasClass('playerO')) {
    $('#feedback').html('Player O is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box4').hasClass('playerX') && $('#box5').hasClass('playerX') && $('#box6').hasClass('playerX')) {
    $('#feedback').html('Player X is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box4').hasClass('playerO') && $('#box5').hasClass('playerO') && $('#box6').hasClass('playerO')) {
    $('#feedback').html('Player O is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box7').hasClass('playerX') && $('#box8').hasClass('playerX') && $('#box9').hasClass('playerX')) {
    $('#feedback').html('Player X is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box7').hasClass('playerO') && $('#box8').hasClass('playerO') && $('#box9').hasClass('playerO')) {
    $('#feedback').html('Player O is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box1').hasClass('playerX') && $('#box4').hasClass('playerX') && $('#box7').hasClass('playerX')) {
    $('#feedback').html('Player X is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box1').hasClass('playerO') && $('#box4').hasClass('playerO') && $('#box7').hasClass('playerO')) {
    $('#feedback').html('Player O is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box2').hasClass('playerX') && $('#box5').hasClass('playerX') && $('#box8').hasClass('playerX')) {
    $('#feedback').html('Player X is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box2').hasClass('playerO') && $('#box5').hasClass('playerO') && $('#box8').hasClass('playerO')) {
    $('#feedback').html('Player O is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box3').hasClass('playerX') && $('#box6').hasClass('playerX') && $('#box9').hasClass('playerX')) {
    $('#feedback').html('Player X is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box3').hasClass('playerO') && $('#box6').hasClass('playerO') && $('#box9').hasClass('playerO')) {
    $('#feedback').html('Player O is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box1').hasClass('playerX') && $('#box5').hasClass('playerX') && $('#box9').hasClass('playerX')) {
    $('#feedback').html('Player X is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box1').hasClass('playerO') && $('#box5').hasClass('playerO') && $('#box9').hasClass('playerO')) {
    $('#feedback').html('Player O is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box3').hasClass('playerX') && $('#box5').hasClass('playerX') && $('#box7').hasClass('playerX')) {
    $('#feedback').html('Player X is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  } else if ($('#box3').hasClass('playerO') && $('#box5').hasClass('playerO') && $('#box7').hasClass('playerO')) {
    $('#feedback').html('Player O is winner')
    $('#loadGame').hide()
    store.counter = 0
    store.game.over = true
  }
}

module.exports = {
  signUp,
  signIn,
  onChangePassword,
  signOut,
  updateGame,
  getGame,
  createGame,
  finalWinner
}
