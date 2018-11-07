---
layout: default
title: Scale
---
  <div id="index-banner">
    <div class="col s12" style="padding-bottom:1%;"></div>
    <div id="masonry-grid" class="container">
       <div class="row card-container">
    {% for image in site.static_files %}
        {% if image.path contains 'projects/skies' %}
              <div id="grid-item" class="card">
                <div class="card-image">
                 <img src="{{ site.baseurl }}{{ image.path }}" alt="image"  class="responsive-img" />
              </div>
            </div>
        {% endif %}
    {% endfor %}
        </div>
      </div>
    </div>

 
