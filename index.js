const Discord = require('discord.js-selfbot-v11')
const client = new Discord.Client();
const request = require('request')
const token = 'Nzk5MDY1OTA0MzU2MjYxOTE5.YDzifQ.zkK1xc3leOon8_bkiUikLG8rJ6w'
const axios = require('axios')

client.on("ready", () => {
    console.log("Nitro Sniper Ready\n")
})

client.on('message', (message) => {
    if(message.content.includes('discord.gift/') || message.content.includes('discordapp.com/gifts/')){
        console.log(message.content)

        const url = message.content;

        const pathname = new URL(url).pathname;

        let code = pathname.split('/');

        console.log(`Nitro code: ${code[1]}\nFound in: ${message.guild}\n`)

        axios({
            method: 'POST',
            url: `https://discordapp.com/api/v6/entitlements/gift-codes/${code[1]}/redeem`,
            headers:
            {
                'Authorization': token,
                'content-type': 'application/json'
            }
        }).then(
            () => console.log(`Successfully redeemed Nitro.\nFound in ${message.guild.name}.`)

        ).catch(e => console.log(`Couldn't claim Nitro.\n${e}`))

        /*request.post({
            headers: headers,
            url:     'https://ptb.discordapp.com/api/v6/entitlements/gift-codes/' + code[1] + '/redeem'
        }, function(error, response, body){
            console.log(body)
            if(error){
                console.log(error)
            }
        })*/



            
    }
})

client.login(token);