const { ActivityType } = require("discord.js")
module.exports = async (Jasbot) =>{
	console.log("Yes")
	Jasbot.webserver
	Jasbot.user.setPresence({
		activities: [{ name: `I’m Asher Quinn…`, type: ActivityType.Playing }],
		status: 'idle',
	});
}
