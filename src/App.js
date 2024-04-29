
import 'react-image-gallery/styles/css/image-gallery.css';
import ReactImageGallery from 'react-image-gallery';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./images', false, /\.(jpg)$/));

function App() {

  const images = [
  {
    original: sampleImages1,
    thumbnail: sampleImages1,
  },
  {
    original: sampleImages2,
    thumbnail: sampleImages2,
  },
  {
    original: sampleImages3,
    thumbnail: sampleImages3,
  },
];

  return (

    

    <>

      <h1>Welcome to the Image Gallery</h1>
      <ReactImageGallery items={images} />;

    </>
  );
}

export default App;
