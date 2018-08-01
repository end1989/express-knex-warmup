exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("students")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("students").insert([
                {
                    id: 1,
                    first_name: "Eldon",
                    last_name: "Dahlin",
                    prev_occupation: "Customer Service Rep",
                    hometown: "Hilmar"
                }
            ]);
        });
};
