const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message' , message => {
if(message.content === '^help') {
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
message.author.send(`
***__��� �� �����__***
**
????????????? {?����� �����?} ?????????????
? ^bc ? �������� � ����� �����
? ^Link ? ���� ������ �������
? ^clear ? ��� �����
? ^server ? ���� ������� �������
? ^marry ? ���� ������
? ^kf ? ���� ��
? ^mc ? ��� �����
? ^new ? ������ �����
????????????? {? By Ayman ALmonster ?} ?????????????
**
`);
}
})


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTEyMzc4MDg3Nzc0NzQ4Njk4.Ds4muw.AM59x0AofQvozWgFYUALy2FfD2Q');