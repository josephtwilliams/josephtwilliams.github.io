---
layout: post
title:  "AussieQuant"
date:   2023-08-20 15:29:00 +0200
---

# A Personal Exploration into Data Science and Web Development

## Introduction

AussieQuant.com began as a personal exploration into the world of data science and web development. What started as a curiosity-driven project soon evolved into a valuable resource for retail investors in the Australian stock market, offering access to alternative datasets. In this post, I'll delve into the technologies that made it possible, the challenges faced, and why I've decided to close this chapter for now.

![AussieQuant Desktop Home](/assets/images/aussiequant-desktophome.png)

## The Tech Stack

The technology behind AussieQuant was both a learning journey and a functional necessity. Here's the tech stack that powered the project:

- **Frontend:** Handlebars
- **Backend:** Express, Node.js
- **Database:** PostgreSQL (pgAdmin4)
- **Hosting/Cloud:** AWS Lightsail, AWS File Stores (S3)
- **Automation:** GitHub Actions for daily data updates through Python scripts
- **Visualization:** Chart.js, d3.js for charts
- **Server Management:** Nginx

This stack allowed for a dynamic and responsive website that could handle daily updates and present complex data in an understandable format.

## The Challenges

Building AussieQuant presented a series of intricate challenges that shaped the entire project:

1. **Database Schema Decisions:** Early choices in the database schema had a domino effect on later development, influencing structure and functionality.
2. **Frontend Development with Handlebars:** Handlebars, while familiar from previous projects, proved cumbersome for adding new features and limited the project's flexibility.
3. **Collecting Datasets:** The periodic checking and backfilling of data, such as the ASX short interest, required constant vigilance and manual intervention to ensure my daily scripts were correctly updating my database.
4. **Converting PDFs from the Register of Members' Interest:** The complex process of converting around 150 PDFs involved OCR, text splitting, parsing with gpt-3.5 api, and matching company names.

![AussieQuant Short Interest](/assets/images/aussiequant-shortinterest.png)

### The Rewards

Despite the challenges, overcoming them led to rewarding insights and growth:

1. **Considering New Frontend Approaches:** The difficulties with Handlebars sparked consideration of a rewrite using a more flexible framework like React, opening new possibilities for development.
2. **Beautiful Data Visualizations:** The hard work in collecting datasets paid off with stunning time series and visualisations like the network graph, revealing clear areas of market interest.
3. **Unique Insights from PDF Conversion:** The complex process of handling PDFs led to great insights like the current state of LLM capabilities especially in extracting information from large, unstructured text.

The challenges and rewards of building AussieQuant.com were interwoven, each obstacle leading to new insights and skills. The experience has shaped not only the project but also my approach to problem-solving and development, leaving me better prepared for future endeavors.

![AussieQuant Network Graph](/assets/images/aussiequant-networkgraph.png)

## Closing This Chapter

The decision to close AussieQuant.com wasn't made lightly. While it has been an incredibly rewarding experience, the limitations of the current tech stack, particularly the frontend framework with Handlebars, have made it increasingly difficult to expand and innovate. The challenges encountered have been valuable lessons, but I realized that continuing on this path might hold me back from exploring new horizons and technologies.

## What's Next?

This is not the end, but rather a new beginning. I am now going to focus on finishing my maths online courses and looking into more cutting-edge technology applications like Language Models (LLMs). My goal is to develop something more innovative while keeping the Australian consumer in mind. The lessons learned from building AussieQuant have provided invaluable insights and skills that I will carry forward into future projects. Whether it's exploring frameworks like React, diving deeper into data science, or undertaking an entirely new venture, the possibilities are endless.

## Conclusion

AussieQuant.com was more than just a website; it was a playground for experimentation, learning, and growth. It served its purpose, providing valuable data to the people and challenging me in ways I hadn't anticipated. As I close this chapter, I look forward to the exciting opportunities that lie ahead, armed with the knowledge and experience gained from this unique journey. The path forward is filled with promise, and I'm eager to embrace the next challenge, always keeping the needs and interests of the Australian community at the forefront of my endeavors.
