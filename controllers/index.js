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
