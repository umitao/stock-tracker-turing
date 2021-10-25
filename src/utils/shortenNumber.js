const shortenNumber = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: false,
})

export function formatter(num) {
  return shortenNumber
    .formatToParts(num)
    .map(({ type, value }) => {
      switch (type) {
        case 'fraction':
          return `${value} `
        default:
          return value
      }
    })
    .reduce((string, part) => string + part)
}
