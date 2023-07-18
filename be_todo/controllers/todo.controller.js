const todos = require("../models/todo")

exports.create = (req, res) => {
    const todo = new todos({
        name: req.body.name
    });
    console.log(todo);

    todo
        .save(todo)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the todo.",
            });
        });
}

exports.getAll = (req, res) => {
    todos.find({})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the todo.",
            });
        });
}

exports.getOne = (req, res) => {
    const id = req.params.id;
    todos.findById(id)
        .then((data) => {
            if (!data)
                res.status(404).send({ message: "Not found record with id " + id });
            else
                res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the todo.",
            });
        });
}


exports.update = (req, res) => {
    const id = req.params.id;
    todos.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Record with id=${id}. Maybe Record was not found!`,
                });
            } else res.send({ message: "Record was updated successfully." });
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the todo.",
            });
        });
}


exports.delete = (req, res) => {
    const id = req.params.id;
    todos.findByIdAndRemove(id, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Record with id=${id}. Maybe Record was not found!`,
                });
            } else {
                res.send({
                    message: "Record was deleted successfully!",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the todo.",
            });
        });
}