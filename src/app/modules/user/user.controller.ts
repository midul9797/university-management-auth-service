import { RequestHandler } from 'express'
import { UserServices } from './user.service'

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const user = req.body
    const result = await UserServices.createUserInDB(user)
    res.send(result)
  } catch (error) {
    next(error)
  }
}
export const UserController = {
  createUser,
}
