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
        <div class="fixed-action-btn" style="bottom: 24px; right: 24px;">
          <a href="/assets/career/AntVillaDean_CV.pdf" target="Download CV" id="menu" class="btn btn-floating btn-large cyan tooltipped" data-position="top" data-delay="50" data-tooltip="Download CV"><i class="material-icons">file_download</i></a>
        </div>
    </div>
  </div>
  <!--   Container Section   -->
  <div class="container">
    <div class="section">
      <!--   Icon Section   -->
    </div>
  </div>


