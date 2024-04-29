
import 'react-image-gallery/styles/css/image-gallery.css';
import ReactImageGallery from 'react-image-gallery';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./images', false, /\.(jpg)$/));

function App() {

  const imageItem = images.map((images,index) => ({
      
    orginal: images,
    thumbnail:images,

  }))
 

  return (

    

    <>

      <h1>Welcome to the Image Gallery</h1>
      <ReactImageGallery items={imageItem} />;

    </>
  );
}

export default App;
