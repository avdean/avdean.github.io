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
                          <div class="card-content show-on-large" style="padding-left: 10%;">
                            <h5 class="coolGradient">Tasks</h5>
                            {% for task in jobs.tasks %}
                            <div class="tagButton chip" data-filter=".{{ task }}">{{ task }}</div>
                            {% endfor  %}
                            <h5 class="coolGradient">Tools Used</h5>
                            {% for tool in jobs.tools %}
                            <div class="tagButton chip" data-filter=".{{ tool }}">{{ tool }}</div>
                            {% endfor  %}
                          </div>
                         <div class="card-content hide-on-med-and-down" style="padding-left: 10%; padding-bottom: 5%;">
                            <button data-target="modal{{ jobs.descriptionCall }}" class="modal-trigger waves-effect waves-light btn-large tagButton highlight btn-flat">READ DESCRIPTION</button>
                            <div id="modal{{ jobs.descriptionCall }}" class="modal">
                              <div class="modal-content">
                               {{ jobs.content }}
                             </div>
                           </div>
                        </div>
                      </div>
                </div>
               {% endfor  %}
        </div>
        </div>
      </div>
