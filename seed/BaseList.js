const db = require('../db')

const { List } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () =>{
    const baseList = [
        {
        name: "Tasks"
        },
        {
        name: "Faviortes"
        }

]
    await List.insertMany(baseList)
    console.log('BaseList added')
}

const run = async () => {
    await main()
    db.close()
  }
  
  run()