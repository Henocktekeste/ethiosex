const Telegraf = require('telegraf')

const bot = new Telegraf('1153428329:AAHu7gKts-rCIqFcdSrcRSlsgYqw4VVYNao')

bot.command('start', (ctx) => {

    ctx.telegram.sendMessage(ctx.chat.id, '💋ለመባዳት ዝግጁ የሆኑትን እያዘጋጀን ነው 😋\n 💋የሚፈልጉትን አይነት በቶሎ ይምረጡ😋', {
    
        reply_markup: {
            inline_keyboard:[
                   [{text: '🍆❤️🍑አሁን የምትበዳ ለማዘጋጀት🍆❤️🍑', callback_data: 'hen1'}],
                    [{text: '🍆❤️🍑ለማታ የምትበዳ ለማዘጋጀት🍆❤️🍑', callback_data: 'hen2'}],
                   [{text: '🍆❤️🍑ለቅርብ ቀን ቀጠሮ ለመያዝ🍆❤️🍑', callback_data: 'hen3'}], 
                   [{text: '🍆❤️🍑ኦን ላየን_on-line ከልችቷ ጋር ለማውራት🍆❤️🍑', callback_data: 'hen4'}]
                ]
           }
    
    
    })
    
    })
    
    bot.action('hen1', (ctx) => {
        ctx.deleteMessage()
        //getdata()
        ctx.telegram.sendMessage(ctx.chat.id, '😛😛😛 አሁን ዝግጁ የሆኑ 👉👌💦', {
    
            reply_markup: {
                inline_keyboard:[
                    [{text: '🍆@👉👌 አግኝ 🍑🍑🍑', url: 'http://smsservice.s3.amazonaws.com/registration.html'}],
                       [{text: '🍆ወደ ዋናው ተመለስ🍆', callback_data: 'go-back'}]
                    ]
                        
               
            }
        
        })
        
    })
    
    bot.action('hen2', (ctx) => {
        ctx.deleteMessage()
        ctx.telegram.sendMessage(ctx.chat.id, '😛😛 ለማታ ዝግጁ የሆኑ 👉👌💦', {
    
            reply_markup: {
                inline_keyboard:[
                    [{text: '🍆@👉👌 አግኝ 🍑🍑🍑', url: 'http://smsservice.s3.amazonaws.com/registration.html'}],
                       [{text: '🍆ወደ ዋናው ተመለስ🍆', callback_data: 'go-back'}]
                    ]
                        
               
            }
        
        })
        
    })
    
    bot.action('hen3', (ctx) => {
        ctx.deleteMessage()
        ctx.telegram.sendMessage(ctx.chat.id, '😛😛 የቅርብ ቀን ቀጠሮ መያዝ የሚፈልጉ 👉👌💦', {
    
            reply_markup: {
                inline_keyboard:[
                    [{text: '🍆@👉👌 አግኝ 🍑🍑🍑', url: 'http://smsservice.s3.amazonaws.com/registration.html'}],
                       [{text: '🍆ወደ ዋናው ተመለስ🍆', callback_data: 'go-back'}]
                    ]
                        
               
            }
        
        })
        
    })
    
    bot.action('hen4', (ctx) => {
        ctx.deleteMessage()
        ctx.telegram.sendMessage(ctx.chat.id, ' 😛ቻት ማድረግ የሚፈልጉ 💦', {
    
            reply_markup: {
                inline_keyboard:[
                       [{text: '🍆@👉👌 አግኝ 🍑🍑🍑', url: 'http://smsservice.s3.amazonaws.com/registration.html'}], 
                       [{text: '🍆ወደ ዋናው ተመለስ🍆', callback_data: 'go-back'}]
                    ]
                        
               
            }
        
        })
        
    })
 
    bot.action('go-back', (ctx) => {
        ctx.deleteMessage()
    
    ctx.telegram.sendMessage(ctx.chat.id, '💋ለመባዳት ዝግጁ የሆኑትን እያዘጋጀን ነው 😋\n 💋የሚፈልጉትን አይነት በቶሎ ይምረጡ😋', {
    
        reply_markup: {
            inline_keyboard:[
                   [{text: '🍆❤️🍑አሁን የምትበዳ ለማዘጋጀት🍆❤️🍑', callback_data: 'hen1'}],
                    [{text: '🍆❤️🍑ለማታ የምትበዳ ለማዘጋጀት🍆❤️🍑', callback_data: 'hen2'}],
                   [{text: '🍆❤️🍑ለቅርብ ቀን ቀጠሮ ለመያዝ🍆❤️🍑', callback_data: 'hen3'}], 
                   [{text: '🍆❤️🍑ኦን ላየን_on-line ከልችቷ ጋር ለማውራት🍆❤️🍑', callback_data: 'hen4'}]
                ]
           }
    
    
    })
    
    })

bot.launch()