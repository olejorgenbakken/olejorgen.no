import type { MetaFunction } from '@remix-run/node';
import { Main } from '~/components/layout/Main/Main';
import { Section } from '~/components/layout/Section/Section';

export const meta: MetaFunction = () => {
  return [
    { title: 'Ole Jørgen Bakken' },
    {
      name: 'description',
      content: 'Et slags forsøk på å teste ny teknologi tror jeg...',
    },
  ];
};

export default function Index() {
  return (
    <Main
      title="Ole Jørgen"
      hideTitle>
      <Section
        heading="Hva er denne siden?"
        backgroundImage="https://images.unsplash.com/photo-1718715463369-ee0f12f06847?q=80&w=3055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <p>Et slags forsøk på å teste ny teknologi tror jeg...</p>
      </Section>
      <p>
        Jeg er på <a href="https://github.com/olejorgenbakken">GitHub</a> og{' '}
        <a href="https://twitter.com/olejorgenbakken">Twitter</a>.
      </p>
    </Main>
  );
}
