import { newSpecPage } from '@stencil/core/testing';
import { WisWeatherCard } from '../wis-weather-card';

describe('wis-weather-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WisWeatherCard],
      html: `<wis-weather-card></wis-weather-card>`,
    });
    expect(page.root).toEqualHtml(`
      <wis-weather-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wis-weather-card>
    `);
  });
});
