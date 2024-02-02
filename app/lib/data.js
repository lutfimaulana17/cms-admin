import { User } from "./models"
import { connectToDB } from "./utils"

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i")
    const ITEM_PERPAGE = 5
    try {
        connectToDB()
        const count = await User.find({ username: { $regex: regex }}).count()
        const users = await User.find({ username: { $regex: regex }}).limit(ITEM_PERPAGE).skip(ITEM_PERPAGE * (page - 1))
        return {users, count}
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch users!")
    }
}