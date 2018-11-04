---
layout: default
title: Scale
---
  <div id="index-banner">
    <div class="col s12" style="padding-bottom:1%;"></div>
    <div class="container masonry-grid">
       <div class="row card-container grid-item">
    {% for image in site.static_files %}
        {% if image.path contains 'projects/skies' %}
              <div class="card">
                <div class="card-image">
                 <img src="{{ site.baseurl }}{{ image.path }}" alt="image"  class="responsive-img" />
              </div>
            </div>
        {% endif %}
    {% endfor %}
        </div>
      </div>
    </div>

 