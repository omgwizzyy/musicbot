module.exports = {
  TOKEN: "MTIyNTUyOTkzMDI2NDM1MDc5Mg.G45tIZ.2rmhpMbzXaVVp-dbyKF8NULfV6Z9_jQqKgkn2Q",
  ownerID: ["847114060776210432", ""],
  botInvite: "https://discord.com/oauth2/authorize?client_id=1225529930264350792",
  supportServer: "https://discord.gg/CypPZaU7S9",
  mongodbURL: "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  status: '!help | MusicBot',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "1225531289860571289",


  sponsor: {
    status: true,
    url: "https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

  }
}
