import { useRef, useState, useEffect } from "react";

export default function Preview() {
  const [url, setUrl] = useState(null);
  const previewRef = useRef();

  const previewHandle = (e) => {
    e.preventDefault();

    const image = previewRef.current.files[0];
    const theurl = URL.createObjectURL(image);
    setUrl(theurl);
  };

  useEffect(() => {
    return () => {
      url && URL.revokeObjectURL(url);
    };
  }, []);
  return (
    <>
      <form onSubmit={previewHandle}>
        <div>Upload an image</div>
        <input type="file" ref={previewRef} />
        <button type="submit">Submit</button>

        {url && <img src={url} className="profilepic" alt="upload preview" />}
      </form>
    </>
  );
}
