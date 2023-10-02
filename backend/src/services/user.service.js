import cluster from "../cluster/index.js"

const findUserByUsername = async (username) => {
    const { User } = cluster.databases.user.models;
    const userFounded = await User.findOne({ username }).exec();
    return userFounded;
}

export default {
    findUserByUsername
}