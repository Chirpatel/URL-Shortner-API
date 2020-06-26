# URL-Shortner API
Using NodeJS, ExpressJS

For Shortening the URL:

Send Post request to: http://13.232.182.98:3100/api/url/shorten

with body content (Type: JSON):

{
  "longUrl": "URL"
}

Response (Type: JSON): 
{

    "_id": "5ef6253d08c21237f5109b26",
    "longUrl": "URL",
    "shortUrl": "http://13.232.182.98:3100/LH3mLCPQ",
    "urlCode": "LH3mLCPQ",
    "data": "1593189693849",
}
