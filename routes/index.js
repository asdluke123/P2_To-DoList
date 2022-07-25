const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => {
  res.send('I am root!')
})

router.get('/folders', controllers.getAllFolders)
router.get('/folders/:id',controllers.getListbyFolderId)
router.get('/list/:id',controllers.getTodoByListId)
router.get('/todo/:search',controllers.getTodoBySearch)




module.exports = router