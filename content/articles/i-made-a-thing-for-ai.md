+++
FeatureImage = "https://res.cloudinary.com/dmw0znxgj/image/upload/v1677754933/AntvdUploads/ClientWelcome_dsro5r.jpg"
date = 2023-03-01T20:00:00Z
subTitle = "Introducing my frontend client for OpenAI's text models"
title = "I made a thing for AI!"
wideImage = false

+++
So we've all heard of ChatGPT at this point, but if you're tired of the rate limiting and the services' downtime. If so, you may want to check out [OpenAI](https://platform.openai.com/docs/models "Open AI Models")'s other offerings including **text-davinci-003** model and the like. It's with this in mind that I built out a frontend client to interface with.

### Why do I need a client?

OpenAI does actually have their own **Playground** on their site, which lets you tinker with their APIs but it does leave a lot to be desired UX/UI wise.

Of course, the [OpenAI API key is a paid service](https://openai.com/pricing "OpenAI Pricing"), but it is much cheaper than going with ChatGPT's $20/month subscription model as you pay by the token (and you can even cap how much you're willing to spend).

![](https://res.cloudinary.com/dmw0znxgj/image/upload/v1677754321/AntvdUploads/Billing_stymrs.jpg)

### Davinci vs ChatGPT

Now, the upside to text-davinci-003 is it's actually more accurate and correct in regards to the data it shares in comparison to ChatGPT. However, I should note that it's also more socially awkward than chatGPT, and doesn't have the same flair as ChatGPT. That's because text-davinci-003 wasn't trained specifically for chat, likewise with Cushman and code responses.

But is also means it less inhibited with its answers, as there is no moderation API attached. This means that you can get more unconventional or unexpected responses, which can be both amusing and informative.

![](https://res.cloudinary.com/dmw0znxgj/image/upload/v1677754761/AntvdUploads/Example_liwcxy.jpg)

In addition to text-davinci-003, my frontend client also allows you to access other text models via a dropdown menu. For example, if you're working on a coding project, you may want to use code-cushman to generate code snippets or debug your code. However, I should note that the format for these models is pretty much text-only, and at the moment doesn't highlight code in a call syntax way that ChatGPT offers.

### Setting the client up

To get started with the client, you'll need to do 2 things:  
\- Sign up and grab your own OpenAI API key from OpenAI.  
\- Sign up to Glitch.com and remix your own personal OpenAI server using [this server](dit/#!/davinci-server?path=server.js%3A1%3A0 "Davinci Server"), and place your API key in the server's ENV section.  (You can also edit the temperature and token allowance here too)  
![](https://res.cloudinary.com/dmw0znxgj/image/upload/v1677755062/AntvdUploads/Glitch_nnovrq.jpg)

Start the client:  
[https://cgpt2-5.netlify.app/](https://cgpt2-5.netlify.app/ "Davinci Client 2.0") and enter your Glitch server URL which can be found in Glitch like so:  
![](https://res.cloudinary.com/dmw0znxgj/image/upload/v1677755414/AntvdUploads/ServerURL_ogvt6e.jpg)

### A few caveats

One thing to keep in mind is that the frontend client currently only saves your single conversation with the AI. While I plan to introduce the ability to save multiple conversations in the future, I'm happy with how it stands right now. That said, if you have any suggestions or feedback on how to improve the client, I'd be more than happy to hear from you.

Finally, I'd like to invite anyone who's interested to contribute to the project on GitHub. Whether you want to add new features, fix bugs, or just provide feedback, I'm open to pull requests and other contributions. Together, we can make this frontend client even better and more useful for anyone who wants a powerful text model at their fingertips.