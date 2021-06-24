import { mdiOpenInNew } from '@mdi/js';
import { AppIcon } from './AppIcon';
import css from './ContactMeLink.module.scss';

export const ContactMeLink = () => {
  return (
    <a
      href="https://ku4tg0r2dmd.typeform.com/to/HhoWWFJO"
      target="_blank"
      rel="noopener noreferrer"
      class={css.link}
    >
      <span>Contact Me</span>
      <AppIcon path={mdiOpenInNew} />
    </a>
  );
};
