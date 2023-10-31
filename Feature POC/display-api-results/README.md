# Display REST API results with Fetch API

POC for retrieving resources from a REST API with [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) instead of AJAX.

## Comparison Table

*source: [Tech Altum Tutorial - Fetch API](https://tutorial.techaltum.com/fetch-api.html)*

|     Properties     |     Fetch     |          Ajax ( xhr)           |
|:------------------:|:-------------:|:------------------------------:|
|    ECMA Version    | ES6           | ES5                            |
|    Architecture    | Promise based | Event Based                    |
|     Complexity     | Easy          | Complex                        |
|       Syntax       | Simple        | Verbose                        |
| Request / Response | Supports      | Supports but complex structure |
|       Cookies      | send cookies  | Cookie less                    |

## Main Advantages

- Fetch API is a newer implementation and much more concise way to call backend services.
- [Fetch is much faster than AJAX](https://stackoverflow.com/questions/70882625/fetch-vs-ajax-vs-xmlhttprequest-why-is-fetch-so-much-more-incredibly-fast).