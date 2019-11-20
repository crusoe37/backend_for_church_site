class UsersRepository {
    constructor(database) {
        this.database = database;
    }

    getUser(obj) {
        return this.database.User.findOne({where: obj});
    }
    create(data) { 
        return this.database.User.create({
            name: data.name,
            password: data.password,
            email: data.email
        })
    };
    getAllUsers() {
        return this.database.User.findAll();
    };
}

module.exports = UsersRepository;
