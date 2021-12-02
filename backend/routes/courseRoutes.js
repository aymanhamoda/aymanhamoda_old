import express from 'express'
const router = express.Router()
import { getCourseDetails, getCourses } from '../controllers/courseController.js'

router.route('/').get(getCourses)
router.route('/:id').get(getCourseDetails)


export default router
