const { Response } = require('../utils');
const { UserModel } = require('../models');
const { CryptoService } = require('../services');

const UserController = {
  async getAll(req, res, next) {
    try {
      const users = await UserModel.findAll();
      return Response.success(res, users);
    } catch (error) {
      return next(error);
    }
  },

  async create(req, res, next) {
    try {
      const user = new UserModel({
        email: req.body.email,
        password: await CryptoService.hash(req.body.password),
        first_name: req.body.firstName,
        last_name: req.body.lastName,
      });

      await user.save();
      return Response.success(res, user);
    } catch (error) {
      return next(error);
    }
  },

  async getOne(req, res, next) {
    try {
      const user = await UserModel.findById(req.params.id);
      return Response.success(res, user);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = UserController;
