import { css } from '@/stitches.config';
import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

const portalStyle = css({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: '$backgroundPrimary70',
});

function ReactPortal({
  children,
  id = 'portal-wrapper',
}: React.PropsWithChildren<{ id?: string }>) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(id);
    let systemCreated = false;
    if (!element) {
      systemCreated = true;
      element = document.createElement('div');
      element.setAttribute('id', id);
      element.className = portalStyle();
      document.body.appendChild(element);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [id]);

  if (wrapperElement === null) {
    return null;
  }

  return createPortal(children, wrapperElement);
}

export default ReactPortal;
