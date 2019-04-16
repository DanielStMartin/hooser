module.exports ={
    read:(req,res,next) =>{
        const db = req.app.get("db")
        db.select_all().then(res =>{
            res.status(200).send(res)
        }).catch(error =>{console.log("error within listing" , error)})
    },
    create:(req,res,next) =>{
        const db = req.app.get("db")
        const { house_name,address,city,state,zip,img,mortgage,rent} = req.body
        db.create_listing([house_name, address, city, state, zip,img,mortgage,rent]).then(res =>{
            res.status(200).send(res)
        }).catch(error =>{console.log("error within listing, " , error)})
    },
    delete:(req,res,next) =>{
        const db = req.app.get("db")
        const { id } = req.query
        console.log("Id: ", id)
        db.delete_listing(id).then(res =>{
            res.status(200).send(res)
        }).catch(error =>{console.log("Couldn't sack the castle", error)})
    },
}