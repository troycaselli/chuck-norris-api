const validateSearchTerm = (req, res, next) => {
    const {searchTerm} = req.params
    if(searchTerm.trim().length < 3 || searchTerm.trim().length > 120) {
        next({status: 400, message: 'search term must be between 3 and 120 characters'})
    } else {
        next()
    }
}

module.exports = {
    validateSearchTerm
}