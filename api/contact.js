const { Resend } = require('resend');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, company, email, phone, message } = req.body;

  try {
    await resend.emails.send({
      from: 'website@gormanadvisory.com.au',
      to: 'pg@gormanadvisory.com',
      subject: `New enquiry from ${name} — ${company}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
