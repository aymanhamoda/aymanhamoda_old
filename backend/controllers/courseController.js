import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'

// @desc    Fetch all teamwork
// @route   GET /api/teamwork
// @access  Public
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({}).sort({ _id: -1 })
  res.json({ courses })
})

const getCourseDetails = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id)
  res.json({ course })
})
export { getCourses, getCourseDetails }
