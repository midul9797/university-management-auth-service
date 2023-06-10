import { IUser } from './user.interface'
import User from './user.model'
import config from '../../../config/index'
import { generateUserId } from './user.utils'
import ApiError from '../../../errors/ApiError'

const createUserInDB = async (user: IUser): Promise<IUser | null> => {
  const id = await generateUserId()
  user.id = id
  if (!user.password) {
    user.password = config.default_student_password as string
  }
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new ApiError(400, 'Failed to create')
  }
  return createdUser
}
export const UserServices = {
  createUserInDB,
}
