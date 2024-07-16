const User = require('../models/User');
const { generateToken, hashPassword, comparePassword } = require('../config/auth');

const signup = async (req, res) => {
    const { username, email, password, role } = req.body;
    const hashedPassword = await hashPassword(password);

    try {
        const newUser = await User.create({ username, email, password: hashedPassword, role });
        const token = generateToken(newUser);
        res.status(201).json({ token });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ error: 'An error occurred while signing up' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user || !(await comparePassword(password, user.password))) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = generateToken(user);
        res.json({ token, user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred while logging in' });
    }
};

const adminLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email, role: 'admin' } });

        if (!user || !(await comparePassword(password, user.password))) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = generateToken(user);
        res.json({ token, user });
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ error: 'An error occurred while logging in' });
    }
};

module.exports = {
    signup,
    login,
    adminLogin,
};
