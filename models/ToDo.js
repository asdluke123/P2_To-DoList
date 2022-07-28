
const { Schema } = require('mongoose')


const ToDo = new Schema(
    {
        toDo: {type: String, required: true},
        complete: {type: Boolean,required:true},
        list: {type:Schema.Types.ObjectId,ref: "List",required:true},
        note:{type:String,required:false},
        favorite:{type: Boolean,required:true},
        isEdit:{type:Boolean,required:true}
    },{timestamps:true}
)

module.exports = ToDo