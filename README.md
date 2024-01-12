# React Native Challenge: Building a Cross- Platform Responsive App with Public API Integration
In this example you'll find an already setted up cross-platform mobile and web application using React Native and Expo. The application will showcase key React Native concepts, responsiveness, and integration with a public API.

## Setup
- Install [Expo](https://docs.expo.dev/get-started/installation/), [Node v18](https://nodejs.org/en/download/) and [Direnv](https://direnv.net/).
- Clone this repository
- Create a copy of [.envrc.template](./.envrc.template) into `.envrc`
- Verify that you hooked [direnv into your shell](https://direnv.net/docs/hook.html)
- Run:
  ```
  npm install
  ```
- Run:
  ```
  direnv allow
  ```
- Run:
  ```
  npm start
  ```
## Useful tools
- App Expo Go in iOS or Android to see the results.

## Technical Aspects
1. **API Integration:**
- Use fetch or axios to retrieve product data from the public API.
2. **Navigation:**
- Implement navigation using React Navigation.
3. **State Management:**
- Use Context API or Redux for managing cart state.
4. **Styling and Responsiveness:**
- Use StyleSheet for styling.
- Implement responsive design for web compatibility.
5. **Hooks:**
- Use React hooks for lifecycle events and state management.
6. **Code Organization:**
- Structure the project clearly with components, screens, and state management.
7. **Error Handling and Validation:**
- Basic error handling for API calls and input validations.

### Bonus Challenges
1. **Local Storage:** Persist cart items using local storage.
2. **Custom Hooks:** Create custom hooks for common functionalities.
3. **Testing:** Write unit tests for components using Jest and React Native Testing Library.