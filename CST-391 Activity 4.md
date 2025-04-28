Tyson Martin  
COM-391  
Prof. Estey  
Activity 4  
03/30/2025

**Research Question**

1. **Research how an Angular application maintains a logged in state. How does it communicate this state to the server?**

An Angular application maintains a logged-in state by storing authentication tokens, such as JSON Web Tokens (JWTs), in the browser’s localStorage or sessionStorage after a successful login. This token acts as proof that the user is authenticated. Whenever the Angular app sends a request to the server, it typically attaches this token in the HTTP Authorization header. Angular uses an HttpInterceptor to automatically include the token in all outgoing HTTP requests without requiring manual addition each time. On the server side, the server validates the token to ensure that the request is authorized before providing access to protected resources. localStorage allows tokens to persist across sessions until manually cleared, while sessionStorage clears them when the browser or tab closes, providing slightly more security. This approach ensures seamless and secure communication between the Angular frontend and the backend server while keeping the user authenticated across pages and refreshes without needing to log in repeatedly.