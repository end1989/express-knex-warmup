const database = require("./database-connection");

module.exports = {
    list() {
        return database("students").select();
    },
    read(id) {
        return database("students")
            .select()
            .where("id", id)
            .first();
    },
    create(students) {
        return database("students")
            .insert(students)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, students) {
        return database("students")
            .update(students)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("students")
            .delete()
            .where("id", id);
    }
};
