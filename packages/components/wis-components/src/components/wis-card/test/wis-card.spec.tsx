import { newSpecPage } from '@stencil/core/testing';
import { WisCard } from '../wis-card';

describe('wis-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WisCard],
      html: `<wis-card></wis-card>`,
    });
    expect(page.root).toEqualHtml(`
      <wis-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wis-card>
    `);
  });
});
