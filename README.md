##Tools Used:

##Backend:

#Python 3.14.4

#Django 5.1.1

#psycopg2_binary-2.9.9

#PostgreSQL 16

#Django Rest Framework 3.15.2

#django-cors-headers 4.4.0

#coreapi 2.3.3

##Frontend:

#Node v18.20.3

#react-router-dom

#react-hot-toast

#Axios

#Tailwind CSS for Vite

##Backend Setup

#Create a Virtual Environment:

#python -m venv venv

#source venv/bin/activate

##Install Django:

#pip install django

##Create Django Project and App:

#django-admin startproject django_todo_api

#cd django_todo_api

#django-admin startapp tasks

##Configure Settings:

#Add tasks and rest_framework to INSTALLED_APPS.

#Add django-cors-headers to INSTALLED_APPS and MIDDLEWARE.

##Database Setup:

#Configure PostgreSQL in settings.py.

#Run migrations:

#python manage.py makemigrations

#python manage.py migrate

##Create Models and Serializers:

#Define the Task model in tasks/models.py.

#Create a serializer in tasks/serializers.py to convert model instances to JSON.

##Create Views and URLs:

#Use viewsets in tasks/views.py to handle CRUD operations.

#Register routes in tasks/urls.py using routers.

##Documentation:

#Install and configure coreapi for API documentation.

#Add schema settings in settings.py and include documentation URLs.

##Frontend Setup:

#Create React App with Vite:

#npm create vite@latest task_client --template react

#cd task_client

#npm install

#npm run dev

##Install Necessary Modules:

#npm install react-router-dom react-hot-toast axios react-hook-form

##Project Structure:

#Create directories for pages, components, and api in src.

#Routing and Navigation:

#Set up react-router-dom for navigation.

#Create Navigation.jsx for the app’s header and links.

##API Integration:

#Use Axios for HTTP requests in api/tasks.api.js.

#Fetch and display tasks in TaskList.jsx using useEffect.

##Backend Setup (Continued)

#Handle CORS Issues:

#In task_list.jsx, import the get_all_task function to fetch tasks from the backend.

#Create an async function load_tasks to handle the data fetching.

#Ensure CORS is configured correctly in settings.py:

#Python

##CORS_ALLOWED_ORIGINS = [ 'http://localhost:5173', ##]

##State Management:

#Use useState to manage the tasks state and display the tasks using a component.

##Task Card Component:

#Create Task_card.jsx to display individual tasks.

##Task Form:

#Use react-hook-form to create a form for adding new tasks.

#Use register to handle form inputs and validation.

##Form Submission:

#Use handleSubmit to manage form submission and display errors or notifications using formState.errors.

##Create Task API Call:

#In tasks.api.js, create a function to send a POST request to the backend to create a new task.

##Form Submission Handling:

#In task_form_page, import create_task and use it in the on_submit async function with await.

##Redirect After Task Creation:

#Use useNavigate to redirect to the task list page after creating a new task.

##Delete Task:

#Create a new path to render each task with a delete button.

#Use useParams to get the task ID and create a function in tasks.api.js to delete the task using the ID.

#Import delete_task and use it in an onClick event with an async function to delete tasks.

##Update Task:

#Create an update_task function in tasks.api.js.

#Use useEffect to fetch task data by ID and use setValue to populate the form with the task data for editing.

##Task Update Handling:

#Use get_task to fetch task data and setValue to populate the form fields for updating the task.

#Frontend Styling and Notifications

##Styling with Tailwind CSS:

##Install Tailwind CSS for Vite:

#npm install -D tailwindcss postcss autoprefixer

##Notifications with react-hot-toast:

#Import Toaster from react-hot-toast in App.jsx and include it before closing BrowserRouter.

#Import toast in Task_form_page and use it to display notifications in various functions.

#Final Touches

#Form Validation and Error Handling:

#Use react-hook-form to handle form validation and display errors.

#API Documentation:

#With Django Rest Framework, i can create APIs with built-in security features.

#Configure CORS to allow specific origins to connect to your backend.
