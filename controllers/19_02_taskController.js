const EventEmitter =  require("events")

const taskController =  async(req,res) => {

    const ourEmitter =  new EventEmitter();

     ourEmitter.on("ourEvent",()=>{
            console.log('our event is called success....!')
     })

     ourEmitter.emit('ourEvent')// emitting an event
}


module.exports = taskController;