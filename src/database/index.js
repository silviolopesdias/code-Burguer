import Sequelize from 'sequelize'
import configDatabase from '../config/database'
import mongoose from 'mongoose'

import User from '../app/models/User'
import Product from '../app/models/Product'
import Category from '../app/models/Category'

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(
      'postgresql://postgres:6F646D1cCbC55eG431aA5gfB*44Df4G2@monorail.proxy.rlwy.net:31444/railway'
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:dgFFh5FBhDCFA5bhc6cH5F1HFH1b5AbF@monorail.proxy.rlwy.net:21017',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  }
}
export default new Database()
