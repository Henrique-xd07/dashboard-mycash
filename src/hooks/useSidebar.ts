import { useState, useEffect } from 'react';
import { useMediaQuery } from './useMediaQuery';

export function useSidebar() {
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // No desktop, começar expandido. Em outros tamanhos, não mostrar sidebar.
    if (isDesktop) {
      setIsExpanded(true);
    }
  }, [isDesktop]);

  const toggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const expand = () => setIsExpanded(true);
  const collapse = () => setIsExpanded(false);

  // Sidebar só existe em desktop (≥1280px)
  const shouldRender = isMounted && isDesktop;

  return {
    isExpanded,
    isDesktop,
    shouldRender,
    toggle,
    expand,
    collapse,
  };
}
