import { render } from '@testing-library/react';
import { Hero } from './hero';

describe('Hero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Hero title="Header" subtitle="sub" cta="action" />
    );
    expect(baseElement).toBeTruthy();
  });
});
