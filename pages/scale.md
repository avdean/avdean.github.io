---
layout: defaultmasonry
title: Scale
permalink: /projects/scale
---
  <div id="index-banner">
  	<div class="col s12" style="padding-bottom:1%;"></div>
    <div class="container">
        <div class="grid">
        <div class="grid-sizer"></div>
		{% for image in site.static_files %}
		    {% if image.path contains 'projects/scale' %}
              <div class="grid-item"  style="padding-left: 10px; padding-right: 10px;">
              <div class="card">
                <div class="card-image">
		       			 <img src="{{ site.baseurl }}{{ image.path }}" alt="image"  class="responsive-img" />
		          </div>
		        </div>
		    </div>
		    {% endif %}
		{% endfor %}
        </div>
      </div>
    </div>

 
