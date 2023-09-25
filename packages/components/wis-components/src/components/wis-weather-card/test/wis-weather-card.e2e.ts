import { newE2EPage } from '@stencil/core/testing';

describe('wis-weather-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wis-weather-card></wis-weather-card>');

    const element = await page.find('wis-weather-card');
    expect(element).toHaveClass('hydrated');
  });
});
