const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', controllers.getTasksLists)
router.get('/favorites',controllers.getFavoriteList)
router.get('/folders', controllers.getAllFolders)
router.get('/folders/:id',controllers.getListbyFolderId)
router.get('/list/:id',controllers.getTodoByListId)
router.get('/todo/:search',controllers.getTodoBySearch)
router.get('/favorite',controllers.getFavoriteToDos)
router.post('/folders',controllers.createFolder)
router.post('/folders/:id',controllers.createList)
router.post('/list/:id',controllers.createToDo)


router.put('/folders/:id',controllers.updateFolder)
router.put('/list/:id',controllers.updateList)
router.put('/todo/:id',controllers.updatetoDo)
router.delete('/folders/:id',controllers.deleteFolder)
router.delete('/list/:id',controllers.deleteList)
router.delete('/todo/:id',controllers.deleteToDo)

module.exports = router