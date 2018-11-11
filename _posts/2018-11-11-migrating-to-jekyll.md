---
layout: post
title: 'Migrating to Jekyll'
date: 2018-11-11
description: 'My experience moving my site to an SSG'
image: 'https://res.cloudinary.com/dmw0znxgj/image/upload/c_scale,w_1000/v1541954989/signs.jpg'
category: 'Web Design'
tags:
- SSG
- HTML Code
- Jekyll
categories:
twitter_text: ''
introduction: 'My experience moving my site to an SSG'
---
<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@austinchan?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Austin Chan"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Austin Chan</span></a>

I mentioned this in my previous post, but moving to an SSG was a long time coming. 
I had already been looking at ways to work with more dynamic technologies, however everywhere I read wrote about how overkill it was to learn something like React or Ruby considering it was for a simple site. I suppose that kind of made sense, in the same way, you wouldn't use a blowtorch to light candles.

Of course, as the site grew, the need for something dynamic became much more apparent. In the last few years, there's been a lot of chatter regarding Static Site Generators (SSGs). Basically, an SSG creates a webpage in parts and does it before the user sees it (There are much more technical blogs that explain this in greater detail), but the point is that it's supposed to be more secure, and easier to deal with. The downside is that you're left without a standard CMS option, minus writing in Markdown, though I've also read that this has been remedied in newer SSGs and hosting pages (Netlify and Gatsby comes to mind here).

Better yet, it turned out to be surprisingly easy to pick up Jekyll; though there were a number of hurdles in the beginning. 

1. Installing Jekyll
Unlike creating HTML from scratch, you can't simply open the HTML page when finished (because it's not actually constructed yet). You need Jekyll (and in a sense Ruby) in order to run on your system, to do the constructing to see you're finished page. I've read that it CAN be difficult installing Jekyll on Windows, but it was a breeze getting it working on Linux since it was a simple case of installing it via the command line.

2. The Command Line
If you're not comfortable navigating the command line, it can be a little daunting. Fortunately, there's not much call for it once you've installed Jekyll. The only thing you need to do is `cd` (change directory) to the folder holding your website, and type `Jekyll build` or `Jekyll serve` once there. ("build": build's the site in the \_site folder, "serve" build's the site and displays it on the URL: localhost:4000). Since it's direct, `Jekyll serve` does the job quite nicely and you can check your changes live.

3. Way of Thinking
You know how your CSS exists in a file, your javascript exists in another file and you reference it all in your HTML page. SSG's are pretty much an extension of this, dividing the entire HTML code into digestible snippets, depending on what you need. There are two main versions of this, \_Layouts and \_Includes. 
\_Layouts is where the default stuff lives, you would place code here that is unlikely to change at all, eg.  `<head>` elements, `<link rel="">` codes and your `script` codes.
\_Includes is where you put repetitive elements that you might not want to include on every single page, but will make your life easier `<header>, <footer>` elements come to mind a lot here.
The great thing is that there are no set rules on how this is done and you can code this part however you find easiest. The biggest plus is this; let's say you have 6 different pages and you've added a 7th, you only need to change the header and footer elements once (found in the \_Includes) folder in order For the change to be applied to your entire website.
It's a pretty nice deal all things considered.

4. YAML and Liquid
[YAML](http://yaml.org/) is the language that Jekyll uses in order to actually read to your files and fortunately it's a pretty easy language to understand, you pretty much define your points in a file called config.yml and that lives in your root folder. There is also Liquid, which is a templating language and that's how Jekyll calls in your HTML snippets, and even allows for certain conditionals so there's a dynamic element to it.
For a better explanation, definitely check out [Liquid's Official Documentation](https://shopify.github.io/liquid/basics/introduction/ "Liquid's Official Documentation")

Because of this dynamic nature, it also means that Jekyll handles blog posts with just as much ease, though initially trying to get it to work first-time took a lot of abstract thinking since you need to understand how `for loops` work which is very much in scripting territory. 

Since I'm still getting to grips with how Jekyll can work, I wouldn't feel comfortable writing a proper how-to on setting up a simple page, however, coupled with a basic framework system I can image it can be pretty easy building out a boilerplate page.
