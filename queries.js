const database = require("./database-connection");

module.exports = {
    list() {
        return database("students").select();
    },
    create(students) {
        return database("students")
            .insert(students)
            .returning("*")
            .then(record => record[0]);
    }
};
