const { Response } = require('../utils');
const { UserModel } = require('../models');
const { AuthService, CryptoService } = require('../services');

const UserController = {
  async signin(req, res, next) {
    try {
      return Response.success(res, {
        access_token: await AuthService.sign(JSON.stringify(req.user.toJSON())),
        user: req.user,
      });
    } catch (error) {
      return next(error);
    }
  },

  async logout(req, res, next) {
    try {
      return Response.success(res, {
        token: await AuthService.sign(JSON.stringify(req.user.toJSON())),
      });
    } catch (error) {
      return next(error);
    }
  },

  async signup(req, res, next) {
    try {
      const user = new UserModel({
        email: req.body.email,
        password: await CryptoService.hash(req.body.password),
      });
      await user.save();

      return Response.success(res, {});
    } catch (error) {
      return next(error);
    }
  },

};

module.exports = UserController;
