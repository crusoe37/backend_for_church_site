class UsersController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository
    }

    getProfile(req, res) {
        res.send('Profile userController')
    }
}

module.exports = UsersController