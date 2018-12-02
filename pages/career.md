---
layout: defaultmasonry
title: Career
permalink: /career
---
  <div id="index-banner">
    <div class="container">
      <div class="grid">
          <!-- Content -->
          <div class="grid-sizer"></div>
                  {% for jobs in site.jobs %}
                <div class="grid-item" style="padding-left: 10px; padding-right: 10px; width: 100%;">
                      <div class="card">
                          <div class="card-content" style="padding-left: 10%;">
                              <h2 class="coolGradient">{{ jobs.title }}</h2>
                              <h3 class="coolGradient">{{ jobs.years }}</h3>
                              <h6  class="coolGradient">{{ jobs.company }}</h6>
                              <em>{{ jobs.address }}</em>
                          </div>
                         <div class="card-content" style="padding-left: 10%; padding-right: 5%; padding-bottom: 5%;">
                           {{ jobs.content }}
                        </div>
                      </div>
                </div>
               {% endfor  %}
        </div>
        </div>
      </div>


