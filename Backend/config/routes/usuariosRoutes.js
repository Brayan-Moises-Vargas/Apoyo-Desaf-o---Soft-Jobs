import express from 'express'
import {
  createNewUser,
  getLoggedInUser,
} from '../../src/API/V1/controllers/usuariosController.js'
import { loginAuth } from '../../Middlewares/loginAuth.js'

const router = express.Router()

router.get('/usuarios', loginAuth, getLoggedInUser)
router.post('/usuarios', createNewUser)

export default router
