export function seriesToColorClass(seriesStr) {
  switch (seriesStr.toLowerCase()) {
    case 'cnjcx':
      return 'cnjcx-bg';
    default:
      return null;
  }
}
