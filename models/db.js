const   User        = require('./user'),
        WorkHour    = require('./workHour'),
        Payment     = require('./payment'),
        Goal        = require('./goal'),
        Note        = require('./note'),
        Diary       = require('./diary');

const db = {
    User,
    WorkHour,
    Payment,
    Goal,
    Note,
    Diary
};

module.exports = db;