const   User        = require('./user'),
        WorkHour    = require('./workHour'),
        Day         = require('./day'),
        Payment     = require('./payment'),
        Goal        = require('./goal'),
        Note        = require('./note'),
        Diary       = require('./diary');

const db = {
    User,
    WorkHour,
    Day,
    Payment,
    Goal,
    Note,
    Diary
};

module.exports = db;