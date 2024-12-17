const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
  name: "vsf", 
  description: "Mande alguem se fuder que voce n goste.", 
  options: [
    {
      name: "user", 
      description: "O usuário que você quer mencionar.",
      type: ApplicationCommandOptionType.User, 
      required: true, 
    },
  ],
  run: async (client, interaction) => {
    
    const user = interaction.options.getUser("user");

   
    await interaction.reply({
      content: `Vai se foder ${user}! 👋`,
    });
  },
};
