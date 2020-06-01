const mongoose = require('mongoose')


const Dish = require('./model/dish')

const url = 'mongodb://localhost:27017/Week_2_Mongoose'

mongoose.connect(url)
        .then((db)=>{

            console.log('Successfully connected to Server')

            Dish.create({
                name: 'Palakk Paneer',
                description: 'Very Tasty'
            }).then((dish)=>{

                    console.log(dish)

                    return Dish.findByIdAndUpdate(dish._id,{
                        $set:{ description:'Updated Text' }
                    },
                        {
                            new: true //return updated dish
                        }
                    )
                })
                .then(dish=>{
                    console.log(dish)

                    return Dish.findByIdAndUpdate(dish._id,
                        {
                            $push :{ commentt: {rating:5,author:'arsh',coment:'good'}}
                        }
                        )

                })
                .then(()=>{
                    return mongoose.connection.close()
                })
                .catch(err=>{
                    console.log(err)
                })
          

})