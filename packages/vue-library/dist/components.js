import { defineContainer } from './vue-component-lib/utils';
export const WisButton = defineContainer('wis-button', undefined, [
    'label'
]);
export const WisCard = defineContainer('wis-card', undefined, [
    'cardTitle',
    'icon'
]);
export const WisWeatherCard = defineContainer('wis-weather-card', undefined, [
    'location',
    'temperature',
    'condition'
]);
//# sourceMappingURL=components.js.map