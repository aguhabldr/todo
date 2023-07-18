module.exports = app => {
    let router = require("express").Router();
    const { validate, Joi } = require('express-validation');
    const todo = require("../controllers/todo.controller");

    const createTodo = {
        body: Joi.object({
          name: Joi.string().trim().min(6).max(50).trim().required(),
        })
    }

    router.post("/", validate(createTodo), todo.create);
    router.get("/",todo.getAll);
    router.get("/:id",todo.getOne);
    router.put("/:id",todo.update);
    router.delete("/:id",todo.delete);

    app.use("/api/v1/todos", router);
}