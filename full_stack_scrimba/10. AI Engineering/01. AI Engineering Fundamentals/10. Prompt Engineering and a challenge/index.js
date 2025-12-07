import OpenAI from 'openai'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

const messages = [
    {
        role: "system",
        content: "You are a helpful teacher."
    },
    {
        role: "user",
        content: "Explain Quantum Computing to me like I am a 10-year-old. Keep it to one sentence."
    }
]

const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: messages
})

console.log(response.choices[0].message.content)
