import { media } from './breakpoints'

export default {
  colors: {
    brand: '#0154FF',
    background: '#FFFFFF',
    foreground: '#000000',
  },
  media,
  transitions: {
    ease: (time = '200ms') => `${time} ease-in-out`,
    cubic: (time = '500ms') => `${time} cubic-bezier(0.2, 1, 0.2, 1)`,
  },
}
