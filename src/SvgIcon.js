import React from 'react';

const icons = {
  add: 'M24 13.7H13.7V24h-3.4V13.7H0v-3.4h10.3V0h3.4v10.3H24v3.4z',
  check: 'M7.7 17.3L2 11.6l-2 1.9 7.6 7.6L24 4.8l-1.9-1.9L7.7 17.3z',
  delete: 'M4 21.3C4 22.8 5.2 24 6.7 24h10.7c1.5 0 2.7-1.2 2.7-2.7v-16H4v16zm17.3-20h-4.7L15.3 0H8.7L7.3 1.3H2.7V4h18.7V1.3z',
}

const SvgIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path d={icons[props.icon]} fill="#88929F"></path>
  </svg>
)

export default SvgIcon;
