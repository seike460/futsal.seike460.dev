const firebase = require('firebase/app')
require('firebase/auth')

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: '1',
    authDomain: '1',
    databaseURL: '1',
    projectId: '1',
    storageBucket: '1',
    messagingSenderId: '1',
    appId: '1'
  })
}

export default firebase
