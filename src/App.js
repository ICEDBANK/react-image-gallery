// Importing styles for the image gallery from 'react-image-gallery' library
import "react-image-gallery/styles/css/image-gallery.css";
// Importing the ImageGallery component from 'react-image-gallery' library
import ImageGallery from "react-image-gallery";

// Function to import all images from the 'images' folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./images', false, /\.(jpg)$/));

// Define the functional component App
function App() {
  // Map each image to the required format for the ImageGallery component
  const imageItems = images.map((image, index) => ({
    original: image, // Set the original image source
    thumbnail: image, // Set the thumbnail image source (same as original for simplicity)
  }));

  // JSX markup
  return (
    <>
      {/* Heading for the image gallery */}
      <h1>Welcome to the Image Gallery</h1>
      {/* ImageGallery component with specified props */}
      <ImageGallery 
        items={imageItems} // Set the items prop to the mapped image items
        showThumbnails={false} // Hide the thumbnail strip
        thumbnailPosition="left" // Position the thumbnails on the left side
        autoPlay={true} // Enable autoplay
        showFullscreenButton={false} // Hide the fullscreen button
        showPlayButton={false} // Hide the play button
        showNav={false} // Hide the navigation buttons
        showBullets={true} // Show bullets for navigation
      />;
    </>
  );
}

// Export the App component
export default App;
