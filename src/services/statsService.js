const umitToken = `?token=Tpk_9f8a1a489e684df8ad8a935fab4b3504`
const quoteUrl = `https://sandbox.iexapis.com/stable/stock/aapl/quote${umitToken}`
const epsUrl = `https://sandbox.iexapis.com/stable/time-series/FUNDAMENTAL_VALUATIONS/AAPL/${umitToken}`

export const fetchStats = async () => {
  try {
    const quoteData = await fetch(quoteUrl).then((res) => res.json())
    const epsData = await fetch(epsUrl).then((res) => res.json())
    const statsData = { ...quoteData, ...epsData[0] }
    return statsData
  } catch (err) {
    console.error(err)
  }
}

//What data from which url?
//quoteData = open, high, low, previousClose, Day Range, 52Week Range, marketCap, peRatio, volume
//avgTotalVolume
//epsData = dividendYield, earningsPerShare
