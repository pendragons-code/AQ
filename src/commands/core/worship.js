const { EmbedBuilder } = require("discord.js")
module.exports = {
	name: "worship",
	alias: ["pray"],
	desc: "PRAY TO GOD!!!",
	utilisation: "worship",
	category: "core",
	async execute(Jasbot, messageCreate, args){
		const embed = new EmbedBuilder()
		embed.setFooter({ text: "god" })
		const messages = ["https://cdn.discordapp.com/attachments/1043853620573110274/1044002439617065021/ASHER_QUINN_HERE.png", "https://media.discordapp.net/attachments/1032723970597851219/1043997709255852173/myidol.gif"]
		const randomMessage = messages[Math.floor(Math.random() * messages.length)];
		embed.setImage(randomMessage)
		embed.setTimestamp()
		embed.setTitle("GOD!!!!")
		embed.setDescription(`${messageCreate.author} prayed to god!`)
		messageCreate.channel.send({ embeds: [embed] })
	}
}
