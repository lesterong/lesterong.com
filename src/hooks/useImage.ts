import { useEffect, useState } from 'react';

// https://stackoverflow.com/questions/53775936/import-image-dynamically-in-react-component
const useImage = (fileName: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState({ png: null, webp: null });

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const responsePng = await import(`../assets/images/${fileName}.png`);
        const responseWebp = await import(`../assets/images/${fileName}.webp`);
        setImage({ png: responsePng.default, webp: responseWebp.default });
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
