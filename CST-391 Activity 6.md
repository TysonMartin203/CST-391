Tyson Martin  
COM-391  
Prof. Estey  
Activity 6  
04/13/2025

**Research Summary**

1. **Write a one-paragraph summary of the new features that have been added. Define new terminology that was used in the lesson.**

In this lesson, new features were added to enhance the React music application by integrating external data sources, routing, and component refactoring. The album data was moved from internal state to an external JSON file and later retrieved from a REST API server using the Axios library, which simplifies HTTP requests. The useEffect hook was introduced to handle side effects, such as fetching data after the initial render. Key concepts like callbacks and state management were expanded by enabling a search form to pass user input upward to filter albums dynamically. Additionally, routing was implemented using react-router-dom, allowing navigation between multiple pages such as Home, About, and Contact within the single-page app. Private routes were created using a PrivateRoute component to restrict access to certain pages unless the user is authenticated. New components such as AlbumList, SearchAlbum, NewAlbum, and OneAlbum were added to organize the application’s structure, demonstrating the importance of component hierarchy, props, and passing data between components in a scalable React project.