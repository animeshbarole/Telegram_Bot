
const {Configuration , OpenAIApi} =  require('openai');

const { Telegraf } = require('telegraf');


require('dotenv').config();
console.log(process.env);

const bot  = new Telegraf(process.env.BOT_TOKEN);


//AI Chat GPT Configration 


const methods = {};


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
methods.getAnswer = (req) => {
    return new Promise(async(resolve, reject) => {
       try{
        openai.createCompletion({
           

          });

       }catch(e){
          reject(e);
       }
    })
}



const binarySearchString = 
`
const binarySearch =  function search(arr,x){

    let low = 0;
    let high = arr.length -1;

    while(low<=high)
    {
        let mid = low + Math.floor((high - low)/2);

        if(arr[mid]==x)
        {
            return mid;
        }
        else if(arr[mid]>x)
        {
            high = mid-1;
        }
        else{
            low = mid +1;
        }
    }

    return undefined;
}
`;


try {
    bot.start((ctx) => ctx.reply('Welcome to Animesh_AlogBot'));
    bot.command('binarySearch',(ctx) => ctx.reply(binarySearchString));//BinarySearch
    
    bot.on('sticker', (ctx) => ctx.reply('💛'));

    bot.on('text', (ctx) => {
        console.log(ctx.update.message);
        if(ctx.update.message.text == 'I Love You') {
            ctx.reply('love you too broo');
        } else if (ctx.update.message.text=='Anshul'){
            ctx.reply('Bhai')
        }
        else{
            ctx.reply('i don\'t understand humans')
        }

    });
    



 

    bot.launch();
} catch  {
     console.log("Unexpected Commanad")
}
