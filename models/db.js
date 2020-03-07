const   User        = require('./user'),
        WorkHours   = require('./workHours'),
        Payment     = require('./payment'),
        Goals       = require('./goals'),
        Notes       = require('./notes'),
        Diary       = require('./diary');

const db = {
    User,
    WorkHours,
    Payment,
    Goals, 
    Notes,
    Diary
};

module.exports = db;