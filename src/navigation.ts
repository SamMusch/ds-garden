import { defineSidebar, autogenerate } from '@astrojs/starlight';

// export default defineSidebar({ '*': 'autogenerate' });

export default defineSidebar({
  '*': autogenerate({ collapsed: true })
});
