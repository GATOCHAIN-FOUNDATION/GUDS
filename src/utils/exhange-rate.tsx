async function getUsdToAedRate() {
  const apiUrl = 'https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.result === 'success') {
      const usdToAed = data.conversion_rates.AED;
      console.log(`USD to AED: ${usdToAed}`);
      return usdToAed;
    } else {
      throw new Error('Failed to retrieve exchange rate.');
    }
  } catch (error) {
    console.error('Error fetching USD to AED rate:', error);
  }
}
