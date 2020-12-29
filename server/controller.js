let data = require('./data.json')

module.exports = {
    getAllUsers: (req, res) => {
        const {email} = req.query
        if(!email) return
        res.status(200).send(data)
        const filteredUsers = data.filter(element => element.email.includes(email))
        res.status(200).send(filteredUsers)
    },
    getSingleUser: (req, res) => {
        // console.log(req.params)
        const {id} = req.params
        const user = data.find(element => element.id === +id)
        if(!user) return res.status(404).send('user not found')
        res.status(200).send(user)
    }
}

//axios.post('http://localhost:3100/users/3?id=3', body)