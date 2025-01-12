const express = require("express")
const router = express.Router()

const {
    addUser,
    listUsers,
    deleteUser,
    updateUser,
    getUSerById,
} = require("../controller/operations")

// Route for users
router.get("/person", listUsers)
router.get("/person/:userId", getUSerById)
router.post("/person", addUser)
router.delete("/person/:userId", deleteUser)
router.put("/person/:userId", updateUser)

module.exports = router