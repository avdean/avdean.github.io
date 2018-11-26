My portfolio site - AntVD.Space
---
Without getting into too much detail, I built this website to replace an old blogger website I once had, along with start showcasing certain projects. Since then it grew into a personal website that allows me to explore certain frameworks, and more recently Static-Site-Generators (SSG). The idea of hosting on GitHub simply came about due to being tired of the needless complications that wordpress and it's managerie of plugins. I wanted a simple way to host a couple of simple static pages.

Materialize CSS
---
The reason for picking Materialize CSS as the basic framework, aside from the clean Material Design aspects, is that the general syntax used tends to be clear and concise. Originally the website was built in pure HTML, CSS and basic Javascript (JQuery), and to that extent working with Materialize has been a pleasant experience. 
That being said, I do have my own personal Pros and Cons of the framework.

	**Pros**
	* Material Design's colour palette is just really nice
	* The animations and design elements are pleasant (I know this a general tenet of Material Design)
	* It works very similar to Bootstrap, so if you're used to 
	* It handles Responsive layouts nicely, with the Helpers standing as a great addition 
	* Documentation is well laid out and easy to follow
	* The implemention of Jquery is super easy

	**Cons**
	* It does have its fair share of bugs, usually found by tweaking too much
	* Diverging too far from Materialize CSS's main design aspects results in breaking something
	* Aside from their website which is indeed excellent, the documentation regarding Materialize CSS is sparse
	* I can see how the layout and general look and feel of Materialize (and in a sense Material Design) 
	  can be quite homogenising for web design.

Jekyll
---
Like most people that turn to SSG, the arduous task of constantly updating each individual grew too much, especially when the page count grew above a certain amount. Since Jekyll is natively supported on GitHub, I decided to migrate the site to Jekyll. All in all it hasn't been to difficult, mostly a case of changing the folder structure and using a more lateral way of thinking, there will likely be a deeper explanation on the blog regarding this. But since I've only been using this for a short-time, I don't think I'm elligible to give an opinion just yet.

For me the most difficult part was trying to figure out how exactly the blog part works, so I ended up forking Victorpre's implementation of material-jekyll: <https://github.com/victorpre/materialize-jekyll> to some degree.


Things to fix:
---

* ~~Domain - I'll be eventually buying a domain name, though I'm not sure I want to use my own name as the domain
* ~~Masonry.js and ScrollReveal.js - Though they're not really necessary at the moment, I'd like to have them instilled as part of the Photography and Blog parts (Especially)~~
* Tags - I'm still trying to figure out how tags in Jekyl can be utilised further over the standard index page, I really like Victorpre's use, though I think the best method would be through utilising Isotope.js.

Credits
---
Credit obviously goes to the guys at [Materialize CSS](https://github.com/Dogfalo/materialize), Google for making the [Material Design Philosophy](https://material.io/design/#introduction-goals) in the first place and VictorPre's own [material-jekyll](https://github.com/victorpre/materialize-jekyll), which has helped a lot in figuring out how Jekyll can work beyond the standard documentation.
