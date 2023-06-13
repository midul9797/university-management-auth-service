import { Schema, model } from 'mongoose'
import { IAcademicSemester } from './academicSemester.interface'

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: ['write it later'],
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: [],
    },
    startMonth: {
      type: String,
      required: true,
      enum: [],
    },
    endMonth: {
      type: String,
      required: true,
      enum: [],
    },
  },
  { timestamps: true }
)
export const AcademicSemester = model<IAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema
)
