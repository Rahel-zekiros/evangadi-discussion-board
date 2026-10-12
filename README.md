# AI-Powered Discussion Forum

## Features

### Discussion Forum

- **User Authentication:** Register, log in, and access protected features.
- **Question and Answer Discussions:** Create questions and participate in technical discussions.
- **Question Discovery:** Browse and search for relevant questions.
- **Similar Question Recommendations:** Discover related discussions and help reduce duplicate questions.
- **AI Draft Coach:** Get AI-assisted guidance when preparing question drafts.
- **Answer Fit Analysis:** Evaluate how well a proposed answer addresses a question.

### AI-Powered Knowledge Base (RAG)

- **Document Upload:** Upload supported PDF and TXT documents to your private knowledge library.
- **Document Reader:** Open and read uploaded documents directly in the application.
- **Document Management:** View and delete uploaded documents.
- **Semantic Search:** Search document content based on meaning.
- **AI Ask:** Ask questions about uploaded documents and receive AI-generated answers based on retrieved content.
- **AI Chatbot:** Interact with the AI assistant to explore your document library.
- **Cross-Document Search and Chat:** Search and ask questions across the document library.
- **Source-Aware Responses:** View document sources alongside AI answers when supported.
- **Private Document Access:** Access document features through authenticated endpoints.

### User Interface

- Responsive design for different screen sizes.
- Integrated discussion forum and AI document tools.

## Technology Stack

### Frontend
- React
- JavaScript
- HTML and CSS
- Vite
- React Router
- React Markdown

### Backend
- Node.js
- Express.js
- REST API
- Authentication middleware

### Database and AI
- MySQL
- Google Gemini API
- Text embeddings and vector similarity search for RAG

### Document Processing
- PDF and TXT document handling
- Document chunking and retrieval
- Semantic search and AI-generated responses based on retrieved context

## Installation

### Prerequisites
- Node.js and npm
- MySQL Server
- Git

### Clone the Repository

```bash
git clone https://github.com/Rahel-zekiros/evangadi-discussion-board.git
cd evangadi-discussion-board
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

Configure the required backend environment variables before starting the server.

### Install Frontend Dependencies

Open another terminal from the project root and run:

```bash
cd frontend
npm install
```

Configure the frontend API URL to point to your backend server.

Use the development scripts defined in each `package.json` to start the backend and frontend.

## Environment Variables

Configure the environment variables required by your local setup, including database settings, JWT secret, Google Gemini API key if needed, and frontend API base URL.

Never commit real passwords, API keys, or other secrets to GitHub.

## Live Demo

Add the deployed application URL here after deployment.

## GitHub Repository

[View the source code](https://github.com/Rahel-zekiros/evangadi-discussion-board)

## Author

**Rahel Zekiros**

[GitHub Profile](https://github.com/Rahel-zekiros)

## Acknowledgments

Developed as part of the Evangadi Full-Stack Application Development program.