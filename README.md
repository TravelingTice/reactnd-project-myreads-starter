# MyReads Project

This is my version of the MyReads project. I used the [starter template](https://github.com/udacity/reactnd-project-myreads-starter) from Udacity to start with and the objective for me was to make this app fully functional with:
1. Moving books between categories (bookshelves)
2. Adding the `/search` route, which features a search option, that filters the books depending on the input, so you can find the desired books and add those to your library.

## TL;DR

To get started:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* the app will be accessible on port 3000

## How to Use
The start-up page is the library that contains all of your books. They are arranged by categories or 'shelves':

1. Currently Reading
2. Want to Read
3. Read

You can rearrange your books by clicking the drop-down on each book and clicking on the shelf you want to move them to. A convenient pop-up in the top-right corner will notify you of your action.

If you want to add a book, just click the plus icon in the bottom-right corner, which takes you to a different screen where you can use the input field to fetch books from the backend server, provided by Udacity. The books corresponding with your search input will be shown (max 20) and by using the same drop-down, you can add them to your library. The very convenient popup will notify you here as well.

**Note:** The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Source files:
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of the app.
    ├── Book.js
    ├── Library.js
    ├── Popup.js
    ├── Search.js
    ├── Shelf.js
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Features I may add in the future:

- Books that can be dragged from shelf to shelf
- Popup transition and some other transitions in the app
