
import 'react-image-gallery/styles/css/image-gallery.css';
import ReactImageGallery from 'react-image-gallery';
import sampleImages1 from './images/sample1.jpg';
import sampleImages2 from './images/sample2.jpg';
import sampleImages3 from './images/sample3.jpg';

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
