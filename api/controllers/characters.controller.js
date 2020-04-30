const Characters = require('../dal/characters.dal');

function handleError(res, err) {
    console.log('encountered error... ', err);
    res.json({
        error: err
    });
}


exports.createCharacter = function (req, res, next) {
    // i need to create a data structure (object)
    // that has all of the information from the request (req.body);
    console.log('body: ', req.body);
    const data = {
        name: req.body.name,
        characterClass: req.body.characterClass,
        level: req.body.level,
        background: req.body.background,
        playerName: req.body.playerName,
        race: req.body.race,
        alignment: req.body.alignment,
        experience: req.body.experience,
    };

    Characters.create(data, function (err, character) {
        if (err) {
            handleError(res, err);
            return;
        }
        res.json({
            message: "Character created successfully.",
            character,
        });
    })
}
exports.getCharacter = function (req, res, next) {
    const query = {};
    Characters.get(query, (err, results) => {
        if (err) {
            handleError(res, err);
            return;
        }
        res.json(results);
    });
}
exports.updateCharacter = function (req, res, next) {

}
exports.deleteCharacter = function (req, res, next) {

}