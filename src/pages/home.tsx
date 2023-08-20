import { FC } from 'react';
import { Main } from '@components/main';
import { Roles } from '@components/roles';
import { Section } from '@components/section';
import { ContactUs } from '@components/contact-us';
import { ScrollToHashElement } from '@components/scroll-to-hash-element';

export const Home: FC = () => {
  return (
    <>
      <ScrollToHashElement />
      <Section>
        <Main />
      </Section>
      <Section>
        <Roles />
      </Section>
      <Section id="contact-us">
        <ContactUs />
      </Section>
    </>
  );
};
