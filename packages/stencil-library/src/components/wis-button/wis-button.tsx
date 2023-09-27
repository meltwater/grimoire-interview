import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'wis-button',
  styleUrl: 'wis-button.css',
  shadow: true,
})
export class ButtonComponent {
  @Prop() label: string;

  render() {
    return <button>{this.label}</button>;
  }
}
