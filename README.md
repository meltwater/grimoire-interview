# Weather App Code Evaluation

Welcome to the Weather App evaluation! This repository contains a weather application structured as a mono repo. Your challenge involves understanding the codebase, discussing architecture, deploying strategies, and proposing design solutions.

## Setup Instructions

1. Clone the repository.
2. Navigate to the root directory.
3. Follow the specific READMEs in the frontend and backend directories for individual setup instructions.
4. From the workspace the run the following commands

```bash
npm i
npm run bootstrap
```

## Evaluation Process

Here's what's expected of you:

### Hands-on Coding Challenge

To assess your skills in integration, problem-solving, and design, we've prepared a specific challenge related to our application. Here's a step-by-step guide:

#### Setup

1. **Backend Setup**:

   - Start by getting the GraphQL app running locally. This step is crucial as your frontend app will fetch its data from here.

2. **Stencil Library**:

   - Navigate to the `stencil-library` directory.
   - Install the necessary dependencies using `npm install`.
   - Remember to execute `npm run build` every time there's an update to the library. This ensures that the latest components are available for use.

3. **Vue Library**:

   - This library plays a pivotal role in integrating Stencil components into our Vue 3 application.
   - Navigate to the `vue-library` directory.
   - Install the necessary dependencies.

4. **Vue 3 App (wis-app)**:
   - Navigate to the `wis-app` directory.
   - Execute `npm install` to initialize the app dependencies.
   - Launch the app locally with `npm run dev`.

#### Challenge

Once you've set everything up, you'll be presented with an app comprising two distinct sections:

1. **By Location**:

   - This UI segment, located on the right side, enables users to choose a location from a dropdown and subsequently view the weather data pertinent to that location.

   **Task 1**:

   - Your first task is to refine the styles in the "By Location" segment. Aim for a visually compelling, intuitive layout that promises an outstanding user experience.

2. **WatchList**:

   - This section initially displays an empty interface.

   **Task 2**:

   - Integrate the given GraphQL mutation to allow users to append multiple locations to their watchlist.

     ```graphql
     mutation Mutation($locations: [String!]!) {
       addToWatchList(locations: $locations)
     }
     ```

   - Once locations have been added, devise a method to showcase the weather for each location using the Weather Card component. You can opt for either a carousel or an infinite scroll view.

#### Deliverables

1. A revamped "By Location" segment boasting enhanced styles and user experience.
2. A fully functional "WatchList" segment where users can effortlessly add locations and browse weather details in an engaging and user-friendly design.

**Time Limit**: 90 minutes.

---

Please remember that alongside functional solutions, we're eager to grasp your thought processes, methodologies, and approach. We greatly value coding best practices, innovation, and problem-solving prowess. We wish you the best of luck with the challenge and hope you enjoy it!
