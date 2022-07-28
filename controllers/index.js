const { restart } = require('nodemon')
const { Folder,List,ToDo } = require('../models')

const getAllFolders = async(req,res) =>{
    try{
        const folders = await Folder.find()
        return res.status(200).json({folders})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const getTasksLists = async(req,res) =>{
    try{
        const lists = await List.find({name: 'Tasks'})
        return res.status(200).json({lists})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const getFavoriteList = async(req,res) =>{
    try{
        const lists = await List.find({name: 'Faviortes'})
        return res.status(200).json({lists})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const getFavoriteToDos = async(req,res) =>{
    try{
        const toDos = await ToDo.find({favorite: true})
        return res.status(200).json({toDos})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const getListbyFolderId = async(req,res) =>{
    try{
        const {id} = await req.params
        const lists = await List.find({folder: id})
        return res.status(200).json({lists})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const getTodoByListId = async(req,res) =>{
    try{
        const {id} = await req.params
        const todos = await ToDo.find({list: id})
        return res.status(200).json({todos})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const getTodoBySearch = async(req,res) =>{
    try{
        const {search} = await req.params
        const searchToDos = await ToDo.find({toDo: {$regex: search}})
        return res.status(200).json({searchToDos})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const createToDo = async(req,res) =>{
    try{
        const toDo =  new ToDo(req.body)
        await toDo.save()
        return res.status(200).json({toDo})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const createList = async(req,res) =>{
    try{
        const list =  new List(req.body)
        await list.save()
        return res.status(200).json({list})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const createFolder = async(req,res) =>{
    try{
        const folder =  new Folder(req.body)
        await folder.save()
        return res.status(200).json({folder})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const updatetoDo = async(req,res) =>{
    try{
        const todo = await ToDo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).json(todo)
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const updateList = async(req,res) =>{
    try{
        const list = await List.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).json(list)
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const updateFolder = async(req,res) =>{
    try{
        const folder = await Folder.findByIdAndUpdate(req.params.id,req.body,{new:true})
       return  res.status(200).json(folder)
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const deleteFolder = async(req,res) =>{
    try{
        const { id }= await  req.params
        const lists= await List.find({folder: id})
        let deletedToDo
        lists.forEach( async (list)  =>{ 
         deletedToDo = await ToDo.deleteMany({list: list._id})
        })
       const deletedList = await List.deleteMany({folder: id})
       const deletedFolder = await  Folder.deleteMany({ _id: id})
       if(deletedToDo != null || lists != null){
        if(deletedFolder){
            return res.status(200).send("Folder deleted");
        }
        
        throw new Error("Folder not found");
        }   
    }catch (error) {
        return res.status(500).send(error.message);
        }
        
}

const deleteList = async(req,res) => {
    try{
        const {id} =  await req.params
        const deletedToDo= await ToDo.deleteMany({list: id})
        const deletedList = await List.deleteMany({_id:id})
        if(deletedToDo && deletedList){
            return res.status(200).send("List deleted");
        }
        throw new Error("List not found");
    }catch (error) {
        return res.status(500).send(error.message);
        }
}

const deleteToDo = async(req,res) =>{
    try{
        const {id} = req.params
        const deletedToDo = await ToDo.deleteMany({_id:id})
        if(deletedToDo){
            return res.status(200).send("ToDo deleted");
        }
        throw new Error("ToDo not found");
    }catch (error) {
        return res.status(500).send(error.message);
        }
    }

    module.exports = {
        getAllFolders,
        getListbyFolderId,
        getTodoByListId,
        getTodoBySearch,
        getFavoriteList,
        getTasksLists,
        getFavoriteToDos,
        createFolder,
        createList,
        createToDo,
        updateFolder,
        updateList,
        updatetoDo,
        deleteFolder,
        deleteList,
        deleteToDo
    }