# One MG Clone

This project is a clone of the "One MG" website built using React. It replicates key features like navigation, category-based pages, and a functional cart system.

## Features

- **Home Page**: Landing page showcasing highlights of the platform.
- **Category Pages**: Separate pages for categories like Wintercare, Consult, Lab Tests, and more.
- **Consultation Page**: Allows users to simulate booking consultations.
- **Cart Functionality**: Add and manage products in a shopping cart.
- **Contact Page**: Contains a contact form and details.

## Tech Stack

- **React**: For building the user interface.
- **React Router**: For managing routes.
- **Context API**: For state management (Cart context).
- **CSS**: For styling the application.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/one-mg-clone.git
   cd one-mg-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
.
├── src
│   ├── components
│   │   ├── Home.jsx
│   │   ├── Wintercare.jsx
│   │   ├── ConsultPage.jsx
│   │   ├── LabTest.jsx
│   │   ├── Contact.jsx
│   │   ├── Cart.jsx
│   │   └── ...
│   ├── context
│   │   └── CartContextProvider.jsx
│   ├── App.js
│   ├── index.js
│   └── styles
│       └── styles.css
├── package.json
└── README.md
```

## Key Files

- **`CartContextProvider.jsx`**: Manages the global cart state using React Context.
- **`App.js`**: Main application entry point, contains routing logic.
- **`components/`**: Contains individual page components.

## Usage

- **Home Page**: Navigate to the base URL to view the home page.
- **Category Pages**: Use the navigation bar to explore different categories like Wintercare, Consult, Lab Tests, etc.
- **Cart Management**: Add items to the cart and view them on the Cart page.

## Scripts

- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Runs tests (if any are implemented).

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For any questions or feedback, please feel free to contact me at [ narendrasinghsitu4@gmail.com ].
