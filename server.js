import express from 'express'
import menuRoutes from './routes/menuRoutes.js'

const app = express()
const PORT = 3000;
app.use(express.json())

app.use('/menus', menuRoutes)


app.listen(PORT, () => {
  console.log(`เซิฟเวอร์กำลังทำงาน http://localhost:${PORT}`)
})