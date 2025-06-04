const mongoose=require('mongoose');
const cities=require('./cities')
const Campground=require('../models/campground')
const {descriptors,places}=require('./seedHelpers')

mongoose.connect('mongodb://localhost:27017/myFirst')

const db=mongoose.connection;
db.on('error',console.error.bind(console,'connectionerror:'))
db.once('open',()=>{
    console.log('db connected')
})

const seeddb=async()=>{
await Campground.deleteMany({});
for(let i=0;i<20;i++){
    const camp=new Campground({
        //my user id
        author:'6832ab5bd918d36fdeb1e601',
        location:`${cities[i].city},${cities[i].state}`,
        title:`${descriptors[i % descriptors.length]} ${places[i % places.length]}`,
        geometry:{
            type:'Point',
            coordinates:[cities[i].longitude,cities[i].latitude]
        },
        images:[{
            url:'https://res.cloudinary.com/dyumcn403/image/upload/v1748449154/Yelpcamp/oo0qlbudvun2noepgzhc.jpg',
            filename:'Yelpcamp/oo0qlbudvun2noepgzhc'
        },{
            url:'https://res.cloudinary.com/dyumcn403/image/upload/v1748449158/Yelpcamp/hcfstsbyc0ylcik9qp19.jpg',
            filename:'Yelpcamp/hcfstsbyc0ylcik9qp19'
        }],
        description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, doloremque illum? Architecto laborum assumenda in sed animi temporibus, aspernatur rem tenetur sint consequatur, eaque, blanditiis libero veniam possimus consectetur id!',
        price:Math.floor(Math.random() * 20) + 10
    })
    await camp.save()
}
}

seeddb().then(()=>{
    mongoose.connection.close()
})