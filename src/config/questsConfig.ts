import { CustomClient } from "../core/customClient.js";

export default {
    notification: {
        token: "--" ,// self accouont token (not bot)
        channel: "1486510522974212196",
        role: "1485729627006570658",
        dm: {
            enabled: true,
            dmRoles: ["1485729627006570658"], // Roles to receive DMs
        }

    },
    bypassLimit: ["1423422187372544081"], // Bypass quest limits
    durationQuests: [
        "WATCH_VIDEO",
        "PLAY_ON_DESKTOP",
        "STREAM_ON_DESKTOP",
        "PLAY_ACTIVITY",
        "WATCH_VIDEO_ON_MOBILE",
        "PLAY_ON_XBOX",
        "PLAY_ON_PLAYSTATION"
    ],

    image: {
        channelId: "1486510522974212196", // channel where bot will upload images
        guildId: "1482872506338644113", // server where bot will upload images
    },
    serverId: "1482872506338644113", // Server where the bot operates
    completedQuestsChannel: "1485729627006570658",
    voice: {
        channel: "1486510522974212196", // Voice channel for quests
        role: "1485729627006570658" // Role required for voice channel access
    },


    logStrings: [],
    childProcessCount: 1,
    questsPerChildProcess: 15,
    useProxy: true,
    proxyType: "http", // http, socks5, socks4
    buttons: [
        {
            url: "https://youtu.be/eJoa4obHhng", // Tutorial or guide
            emoji: (e:CustomClient) => e.getEmoji("youtube",false) ?? "▶️",
        }
    ],






    customRewardsImage: {
        "1298745361602449479": "https://i.ibb.co/rRNztwKq/reward.webp",
        "1287881739531976815": "https://i.ibb.co/vxTHNqsS/eff35518172b971fa47c521ca21c7576d3a245433a669a6765f63b744b7b733a.png"
    },
    customRewardsEmoji: {
        "1287881739531976815": "orbIcon",
        "1298745361602449479": "nitro_level_stone"
    },
    inviteUrl: "https://discord.gg/kZHHmhKE",
    joinMessage: `## انت مو داخل السيرفر
    - **عشان تستعمل البوت لازم تدخل السيرفر ب الحساب الي تبي تسوي فيه المهمة**
    - **ملاحظة البوت مجاني 100%**
    
    ## You are not in the server
    - **To use the bot, you need to join the server with the account you want to complete the task with.**
    - **Note: The bot is 100% free.**
    
    - ** https://discord.gg/39c2c3jVbN **`
}




