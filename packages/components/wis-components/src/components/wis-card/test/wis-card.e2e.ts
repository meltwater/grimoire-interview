import { newE2EPage } from '@stencil/core/testing';

describe('wis-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wis-card></wis-card>');

    const element = await page.find('wis-card');
    expect(element).toHaveClass('hydrated');
  });
});
