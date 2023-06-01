import { useState } from 'react'
import './App.css'
import ImageUpload from './components/ImageUpload'

function App() {

  const [croppedImage, setCroppedImage] = useState<string>();
  const [fullImage, setFullImage] = useState<string>();

  return (
    <>
      <ImageUpload setCroppedImage={setCroppedImage} setOriginalImage={setFullImage} round aspect={1} sizeLimit={150000}/>
    </>
  )
}

export default App
