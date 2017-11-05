import bcrypt from 'bcrypt';
import database from '../../database/database';

export const login = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await database
    .table('users')
    .where('username', username)
    .first();

  if (!user) {
    return res.json({
      success: false,
      message: 'Username doenst exists',
    });
  }

  bcrypt.compare(password, user.password, async (err, result) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Password error',
      });
    }

    if (result === false) {
      return res.json({
        success: false,
        message: 'Invalid password',
      });
    }

    return res.json({
      success: true,
      token: user.token,
    });
  });
};

export const register = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await database
    .table('users')
    .where('username', username)
    .first();

  if (user) {
    return res.json({
      success: false,
      message: 'Username already exists',
    });
  }

  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Password error',
      });
    }

    const token = 'testing1234';
    await database
      .table('users')
      .insert({
        username,
        password: hash,
        token,
      });

    return res.json({
      success: true,
      token,
    });
  });
};

export default { login, register };
