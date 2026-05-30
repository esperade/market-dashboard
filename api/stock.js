export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { symbols } = req.query;
  if (!symbols) return res.status(400).json({ error: 'symbols required' });

  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/spark?symbols=${symbols}&range=1d&interval=5m`;
    const sparkRes = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const sparkData = await sparkRes.json();

    const quoteUrl = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbols}`;
    const quoteRes = await fetch(quoteUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const quoteData = await quoteRes.json();

    res.status(200).json({
      quotes: quoteData.quoteResponse?.result || [],
      spark: sparkData.spark?.result || []
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
