import './Avatar.css';

/** Аватар с инициалами и индикатором «в сети». color: indigo | violet | amber | night. */
export const createAvatar = ({ initials = 'ЕС', name = '', color = 'indigo', size = 'md', online = false } = {}) => {
  const el = document.createElement('span');
  el.className = `avatar avatar--${color} avatar--${size}`;
  if (name) { el.setAttribute('role', 'img'); el.setAttribute('aria-label', name + (online ? ', в сети' : '')); }
  else el.setAttribute('aria-hidden', 'true');
  el.innerHTML = `<span class="avatar__initials">${initials}</span>${online ? '<span class="avatar__status"></span>' : ''}`;
  return el;
};
