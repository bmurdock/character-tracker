const Characters = require('../controllers/characters.controller');
const prefix = '/characters';

module.exports = function (router) {
    // expect the route to look like: /api/characters/
    router.get(`${prefix}/`, Characters.getCharacter);
    router.post(`${prefix}/`, Characters.createCharacter);
}