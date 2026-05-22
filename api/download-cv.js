import { buildCvDownloadNotification, sendTelegramNotification } from './telegram.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const timestamp = new Date().toISOString();
    const userAgent = req.headers['user-agent'] || 'Unknown';
    const ip = (req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || '').split(',')[0].trim() || 'Unknown';

    const text = buildCvDownloadNotification({ timestamp, ip, userAgent });
    await sendTelegramNotification(text);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('CV download notification failed:', error);
    return res.status(500).json({ error: error.message || 'Failed to send CV download notification' });
  }
}
