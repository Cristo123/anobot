module.exports.run = async (bot, message, args, tools) => {

    let Embed = new Discord.RichEmbed()
    .setTitle(`🔏 | Server Status`)
    .setColor(message.guild.members.get(bot.user.id).displayHexColor)
    .setThumbnail(message.guild.iconURL)
		.addField('Members', `**${message.guild.memberCount}**`)
		.addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
    .setFooter(`Requested by : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
	message.channel.send(Embed);

}
module.exports.help = {
	name: "mstatus"
}
