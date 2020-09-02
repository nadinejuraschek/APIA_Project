const   User        = require('./user'),
        Workhour    = require('./workhour'),
        // Day         = require('./day'),
        Payment     = require('./payment'),
        Goal        = require('./goal'),
        Note        = require('./note'),
        Diary       = require('./diary');

const db = {
    User,
    Workhour,
    // Day,
    Payment,
    Goal,
    Note,
    Diary
};

module.exports = db;