# MoviesDatabase API Documentation

## API Overview
MoviesDatabase is a comprehensive API providing information on over 9 million movies, TV shows, and episodes, as well as 11 million actors, crew, and cast members. It offers details such as YouTube trailer URLs, awards, biographies, ratings, and more. The data is updated regularly, with recent titles updated weekly and ratings/episodes updated daily.

## Version
The current version is not explicitly stated in the documentation, but the API is actively maintained and updated.

## Available Endpoints
- **/titles**: Returns an array of titles based on filters and sorting query parameters.
- **/x/titles-by-ids**: Returns titles for a provided array of IMDb IDs.
- **/titles/{id}**: Returns details for a specific title by IMDb ID.
- **/titles/{id}/ratings**: Returns rating and vote count for a title.
- **/titles/series/{id}**: Returns episodes for a series by IMDb ID.
- **/titles/seasons/{id}**: Returns the number of seasons for a series.
- **/titles/series/{id}/{season}**: Returns episodes for a specific season of a series.
- **/titles/episode/{id}**: Returns details for a specific episode.
- **/titles/x/upcoming**: Returns upcoming titles.
- **/titles/search/keyword/{keyword}**: Search titles by keyword.
- **/titles/search/title/{title}**: Search titles by title.
- **/titles/search/akas/{aka}**: Search titles by alternate names.
- **/actors**: Returns an array of actors based on filters.
- **/actors/{id}**: Returns details for a specific actor.
- **/title/utils/titleType**: Returns available title types.
- **/title/utils/genres**: Returns available genres.
- **/title/utils/lists**: Returns available lists for the 'list' query parameter.

## Request and Response Format
Requests are made via HTTP GET to the specified endpoints, with optional query parameters for filtering and sorting. Responses are JSON objects, typically containing a `results` key with the data array. Paginated endpoints include `page`, `next`, and `entries` keys.

**Example Request:**
```
GET /titles?limit=5&info=base_info
```
**Example Response:**
```json
{
  "results": [
    {
      "id": "tt0000270",
      "titleText": "Example Movie",
      "primaryImage": null,
      "titleType": "movie",
      "releaseDate": "2020-01-01",
      "genres": ["Drama"],
      "ratingsSummary": {"averageRating": 7.5, "numVotes": 1200}
      // ...other fields
    }
  ],
  "page": 1,
  "next": 2,
  "entries": 5
}
```

## Authentication
Authentication is required via RapidAPI. You must include your RapidAPI key in the request headers:
```
'X-RapidAPI-Key': YOUR_API_KEY
'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
```

## Error Handling
Common error responses include:
- **401 Unauthorized**: Missing or invalid API key.
- **404 Not Found**: Invalid endpoint or resource ID.
- **429 Too Many Requests**: Rate limit exceeded.
- **400 Bad Request**: Invalid query parameters.

Handle errors by checking the HTTP status code and the error message in the response body.

## Usage Limits and Best Practices
- The API enforces rate limits (see your RapidAPI plan for details).
- Use pagination (`limit` and `page` query parameters) to manage large result sets.
- Filter results using available query parameters to reduce unnecessary data transfer.
- Cache frequent requests to minimize API calls and stay within usage limits.
- Always check for updates in the API documentation for new features or changes.
