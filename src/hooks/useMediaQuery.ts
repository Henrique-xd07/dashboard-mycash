import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Atualizar estado inicial
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Listener para mudanças
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Adicionar listener
    media.addEventListener('change', listener);

    // Cleanup
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
