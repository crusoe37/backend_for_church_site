class UsersController {
    constructor(usersRepository) {
        this.usersRepository = usersRepository
    }

    getProfile(req, res) {
        res.send('Profile userController')
    }

    login(req, res) {
        // console.log('CONTROLLER REQBODY', req.body)
        if (req.body.name && req.body.password) {
            this.usersRepository.getUser(req.body)
                .then(user => {
                    console.log('USER!!!', user)
                    if (!user) {
                        return res.status(401).json({ msg: 'No such user found'});
                    }
                    if (user.password === req.body.password) {
                        // from now on we’ll identify the user by the id and the id is
                        // the only personalized value that goes into our token
                        let payload = { id: user.id };
                        let token = jwt.sign(payload, jwtOptions.secretOrKey);
                        return res.json({ msg: 'ok', token: token });
                    } else {
                        return res.status(401).json({ msg: 'Password is incorrect' });
                    }
                })
                // .catch(err => res.status(500).send(err))
        }
    }

    getList(req, res) {
        this.usersRepository.getAllUsers().then(result => 
            res.status(200).json(result))
    }

    create(req, res) {
        this.usersRepository.create(req.body).then(result => 
            res.status(200).json(result))
    }
}

module.exports = UsersController