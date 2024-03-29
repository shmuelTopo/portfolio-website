I built a recipe website using **TypeScript**, **Express**, and **Postgres**. It offers a smooth and fun recipe browsing experience. 

## Here are the website's key features:

1. Recipe search: Users can search for recipes by keyword. The server connects to an external recipe API to retrieve relevant recipes.
2. Caching: Fetched recipes are temporarily stored in PostgreSQL for 1 hour. This reduces the number of API calls and improves performance.
3. Recipe retrieval: The server directly retrieves specific details from the PostgreSQL database if they are still cached. If not, Express
  seamlessly makes another API request to obtain the necessary details.
