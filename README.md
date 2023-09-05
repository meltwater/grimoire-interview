# Weather App Code Evaluation

Welcome to the Weather App evaluation! This repository contains a weather application structured as a mono repo. Your challenge involves understanding the codebase, discussing architecture, deploying strategies, and proposing design solutions.

## Setup Instructions

1. Clone the repository.
2. Navigate to the root directory.
3. Follow the specific READMEs in the frontend and backend directories for individual setup instructions.

## Evaluation Process

Here's what's expected of you:

### 1. Codebase Review

After setting up, walk us through the application structure:

- Discuss your observations on the usage of Domain Driven Design (DDD) in the backend.
- Reflect on the choice of a mono repo for this project. How do you feel about the structuring? Any improvements?

### 2. Deployment & CI/CD

- Share your thoughts on the inclusion of terraform configurations within the mono repo.
- Discuss your preferred deployment strategies for such a project.
- How would you envision a CI/CD pipeline for this project?

### 3. System Design Challenge

**Enhancement Proposal**:

We're aiming to enhance our weather application by allowing users to set up weather alerts for their preferred locations. For instance, when a user's specified condition is met, like a temperature drop below freezing, the system should send out an alert. With a vast user base and varying alert preferences, how would you design a notification system that is robust, scalable, and cost-effective? Remember, timely alerts are essential, especially during sudden severe weather events.

Jot down or sketch your solution, considering scalability, robustness, cost-effectiveness, and the user experience.

### 4. Hands-on Coding Challenge

To gauge your coding prowess, we've set up a challenge related to our application:

- Enhance the backend endpoint to provide a 3-day forecast for a given location. This forecast should indicate daily maximum and minimum temperatures. You can mock this data, but the focus is on your coding approach, integration into our current setup, and adherence to best practices.

**Time Limit**: 45 minutes.

---

Remember, the focus is not just on getting the right answer but understanding your approach, problem-solving skills, and thought processes.

Good luck!
