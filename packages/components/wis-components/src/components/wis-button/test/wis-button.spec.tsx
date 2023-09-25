import { newSpecPage } from '@stencil/core/testing';
import { WisButton } from '../wis-button';

describe('wis-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WisButton],
      html: `<wis-button></wis-button>`,
    });
    expect(page.root).toEqualHtml(`
      <wis-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wis-button>
    `);
  });
});
