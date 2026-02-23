import express from 'express'
import { getMenu, getMenuById, postMenu } from '../controllers/menuController.js'

const routes = express.Router()

routes.get('/', getMenu)
routes.get('/:id', getMenuById)
routes.post('/', postMenu)


export default routes