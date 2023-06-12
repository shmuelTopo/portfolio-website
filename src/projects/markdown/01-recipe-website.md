---
title: 'Recipe website'
items: ['Typescript', 'Express', 'React', 'Postgres']
imgSrc: 'https://recipes.shmuel.dev/files/recipes.jpeg'
githubLink: 'https://github.com/shmuelTopo/recipe-app'
liveLink: 'https://recipes.shmuel.dev'
---

I built recipe website using **TypeScript**, **Express**, and **Postgres**. It offers smooth recipe browsing experience. i.e. I know the way I used Postgres was overkill, but I had so much fun building it so I went with it...

### Here are the website's key features:

1. Recipe search: Users can search for recipes by keyword. The server connects to an external recipe API to retrieve relevant recipes.
2. Caching: Fetched recipes are temporarily stored in PostgreSQL. This reduces the number of API calls and improves performance.
3. Recipe retrieval: The server directly retrieves specific details from the PostgreSQL database if they are still cached. If not, the server
   seamlessly makes another API request to obtain the necessary details.
