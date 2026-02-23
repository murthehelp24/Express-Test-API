import { foodMenus } from '../data/data.js'

export function getMenu(req, res){

  res.status(200).json(foodMenus)
}

export function getMenuById(req, res) {
  const menuId = parseInt(req.params.id) //parseInt =  แปลงข้อความ (String) ให้เป็นตัวเลขจำนวนเต็ม
  const menu = foodMenus.find(m=> m.id === menuId)

  if(!menu){
    res.status(404).json('Menu not found')
  } else {
    res.status(200).json(menu)
  }
}

export function postMenu(req, res){
  const newMenu = {
    id: foodMenus.length +1,
    name: req.body.name,
    price: req.body.price
  }
  foodMenus.push(newMenu)
  res.status(201).json(newMenu)
}