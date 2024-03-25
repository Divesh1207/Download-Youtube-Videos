import { useState } from 'react'

import './App.css'
import Input from './Components/UI/Input'
import Output from './Components/UI/Output'



function App() {
  const [url, setUrl] = useState("")
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const Download = async () => {
    // Validation 
    if (!url) {
      return alert('Please Enter a URL')
    }
    setLoading(true);
    try {
      const res = await fetch(`https://you-tube-video-downloder-backend.vercel.app/download?url=${url}`);
      const data = await res.json();

      console.log(data)
      setData(data);
      setUrl("");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <>
      <Input urlValue={url}
        setUrlValue={setUrl}
        handleDownload={Download}

      />
      <Output loading={loading}
        data={data}

      />
    </>
  )
}

export default App
