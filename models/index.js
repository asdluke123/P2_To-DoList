const mongoose = require('mongoose')
const TodoSchema = require('./ToDo')
const ListSchema = require('./List')
const FolderSchema = require('./Folder')

const Folder = mongoose.model('Folder',FolderSchema)
const List = mongoose.model('List',ListSchema)
const ToDo = mongoose.model('ToDo',TodoSchema)


module.exports = {
    Folder,
    List,
    ToDo,

}