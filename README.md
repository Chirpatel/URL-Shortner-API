# URL-Shortner API
Using NodeJS, ExpressJS

For Shortening the URL:

Send Post request to: https://url-shortner-api.glitch.me/api/url/shorten

with body content (Type: JSON):

{
  "longUrl": "URL"
}

Response (Type: JSON): 
{

    "_id": "5ef6253d08c21237f5109b26",
    "longUrl": "URL",
    "shortUrl": "https://url-shortner-api.glitch.me/LH3mLCPQ",
    "urlCode": "LH3mLCPQ",
    "data": "1593189693849",
}
