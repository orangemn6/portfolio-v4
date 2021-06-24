import { mdiDevTo, mdiGithub, mdiTwitter } from '@mdi/js';
import { AppIcon } from './AppIcon';
import css from './Footer.module.scss';

export const Footer = () => (
  <footer class={css.footer}>
    <div class={css['copy-area']}>
      Made with&nbsp; <img src="/assets/emojis/love.svg" alt="❤" /> &nbsp;by Puru Vijay
    </div>
    <div class={css['social-links']}>
      <a
        href="https://twitter.com/orangemn6"
        rel="noopener"
        target="_blank"
        id="twitter"
        aria-label="Twitter Profile"
      >
        <AppIcon path={mdiTwitter} />
      </a>
      <a
        href="https://github.com/orangemn6"
        rel="noopener"
        target="_blank"
        id="github"
        aria-label="Github Profile"
      >
        <AppIcon path={mdiGithub} />
      </a>
    </div>
  </footer>
);
