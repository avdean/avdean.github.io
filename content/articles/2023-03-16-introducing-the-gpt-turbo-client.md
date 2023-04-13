---
title: Introducing the GPT Turbo Client!
date: 2023-03-15T21:12:22.593Z
FeatureImage: https://res.cloudinary.com/dmw0znxgj/image/upload/v1678951638/AntvdUploads/CGPTurbo.jpg
wideImage: false
---


It's been a busy couple of weeks. I actually improved on my previous chat client, so you no longer need to clone the server, instead all you need to do is enter you're own API key and you can pretty much move from there. 

![](https://res.cloudinary.com/dmw0znxgj/image/upload/v1678951638/AntvdUploads/EnterAPI.jpg)

F﻿ull site is currently at <https://gpt-client.netlify.app/>

It also uses OpenAI's ChatCompletions call, which basically means it's using the models tailored more for chat, this includes the one currently used for ChatGPT (GPT-3.5-Turbo) but also should I get access to GPT-4.0, I'll add a toggle to allow you to pick between models.\
\
I﻿'m looking forward to trialing how GPT-4.0 works, as it's supposed to be more accurate and even more humanistic in its responses.\
\
O﻿ne extra thing that's cool about the ChatCompletions call is you now have the ability to set how the client should respond and give it a little context:

![](https://res.cloudinary.com/dmw0znxgj/image/upload/v1678951976/AntvdUploads/SystemMessage.jpg)

This helps remove an extra step if you already have in mind the kind of content you want to receive from GPT, where you would need to write it in your initial question to ChatGPT. Instead you can now use this is a reference point, should the chatbot veer off topic, and gently remind it what you originally want  ie "Remember your current System Message".

A﻿s you can see in the hero image above, the chatbot now has syntax highlighting (a modified version of dracula to allow colors that work both in light and dark mode), and also you can save your current session. \
\
There's still some things I would like to implement, but as it stands I'm pretty happy with this as a second React application.