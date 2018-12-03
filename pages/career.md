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
                              <h2 class="coolGradient hide-on-small-only">{{ jobs.title }}</h2>
                              <h4 class="coolGradient hide-on-med-and-up">{{ jobs.title }}</h4>
                              <h4 class="coolGradient">{{ jobs.years }}</h4>
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


