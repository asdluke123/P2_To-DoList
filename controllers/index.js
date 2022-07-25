const {Folder,List,ToDo} = require("../models")

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

