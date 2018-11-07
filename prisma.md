---
layout: default
title: Prisma
---
  <div id="index-banner">
    <div class="col s12" style="padding-bottom:1%;"></div>
    <div class="container">
       <div  id="masonry-grid" class="row card-container">
    {% for image in site.static_files %}
        {% if image.path contains 'projects/prisma' %}
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
