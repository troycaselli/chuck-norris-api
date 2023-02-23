const router = require('express').Router()
const baseUrl = require('../utils/url')
const axios = require('axios')
const {validateSearchTerm} = require('./middleware')

const options = {
    headers: {
        'X-RapidAPI-Key': process.env.APIKEY,
    }
  }

// random
router.get('/random', (req, res, next) => {
    axios.get(`${baseUrl}/random`, options)
        .then(response => {
            res.status(200).json(response.data)
        })
        .catch(err => next(err))
})

// search term
router.get('/search/:searchTerm', validateSearchTerm, (req, res, next) => {
    const {searchTerm} = req.params
    axios.get(`${baseUrl}/search?query=${searchTerm}`, options)
        .then(response => {
            res.status(200).json(response.data)
        })
        .catch(err => next(err))
})

module.exports = router