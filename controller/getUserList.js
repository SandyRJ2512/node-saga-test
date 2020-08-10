const axios = require('axios');

async function getUsersList(req, res) {
    const url = 'http://jsonplaceholder.typicode.com/posts';
    try {
        const postsList = await axios.get(url);
        return res.json({ status: true, code: 200, message: 'List Found', userList: postsList.data})
    } catch (error) {
        return res.json({ status: false, code: 404, message: 'List Not Found', userList: []})
    }
}

module.exports = getUsersList;