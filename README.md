# Indie News API 🎮

This repository is a project focused on studying NestJS and Prisma ORM by building an Indie News API. The API aims to provide a platform for users to create and discover news articles related to developers and genres of indie games.

## Features

- User registration and login ❌🔐
- User authentication and authorization ❌🔑
- CRUD operations for news articles ✅📝
- Filtering and sorting articles based on various criteria ❌🔄🔍
- Commenting system for articles ❌💬🗨️
- Upvoting and downvoting articles and comments ❌👍👎
- Pagination for listing articles ❌📄➡️
- Error handling and validation ✅❗

## Technologies Used

- NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
- Prisma ORM: A modern database toolkit for TypeScript and Node.js that enables seamless and type-safe database access.
- MySQL: An open-source relational database management system used as the persistent storage for the application.
- Docker: Used for containerization and easier deployment of the application.

## Getting Started

To get started with this project, follow the steps below:

1. Clone the repository:

```bash
git clone https://github.com/zec4o/indie_news_api.git
```

2. Install dependencies:

```bash
cd indie_news_api
npm install
```

3. Start the MySQL database using Docker:

   - Make sure you have Docker installed on your machine.
   - Open a terminal and navigate to the project directory.
   - Run the following command to start a Docker container with a MySQL database:

     ```bash
     npm run db:up
     ```

     This command uses the defined Docker Compose configuration in the `docker-compose.yml` file to start the MySQL database container.

4. Set up the database:

   - Create a new database for the project. The necessary tables will be created automatically when running the migrations in the next step.

5. Configure the environment variables:

   - Rename the `.env.example` file to `.env`.
   - Open the `.env` file and update the values according to your local environment and database configuration.

6. Run database migrations:

```bash
npx prisma migrate dev
```

7. Start the development server:

```bash
npm run start:dev
```

8. The API should now be running locally at `http://localhost:3000`.


## Authentication and Registration

Auth routes are not configured yet so, if you and to add authentication and registration functionality to the API, you can follow these steps:

1. Install the necessary dependencies:

```bash
npm install @nestjs/jwt passport passport-jwt bcrypt
```

2. Create a new module and controller for handling user registration:

   - Implement the logic to create a new user account and store it in the database.
   - Use `bcrypt` to hash the user's password before storing it.
   - Return the newly created user object or a success message as the API response.

3. Create a separate module and controller for handling user authentication:

   - Implement the logic to verify user credentials (e.g., email and password).
   - Use `bcrypt` to compare the provided password with the stored hashed password.
   - If the credentials are valid, generate a JWT (JSON Web Token) using `@nestjs/jwt`.
   - Return the generated token as the API response.

4. Protect the appropriate routes or controllers by applying an authentication guard:

   - Use `passport-jwt` to create a JWT strategy for authenticating incoming requests.
   - Apply the created JWT strategy to the desired routes or controllers to enforce authentication.

For detailed implementation steps and code examples, you can refer to the NestJS documentation and explore tutorials that cover user authentication and registration using NestJS and related libraries.

## Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for personal or commercial purposes.
