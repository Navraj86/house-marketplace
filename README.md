
# 🏠 House Marketplace

A modern real estate marketplace application built with React, Firebase, and Tailwind CSS. This platform allows users to browse, list, and manage property listings for both rent and sale.

## ✨ Features

- **User Authentication**: Secure sign-up, sign-in, and password recovery
- **Property Listings**: Browse properties categorized by rent or sale
- **Create & Edit Listings**: Add new properties with detailed information and images
- **Interactive Maps**: Location visualization using Leaflet maps
- **Image Slider**: Beautiful property image carousel using Swiper
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Real-time Updates**: Live data synchronization with Firebase
- **Contact System**: Direct communication between users and property owners
- **Special Offers**: Featured listings and promotional properties

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Maps**: Leaflet, React Leaflet
- **UI Components**: Swiper, React Toastify
- **Build Tool**: Vite
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ListingItem.jsx  # Property listing card
│   ├── Navbar.jsx       # Navigation bar
│   ├── OAuth.jsx        # Google authentication
│   ├── PrivateRoute.jsx # Protected route wrapper
│   ├── Slider.jsx       # Image carousel
│   └── Spinner.jsx      # Loading indicator
├── pages/               # Application pages
│   ├── Category.jsx     # Property category listings
│   ├── Contact.jsx      # Contact property owner
│   ├── CreateListing.jsx # Add new property
│   ├── EditListing.jsx  # Edit existing property
│   ├── Explore.jsx      # Homepage with categories
│   ├── ForgotPassword.jsx # Password recovery
│   ├── Listing.jsx      # Individual property details
│   ├── Offers.jsx       # Special offers page
│   ├── Profile.jsx      # User profile management
│   ├── SignIn.jsx       # User login
│   └── SignUp.jsx       # User registration
├── hooks/               # Custom React hooks
│   └── useAuthStatus.js # Authentication status hook
├── assets/              # Static assets
│   ├── jpg/            # Property category images
│   └── svg/            # Icon assets
└── firebase.config.js   # Firebase configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Firebase account
- Google Maps API key (optional, for geocoding)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/house-marketplace.git
   cd house-marketplace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add:
   ```bash
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_APP_GEOCODE_API_KEY=your_geocoding_api_key
   ```

4. **Firebase Setup**
   
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password and Google)
   - Enable Firestore Database
   - Enable Storage
   - Copy your Firebase config to the environment variables

5. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 🔥 Firebase Configuration

The application uses Firebase for:
- **Authentication**: User registration and login
- **Firestore**: Property listings and user data storage
- **Storage**: Property image uploads

Make sure to configure your Firebase security rules appropriately for production use.

## 📱 Usage

1. **Browse Properties**: Visit the homepage to explore rent and sale categories
2. **Sign Up/Sign In**: Create an account or log in to access full features
3. **Create Listings**: Add new properties with images and detailed information
4. **Edit Listings**: Modify your existing property listings
5. **Contact Owners**: Reach out to property owners directly
6. **View on Map**: See property locations on interactive maps

## 🎨 Customization

The application uses Tailwind CSS for styling. You can customize the design by:
- Modifying the `tailwind.config.js` file
- Adding custom CSS classes in `src/index.css`
- Updating component styles in individual JSX files

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding! 🚀
