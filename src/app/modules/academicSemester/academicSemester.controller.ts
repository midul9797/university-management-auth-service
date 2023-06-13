import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { AcademicSemesterService } from './academicSemester.service'
import sendResponse from '../../../shared/sendResponse'
import { IAcademicSemester } from './academicSemester.interface'

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    )
    sendResponse<IAcademicSemester>(res, {
      statusCode: 200,
      success: true,
      message: 'Academic semester created successfully!!',
      data: result,
    })
    next()
  }
)
export const AcademicSemesterController = {
  createSemester,
}
