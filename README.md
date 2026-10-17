# AI-Powered Discussion Forum 

A full-stack web application that combines a technical discussion forum with an AI-powered knowledge base. Users can participate in question-and-answer discussions, discover related questions, and interact with uploaded documents using semantic search and Retrieval-Augmented Generation (RAG).

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Live Demo](#live-demo)
- [GitHub Repository](#github-repository)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## About the Project

The AI-Powered Discussion Forum is designed to help users share knowledge, ask technical questions, and find useful answers in one place.

In addition to the discussion forum, the application provides an AI-powered knowledge base where users can upload PDF and TXT documents, search their content by meaning, and ask questions based on information retrieved from those documents.

The project brings together full-stack web development, user authentication, database management, AI integration, and semantic document retrieval.

## Features

### Discussion Forum

- **User Authentication:** Register, log in, and access protected features.
- **Question and Answer Discussions:** Create questions and participate in technical discussions.
- **Question Discovery:** Browse and search for relevant questions.
- **Similar Question Recommendations:** Discover related discussions and reduce duplicate questions.
- **AI Draft Coach:** Get AI-assisted guidance when preparing question drafts.
- **Answer Fit Analysis:** Evaluate how well a proposed answer addresses a question.

### AI-Powered Knowledge Base (RAG)

- **Document Upload:** Upload supported PDF and TXT documents to a personal knowledge library.
- **Document Reader:** Open and read uploaded documents within the application.
- **Document Management:** View and delete uploaded documents.
- **Semantic Search:** Find relevant document content based on meaning rather than exact keyword matches alone.
- **AI Ask:** Ask questions and receive AI-generated responses based on retrieved document content.
- **AI Chatbot:** Interact with an AI assistant to explore document information.
- **Cross-Document Search and Chat:** Search and ask questions across the available document library.
- **Source-Aware Responses:** Display document sources alongside AI responses when supported.
- **Chat Copy:** Copy AI-generated responses to the clipboard for convenient reuse.
- **Chat Export:** Export supported AI chat responses or conversations for future reference.
- **Authenticated Document Access:** Protect document-related features through authenticated API endpoints.

### User Interface

- Responsive layout for different screen sizes.
- Integrated discussion forum and document knowledge tools.
- Interactive document reading and AI chat experiences.
- Markdown rendering for readable AI-generated responses.
- User-friendly document library and chat interactions.

## Technology Stack

### Frontend

- React
- JavaScript
- HTML5 and CSS3
- Vite
- React Router
- React Markdown
- Bootstrap and related UI libraries

### Backend

- Node.js
- Express.js
- REST APIs
- Authentication middleware

### Database and AI

- MySQL
- Google Gemini API
- Text embeddings
- Vector similarity search
- Retrieval-Augmented Generation (RAG)

### Document Processing

- PDF and TXT document handling
- Text extraction and chunking
- Semantic retrieval
- Context-based AI responses

### Development Tools

- Git
- GitHub
- npm

## Project Structure

The repository contains separate frontend and backend applications. The following is a representative structure; actual folders may vary.

```text
ai-powered-discussion-forum/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
└── README.md
```

## Getting Started

### Prerequisites

Before running the project, make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- [MySQL Server](https://dev.mysql.com/downloads/)
- [Git](https://git-scm.com/)

You may also need a Google Gemini API key for AI-powered features.

### 1. Clone the Repository

```bash
git clone https://github.com/Rahel-zekiros/evangadi-discussion-forum.git
cd evangadi-discussion-forum
```

### 2. Install Backend Dependencies

Open a terminal, navigate to the backend directory, and install dependencies:

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

Open a separate terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
```

### 4. Configure Environment Variables

Create the required environment files based on the configuration expected by the frontend and backend.

Refer to the Environment Variables section below and the existing application configuration for the exact variable names.

### 5. Set Up the Database

- Start your MySQL server or configure your hosted database.
- Create or configure the database required by the application.
- Set the database connection variables in the backend environment file.
- Run any database setup or migration steps required by the project.

## Environment Variables

The application may require environment variables for database connectivity, authentication, AI integration, and frontend-to-backend communication.

| Purpose | Example Variable |
|---|---|
| Database host | `DB_HOST` |
| Database username | `DB_USER` |
| Database password | `DB_PASSWORD` |
| Database name | `DB_NAME` |
| JWT signing secret | `JWT_SECRET` |
| Google Gemini API key | `GEMINI_API_KEY` |
| Frontend API base URL | `VITE_API_BASE_URL` |

**Important:** These variable names are examples. Use the exact names expected by your source code and configuration files. Never publish real API keys, database passwords, or JWT secrets in your repository.

## Running the Application

Start the backend using the development script defined in the backend `package.json`. For example:

```bash
cd backend
npm run dev
```

In a separate terminal, start the frontend using its configured development script:

```bash
cd frontend
npm run dev
```

Open the local frontend URL printed in the terminal. Make sure the frontend API URL points to the running backend.

The commands may differ depending on the scripts defined in each `package.json`.

## 🌐 Live Demo

**Live Application:** [https://evangadi-forum-hub.vercel.app/](https://evangadi-forum-hub.vercel.app/)

## GitHub Repository

[View the source code on GitHub](https://github.com/Rahel-zekiros/evangadi-discussion-forum)

## Author

**Rahel Zekiros**

- [GitHub Profile](https://github.com/Rahel-zekiros)
- [LinkedIn Profile](https://www.linkedin.com/in/rahel-zekiros-7455a0444)
- Email: raki52360@gmail.com

## Acknowledgments

Developed as part of the Evangadi Full-Stack Application Development program, applying practical skills in frontend development, backend APIs, database integration, and AI-powered application development.
