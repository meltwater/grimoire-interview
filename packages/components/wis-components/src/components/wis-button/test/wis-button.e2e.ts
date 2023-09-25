import { newE2EPage } from '@stencil/core/testing';

describe('wis-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wis-button></wis-button>');

    const element = await page.find('wis-button');
    expect(element).toHaveClass('hydrated');
  });
});
