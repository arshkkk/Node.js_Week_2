const mongoose = require('mongoose')


const Dish = require('./model/dish')

const url = 'mongodb://localhost:27017/Week_2_Mongoose'

mongoose.connect(url)
        .then((db)=>{

            console.log('Successfully connected to Server')

            Dish({
                name: 'Palak Paneer',
                description: 'Very Tasty'
            }).save()
                .then((dish)=>{
                    console.log(dish)

                    return Dish.find({})
                })
                .then(dishes=>{
                    console.log(dishes)

                })
                .then(()=>{
                    return mongoose.connection.close()
                })
                .catch(err=>{
                    console.log(err)
                })
          

})