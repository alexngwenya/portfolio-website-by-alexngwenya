import { createClient } from '@supabase/supabase-js';
import { buildContactNotification, sendTelegramNotification } from './telegram.js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      full_name,
      name,
      email,
      subject,
      message
    } = req.body;

    const resolvedFullName = full_name || name || null;

    if (!resolvedFullName || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { error } = await supabase
      .from('contact_form')
      .insert([
        {
          full_name: resolvedFullName,
          email,
          subject: subject || null,
          message
        }
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: error.message });
    }

    const timestamp = new Date().toISOString();
    const notification = buildContactNotification({
      fullName: resolvedFullName,
      email,
      subject,
      message,
      timestamp
    });

    await sendTelegramNotification(notification);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}
