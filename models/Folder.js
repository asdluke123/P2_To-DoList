const { Schema, model } = require('mongoose')

const Folder = new Schema(
    {
        name: { type: String, required: true}
    },{timestamps: true}
)

module.exports = Folder