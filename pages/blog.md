---
layout: defaultIsotope
title: Blog
permalink: /blog
comments: true
# other options
---
  <div id="index-banner">
  <div class="section no-pad-bot">
    <div class="container">
      <div class="row">
        <div class="filter-button-group center" style="margin-top:-20px;">
          <h3>Contents</h3>
          <div class="waves-effect waves-light hoverable tagButton chip" data-filter="*">show all</div>
          {% comment %}
          =======================
          The following part extracts all the tags from your posts and sort tags, so that you do not need to manually collect your tags to a place.
          =======================
          {% endcomment %}
          {% assign rawtags = "" %}
          {% for post in site.posts %}
          	{% assign ttags = post.tags | join:'|' | append:'|' %}
          	{% assign rawtags = rawtags | append:ttags %}
          {% endfor %}
          {% assign rawtags = rawtags | split:'|' | sort %}

          {% comment %}
          =======================
          The following part removes dulpicated tags and invalid tags like blank tag.
          =======================
          {% endcomment %}
          {% assign tags = "" %}
          {% for tag in rawtags %}
          	{% if tag != "" %}
          		{% if tags == "" %}
          			{% assign tags = tag | split:'|' %}
          		{% endif %}
          		{% unless tags contains tag %}
          			{% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
          		{% endunless %}
          	{% endif %}
          {% endfor %}

              {% for tag in tags %}
                          <div class="waves-effect waves-light hoverable tagButton chip" data-filter=".{{ tag | slugify }}">{{ tag | slugify }}</div>
              {% endfor  %}
        </div>
      </div>
      <div class="row grid">
        <div class="button-group filter-button-group">
        <div class="grid-sizer"></div>
        {% for post in site.posts %}
          <div class="card-wrapper grid-item {% for tag in post.tags  %} {{ tag | slugify }} {% endfor %}" style="padding-left: 10px; padding-right: 10px;">
            <div class="card hoverable">
              {% if post.image  %}
                <div class="card-image">
                  <img src="{{ post.image }}">
                </div>
                <div class="btn-menu" style="padding:0px">
                  <div class="fixed-action-btn horizontal click-to-toggle" style="position:relative; float:right; bottom:30px; right:10px; z-index: 1">
                    <a class="btn-floating btn-large hoverable cyan darken-2 waves-effect waves-light">
                      <i class="large material-icons btn-icon">share</i>
                    </a>
                    <ul>
                      <li>
                      <a href="https://www.facebook.com/sharer/sharer.php?u={{ site.url }}{{ post.url }}" class="btn-floating" data-network="facebook" onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;" title="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
                    </li>
                      <li><a href="https://twitter.com/intent/tweet?url=https://antvd.space{{ post.url }}&text={{ post.description }}&hashtags={% for tag in post.tags %}{{tag}},{% endfor %}" class="btn-floating twitter-color" data-network="twitter" onclick="window.open(this.href, 'twitter-share','width=580,height=296');return false;" title="Tweet">
                        <i class="fab fa-twitter"></i>
                      </a></li>
                    </ul>
                  </div>
                </div>
              {% else  %}
              {% endif %}
              <div class="card-content">
                <span class="grey-text text-lighten-1">{% include date.html date=post.date %}</span>
                <a class="post-link" href="{{ post.url | prepend: site.baseurl }}"><span class="flow-text card-title coolGradient"><b>{{ post.title }}</b></span></a>
                <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
                  <p class="post-description grey-text darken-4">{{ post.description }}</p>
                </a>
                <br>
                <div class="tags">
                  {% for tag in post.tags  %}
                  <div class="chip tagButton"><b>{{ tag }}</b></div>
                  {% endfor  %}
                </div>
              </div>
              <div class="card-action">
                <div class="left-align">
                  <a href="{{ post.url | prepend: site.baseurl }}" style="color:#007991;">Read More</a>
                </div>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
