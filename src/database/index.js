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
    this.connection = new Sequelize("postgresql://postgres:B26FABE41gB4Ag2Fa-bGb-4EFEB65gG4@viaduct.proxy.rlwy.net:23022/railway")
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:Hc1EA54FBbGd5fbh65c4DfcDEe6CfB44@monorail.proxy.rlwy.net:44365',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
  }
}
export default new Database()
