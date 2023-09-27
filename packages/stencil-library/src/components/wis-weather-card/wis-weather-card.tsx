import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'wis-weather-card',
  styleUrl: 'wis-weather-card.css',
  shadow: true,
})
export class WeatherCard {
  @Prop() location: string;
  @Prop() temperature: string;
  @Prop() condition: string;

  render() {
    console.log('hello');
    return (
      <wis-card title={this.location} icon={'http://localhost:4000/assets/rainy.jpeg'}>
        <div class="weather-details">
          <p>Temperature: {this.temperature}</p>
          <p>Condition: {this.condition}</p>
        </div>
      </wis-card>
    );
  }
}
