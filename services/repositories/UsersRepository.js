class UsersRepository {
    constructor(database) {
        this.database = database;
    }

    getById(id) {
        return this.database.Users.findByPk(id);
    }
}

module.exports = UsersRepository;
