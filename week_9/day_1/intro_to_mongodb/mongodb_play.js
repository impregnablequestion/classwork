use zoo;

// Reading from the db

const id = ObjectId('63c55a2f5cb130d52942c44d')
db.animals.findOne({_id: id})

db.animals.updateOne(
    {_id: ObjectId('63c55a2f5cb130d52942c44c')},
    {$set: {name: "Steve"}}
)

db.animals.deleteOne({_id: ObjectId('63c55a2f5cb130d52942c44c')})


