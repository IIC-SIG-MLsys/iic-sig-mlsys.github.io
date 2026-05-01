---
layout: default
title: "全部发布"
---

{% assign total = site.posts | size %}
<p class="text-muted mb-4" style="font-size:0.85rem;">共 {{ total }} 篇</p>

{% for post in site.posts %}
<div class="publication-item">
  <div class="pub-meta">
    <span class="pub-date">{{ post.date | date: "%Y年%-m月%-d日" }}</span>
    {% if post.categories contains "news" %}
    <span class="pub-tag">新闻</span>
    {% else %}
    <span class="pub-tag">文章</span>
    {% endif %}
  </div>
  <p class="mb-0"><a href="{{ post.url }}">{{ post.title }}</a></p>
</div>
{% endfor %}
