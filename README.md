# Cointab Software Private Limited - Software Developer Assignment


## Overview

Welcome to the Cointab Software Private Limited Software Developer Assignment. In this assignment, we have successfully completed the development of a simple 2-page website using Node.js and a SQL database. Below is an overview of what we have accomplished based on the given business requirements.

## Business Requirements

### Page 1: Home Page

#### Description

Upon opening the website, users see a prominent heading stating "Cointab SE-ASSIGNMENT." They also see a button named "All Users" on the webpage.

#### Functionality

1. Clicking the "All Users" button fetches data from the specified API (‘https://jsonplaceholder.typicode.com/users ’).
2. Essential user information is displayed, including:
   - Name
   - Email
   - Phone
   - Website
   - City
   - Company
3. Alongside the displayed user information, two buttons, "Open" and "Add", are provided. Initially, only the “Add” button is visible.
4. Clicking the "Add" button stores all the user information coming from the API in the database.
5. If the database contains the user's entry, the "Open" button is shown, and the “Add” button is hidden.
6. Clicking the "Open" button opens a new Post page.

### Page 2: Post Page

#### Description

The Post Page fetches data from the API ('https://jsonplaceholder.typicode.com/posts?userId=${userId}') for the specific userId stored in the database.

#### Functionality

1. Essential user information is displayed, including:
   - Name (corresponding to the specific userId)
   - Title
   - Body
   - Company (associated with the particular userId)
2. Two buttons, "Bulk Add" and "Download In Excel," are placed at the top of the page. Initially, only the "Bulk Add" button is visible.
3. Clicking the "Bulk Add" button stores all the posts present on that page into the database.
4. If the database contains post entries for the specific userId, the "Bulk Add" button is hidden, and the "Download in Excel" button is shown.
5. Clicking the "Download in Excel" button initiates the download of an Excel file containing all the post information for that particular user.

## Technologies Used

- Node.js
- SQL database (MySQL)
- Express.js
- JavaScript (Frontend and Backend)
- HTML/CSS
- AWS RDS


## API Endpoints
# User Endpoints
1 Add User
 Endpoint: POST user/add/user
 Description: Adds a new user to the system if the user with the provided user_id does not already exist.

2 Get User
Endpoint: GET user/get/user
Description: Retrieves user information based on the provided user_id.
Query Parameters:
user_id: The unique identifier of the user.

# User Post Endpoints
1 Bulk Add Posts
Endpoint: POST post/bulkAdd
Description: Adds multiple posts for a specific user if no posts exist for that user.

2 Check Existing Posts
Endpoint: GET post/bulkAdd/present
Description: Checks if posts exist for a specific user.
Query Parameters:
user_id: The unique identifier of the user.
