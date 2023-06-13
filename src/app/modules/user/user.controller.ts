import { NextFunction, Request, Response } from 'express'
import { UserServices } from './user.service'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { IUser } from './user.interface'

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body
    const result = await UserServices.createUserInDB(user)
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student created successfully!!!',
      data: result,
    })
    next()
  }
)

export const UserController = {
  createUser,
}
