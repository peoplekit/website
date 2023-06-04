import { useMemo, useEffect, FC } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToHashElement: FC = () => {
  let location = useLocation();

  let hashElement = useMemo(() => {
    let hash = location.hash;
    const removeHashCharacter = (str: string) => {
      return str.slice(1);
    };

    if (hash) {
      return document.getElementById(removeHashCharacter(hash));
    }
    return null;
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: 'smooth',
        // block: "end",
        inline: 'nearest'
      });
    }
  }, [hashElement]);

  return null;
};
