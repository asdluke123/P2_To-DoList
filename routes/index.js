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

router.post('/folders',controllers.createFolder)
router.post('/folders/:id',controllers.createList)
router.post('/list/:id',controllers.createToDo)

router.put('/folders',controllers.updateFolder)
router.put('/folders/:id',controllers.updateList)
router.put('/list/:id',controllers.updatetoDo)



module.exports = router