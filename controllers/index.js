const { Folder,List,ToDo } = require('../models')

const getAllFolders = async(req,res) =>{
    try{
        const folders = await Folder.find()
        return res.status(200).json({folders})
    }catch(e){
        return res.status(500).send(e.message)
    }
}

const getListbyFolderId = async(req,res) =>{
    try{
        const {folderId} = await req.params
        const lists = await List.find({folder: folderId})
        return res.status(200).json({lists})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const getTodoByListId = async(req,res) =>{
    try{
        const {listId} = await req.params
        const todos = await ToDo.find({list: listId})
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
        const toDo = await new ToDo(req.body)
        await toDo.save()
        return res.status(201).json({toDo})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const createList = async(req,res) =>{
    try{
        const list = await new List(req.body)
        await list.save()
        return res.status(201).json({list})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const createFolder = async(req,res) =>{
    try{
        const folder = await new Folder(req.body)
        await folder.save()
        return res.status(201).json({folder})
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const updatetoDo = async(req,res) =>{
    try{
        const todo = await ToDo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(todo)
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const updateList = async(req,res) =>{
    try{
        const list = await List.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(list)
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const updateFolder = async(req,res) =>{
    try{
        const folder = await Folder.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(folder)
    }catch(e){
        return res.status(500).send(e.message)
    }
}
const deleteFolder = async(req,res) =>{
    try{
        const { id }= req.params
        const {lists}= List.find({folder: id})
        const deletedToDo = await lists.forEach((list) =>{ToDo.findByIdAndDelete({list: list._id})})
        const deletedList = await List.findByIdAndDelete({folder: id})
        const deletedFolder = await  Folder.findByIdAndDelete(id)
        if(deletedFolder && deletedList){
            return res.status(200).send("Folder deleted");
        }
        throw new Error("Folder not found");
    }catch (error) {
        return res.status(500).send(error.message);
        }
        
}

const deleteList = async(req,res) => {
    try{
        const {id} = req.params
        const deletedToDo = await ToDo.findByIdAndDelete({folder: id})
        const deletedList = await List.findByIdAndDelete({id})
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
        const deletedToDo = await ToDo.findByIdAndDelete({id})
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
        updateFolder,
        updateList,
        updatetoDo,
        deleteFolder,
        deleteList,
        deleteToDo
    }