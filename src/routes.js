import { Router } from 'express'
import api from './api'
import slides from './slides'

const router = Router()
router.use('/api', api)
router.use('/slides', slides)

export default router
