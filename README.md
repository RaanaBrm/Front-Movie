# React + Vite

-in termenal write: npm install
-for the running the project write : npm run dev

- change the css and use Tailwind

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

For Frontend :
To ensure accessibility, I used semantic HTML elements like <main> and <section> for screen readers. Images have descriptive alt attributes, and interactive components are keyboard-navigable. For SEO, I added essential meta tags like title and description. Google Analytics is integrated to track user interactions and performance, while cookies are used to store user preferences. Users are notified and consent is required for cookie usage.

For Backend :
For authentication, I use JWT tokens to securely verify each request and prevent unauthorized access. All user inputs are validated and sanitized to prevent XSS attacks and MongoDB injection vulnerabilities. I have used MongoDB as the database for efficient data storage and I didn't use SQL for data storage. For enhanced security, I use secure connection practices such as MongoDB Atlas for encryption and proper role-based access control.

To track user interactions and performance, I have integrated analytical tools to collect anonymized data. Sensitive data is never stored in the database without proper encryption, and I ensure that all database queries are parameterized to prevent injection attacks. Regular updates are performed to prevent vulnerabilities in MongoDB and other dependencies.
