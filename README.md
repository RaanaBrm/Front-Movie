SETUP AND RUNNING
In the terminal, run: npm install
To start the development server: npm run dev
Recommended browser: Google Chrome (not Safari)
Login Credentials (for testing)
Email: raana.barimani@hyperisland.se
Password: 123

# Frontend

## Technologies
- React - A JavaScript library for building user interfaces
- Vite - Next generation frontend tooling
- Tailwind CSS - A utility-first CSS framework

## Features
- Modern and responsive user interface
- Dark/light mode support
- User authentication system
- Interactive components with smooth transitions

## Accessibility
- Semantic HTML5 elements for better structure
- ARIA attributes for enhanced screen reader compatibility
- Keyboard navigation support
- Focus management for interactive elements
- Accessible form validations and error messages

## Performance
- Fast page loads with Vite's development server
- Optimized build process
- Efficient component rendering
- Code splitting for better load times

## SEO
- Meta tags management using react-helmet
- Semantic markup for better search engine visibility
- Proper heading hierarchy

## Development Tools
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) - Uses Babel for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) - Uses SWC for Fast Refresh

- change the css and use Tailwind

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



#For Backend :

For authentication, I use JWT tokens to securely verify each request and prevent unauthorized access. All user inputs are validated and sanitized to prevent XSS attacks and MongoDB injection vulnerabilities. I have used MongoDB as the database for efficient data storage and I didn't use SQL for data storage For enhanced security, I use secure connection practices such as MongoDB Atlas for encryption and proper role-based access control.

To track user interactions and performance, I have integrated analytical tools to collect anonymized data. Sensitive data is never stored in the database without proper encryption, and I ensure that all database queries are parameterized to prevent injection attacks. Regular updates are performed to prevent vulnerabilities in MongoDB and other dependencies.
