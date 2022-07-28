const { Schema } = require('mongoose')

const List = new Schema(
    {
        name: { type: String, required: true},
        folder: {type: Schema.Types.ObjectId, ref:"Folder", required: false},
        isEdit: {type: Boolean,required:true},

    },{timestamps: true}
)
module.exports = List