const moment = require("moment")

function formateMessage(username, text){
    return{
        username,
        text,
        time:moment().format('DD MM YYYY h:mm a')
    }
}

module.exports  = formateMessage