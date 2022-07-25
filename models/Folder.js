const { Schema} = require('mongoose')

const Folder = new Schema(
    {
        name: { type: String, required: true},
        folderType:{type: String, required: true}
    },{timestamps: true}
)

module.exports = Folder