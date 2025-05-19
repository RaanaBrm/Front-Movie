SETUP AND RUNNING
In the terminal, run: npm install
To start the development server: npm run dev
Recommended browser: Google Chrome (not Safari)
Login Credentials (for testing)
Email: raana.barimani@hyperisland.se
Password: 123

- change the css and use Tailwind

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

For Frontend :
Built with React, Vite, and Tailwind CSS
Semantic HTML elements like <main> and <section> used for screen reader compatibility
All interactive components (like buttons and links) are keyboard-navigable and have proper focus states
Accessible error messages and status updates (e.g. aria-live for form messages)
Meta title and meta description set via react-helmet for SEO
Clean and responsive design with dark/light mode support

For Backend :
For authentication, I use JWT tokens to securely verify each request and prevent unauthorized access. All user inputs are validated and sanitized to prevent XSS attacks and MongoDB injection vulnerabilities. I have used MongoDB as the database for efficient data storage and I didn't use SQL for data storage. For enhanced security, I use secure connection practices such as MongoDB Atlas for encryption and proper role-based access control.

To track user interactions and performance, I have integrated analytical tools to collect anonymized data. Sensitive data is never stored in the database without proper encryption, and I ensure that all database queries are parameterized to prevent injection attacks. Regular updates are performed to prevent vulnerabilities in MongoDB and other dependencies.
