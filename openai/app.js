const { Configuration,OpenAIApi } = require('openai');

// console.log(process.env.OPENAI_API_KEY)
const config = new Configuration({
    apiKey: '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'
})

const openai = new OpenAIApi(config)
openai.createCompletion({
    model:'text-davinci-003',
    prompt: '帮我写一个小作文 关于昨天今天明天',
    temperature: 0,
    max_tokens: 7
}).then(res=> {
    console.log(res.data)
})