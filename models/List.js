const { Schema } = require('mongoose')

const List = new Schema(
    {
        name: { type: String, required: true},
        folder: {type: Schema.Types.ObjectId, ref:"Folder", required: false},

    },{timestamps: true}
)
module.exports = List