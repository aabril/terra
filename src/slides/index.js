import { static as serveStatic, Router } from 'express'

const router = Router()

router.use(serveStatic(__dirname + '/'))

export default router
