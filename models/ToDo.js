
const { Schema } = require('mongoose')


const ToDo = new Schema(
    {
        toDo: {type: String, required: true},
        complete: {type: Boolean,required:true},
        list: {type:Schema.Types.ObjectId,ref: "List",required:true},
        note:{type:String,required:flase},
        important:{type: Boolean,required:true}
    },{timestamps:true}
)

module.exports = ToDo