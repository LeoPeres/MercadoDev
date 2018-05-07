const config = {
    apiKey: "AIzaSyAqPrXAd3IUJpS7h1eFtyiGL1OpaeEbPt0",
    authDomain: "mercadodev-3d791.firebaseapp.com",
    databaseURL: "https://mercadodev-3d791.firebaseio.com",
    projectId: "mercadodev-3d791",
    storageBucket: "gs://mercadodev-3d791.appspot.com",
    messagingSenderId: "1095084255295"
}

const Rebase = require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export const storage = app.storage()
export default base