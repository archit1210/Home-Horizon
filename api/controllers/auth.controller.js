import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashsedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({ username, email, password: hashsedPassword })
    try {
        await newUser.save()
        res.status(201).json("User created successfully!")
    }
    catch (err) {
        res.status(500).json(err.message)
    }
}