function getEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function buildContactNotification({ fullName, email, subject, message, timestamp }) {
  return [
    '<b>New Contact Form Submission</b>',
    `<b>Name:</b> ${escapeHtml(fullName)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    `<b>Subject:</b> ${escapeHtml(subject || 'No subject')}`,
    `<b>Message:</b> ${escapeHtml(message)}`,
    `<b>Received:</b> ${escapeHtml(timestamp)}`
  ].join('\n');
}

export function buildCvDownloadNotification({ timestamp, ip, userAgent }) {
  return [
    '<b>CV Download Alert</b>',
    `<b>Time:</b> ${escapeHtml(timestamp)}`,
    ip ? `<b>IP:</b> ${escapeHtml(ip)}` : null,
    userAgent ? `<b>Browser:</b> ${escapeHtml(userAgent)}` : null
  ]
    .filter(Boolean)
    .join('\n');
}

export async function sendTelegramNotification(text) {
  const botToken = getEnv('TELEGRAM_BOT_TOKEN');
  const chatId = getEnv('TELEGRAM_CHAT_ID');

  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true
    })
  });

  const payload = await response.json();
  if (!response.ok || !payload.ok) {
    const errorMessage = payload.description || payload.error_description || `HTTP ${response.status}`;
    throw new Error(`Telegram API error: ${errorMessage}`);
  }

  return payload;
}
