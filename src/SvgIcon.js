import React from 'react';

const icons = {
  add: 'M9.7 0v9.7H0v4.6h9.7V24h4.6v-9.7H24V9.7h-9.7V0H9.7z',
  check: 'M21.9 2.6c-.4-.4-1-.4-1.4 0L8.2 14.9c-.4.4-1 .4-1.4 0l-3-3c-.4-.4-1-.4-1.4 0L.6 13.8c-.4.4-.4 1 0 1.4l6.3 6.3c.4.4 1 .4 1.4 0L23.8 5.8c.4-.4.4-1 0-1.4l-1.9-1.8z',
  delete: 'M10.2 0c-.9 0-1.7.7-1.7 1.6v.6H4.3c-.8 0-1.4.6-1.4 1.4v2.8c0 .8.6 1.4 1.4 1.4h.3v14.8c0 .8.6 1.4 1.4 1.4h12.3c.8 0 1.4-.6 1.4-1.4V7.8h.3c.8 0 1.4-.6 1.4-1.4V3.6c0-.8-.6-1.4-1.4-1.4h-4.2v-.6c0-.9-.7-1.7-1.6-1.7h-4zm0 1.7h3.9v.6h-3.9v-.6zM4.6 3.9h15.1v2.2H4.6V3.9zm1.7 3.9H18v14.5H6.3V7.8zm2.5 1.7c-.5 0-.8.4-.8.8v9.5c0 .5.4.8.8.8.5 0 .8-.4.8-.8v-9.5c0-.4-.4-.8-.8-.8zm3.3 0c-.5 0-.8.4-.8.8v9.5c0 .5.4.8.8.8s.8-.4.8-.8v-9.5c.1-.4-.3-.8-.8-.8zm3.4 0c-.5 0-.8.4-.8.8v9.5c0 .5.4.8.8.8.5 0 .8-.4.8-.8v-9.5c0-.4-.4-.8-.8-.8z',
}

const SvgIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path d={icons[props.icon]} fill="#88929F"></path>
  </svg>
)

export default SvgIcon;
