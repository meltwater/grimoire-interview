import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'wis-card',
  styleUrl: 'wis-card.css',
  shadow: true,
})
export class CardComponent {
  @Prop() cardTitle: string;
  @Prop() icon: string;

  render() {
    return (
      <div class="card">
        <img src={this.icon} alt="Icon" />
        <h2>{this.cardTitle}</h2>
        <wis-button label="Learn More"></wis-button>
      </div>
    );
  }
}
