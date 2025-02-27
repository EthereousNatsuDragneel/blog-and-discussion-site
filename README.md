# React Blog App

This is a **React-based blogging platform** where users can **write, edit, and share blogs**. The project uses **React Router** for navigation and includes user authentication.

## Features
- 📝 **Create, Edit, and Delete Blog Posts**
- 🔐 **User Authentication** for secure access
- 🌍 **Public & Private Blogs** with visibility settings
- 🎨 Consistent UI with a custom theme
- 🚀 **React Router** for seamless navigation

## Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone [https://github.com/your-username/your-repo.git](https://github.com/EthereousNatsuDragneel/blog-and-discussion-site.git)
cd your-repo
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm start
```
This will start the project on `http://localhost:3000/`.

## BackEnd
Setup instructions:
1) Run `python -m venv venv` to create a virtual environment
2) run `venv\Scripts\activate` to activate the environment
3) run `pip install -r requirements.txt` to get python packages
Note: .gitignore will not push the venv and __pycache__ folders to keep the repo clean and of a manageable size

## Project Structure
```
📂 your-repo/
├── 📂 src/
│   ├── 📂 components/
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── ForgotPassword.js
│   │   ├── CreateBlog.js
│   │   ├── In progress...
│   │   ├── ...
│   ├── App.js
│   ├── index.js
├── 📄 package.json
├── 📄 README.md
```

## Usage
- 🏠 Navigate to `/` for the **Home Page**
- ✍️ Go to `/create` to **Write a New Blog**
- 📖 Visit `/blogs/:id` to **Read a Blog Post**
- 🆕 Sign up at `/signup`
- 🔑 Log in at `/login`

## Dependencies
- **React**: Frontend library
- **React Router**: For navigation
- **Tailwind CSS** (optional): For styling
- **Firebase / Backend API** (to be added) for storing blog posts

## Contributing
1. **Fork** the repository.
2. **Create** a new branch: `git checkout -b feature-branch`
3. **Commit** changes: `git commit -m "Add new feature"`
4. **Push** to the branch: `git push origin feature-branch`
5. **Submit** a pull request.

## License
This project is licensed under the MIT License.

---
💡 **Have a suggestion or found a bug?** Open an issue or contribute to the project!
