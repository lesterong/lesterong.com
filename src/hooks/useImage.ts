import { useEffect, useState } from 'react';

// https://stackoverflow.com/questions/53775936/import-image-dynamically-in-react-component
const useImage = (fileName: string) => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/lesterong/lesterong.com/src/assets/images/';
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState({ png: '', webp: '' });

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const responsePng = await fetch(`${baseUrl}${fileName}.webp`).then((res) => {
          if (res.ok) {
            return res.blob();
          }
          throw new Error('File not found');
        });
        const responseWebp = await fetch(`${baseUrl}${fileName}.png`).then((res) => {
          if (res.ok) {
            return res.blob();
          }
          throw new Error('File not found');
        });
        const pngBlob = URL.createObjectURL(responsePng);
        const webpBlob = URL.createObjectURL(responseWebp);
        setImage({ png: pngBlob, webp: webpBlob });
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchImage();
  }, [fileName]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
