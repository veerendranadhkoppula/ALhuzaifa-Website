import type { CollectionConfig } from 'payload'
import { canDelete, isLoggedIn } from '../../access/roles'

const sendBrevo = async (payload: {
  sender: { email: string; name: string }
  to: { email: string; name?: string }[]
  subject: string
  htmlContent: string
}) => {
  const apiKey = (process.env.BREVO_API_KEY || '').trim()
  if (!apiKey) {
    console.error('❌ BREVO_API_KEY not set')
    return
  }

  for (let attempt = 1; attempt <= 2; attempt++) {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 10000)
    try {
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
        body: JSON.stringify(payload),
        signal: ctrl.signal,
      })
      clearTimeout(timer)
      const text = await res.text().catch(() => '<no-body>')
      if (!res.ok) throw new Error(`Brevo ${res.status}: ${text}`)
      console.log(`✅ Brevo email sent (attempt ${attempt})`)
      return
    } catch (err: any) {
      clearTimeout(timer)
      console.error(`❌ Brevo attempt ${attempt} failed:`, err?.message)
      if (attempt === 2) throw err
      await new Promise((r) => setTimeout(r, 400))
    }
  }
}

export const ContactForms: CollectionConfig = {
  slug: 'contact-forms',
  admin: {
    useAsTitle: 'firstName',
    defaultColumns: ['firstName', 'lastName', 'email', 'phone', 'createdAt'],
    group: 'Marketing',
  },
  access: {
    read: isLoggedIn,
    create: () => true,
    update: () => true,
    delete: canDelete,
  },
  fields: [
    { name: 'firstName', type: 'text', required: true },
    { name: 'lastName', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'country', type: 'text' },
    { name: 'location', type: 'text' },
    {
      name: 'projectType',
      type: 'select',
      options: [
        { label: 'Residential', value: 'residential' },
        { label: 'Hospitality', value: 'hospitality' },
        { label: 'Commercial', value: 'commercial' },
        { label: 'Bedroom', value: 'bedroom' },
        { label: 'Hallway', value: 'hallway' },
        { label: 'Majlis / Diwaniya', value: 'majlis' },
        { label: 'Dining Room', value: 'dining_room' },
        { label: 'Living Room', value: 'living_room' },
        { label: 'Home Office', value: 'home_office' },
      ],
    },
    { name: 'message', type: 'textarea', required: true },
  ],
  timestamps: true,

  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation !== 'create') return

        const verifiedSender = process.env.VERIFIED_SENDER || process.env.ADMIN_EMAIL
        const adminEmail = process.env.ADMIN_EMAIL

        if (!verifiedSender) {
          console.error('❌ VERIFIED_SENDER or ADMIN_EMAIL not set')
          return
        }

        const fullName = `${doc.firstName || ''} ${doc.lastName || ''}`.trim()
        const projectLabel = doc.projectType || 'Not specified'
        const submittedAt = doc.createdAt || new Date().toISOString()

     
        if (adminEmail) {
          try {
            await sendBrevo({
              sender: { email: verifiedSender, name: 'Al Huzaifa Design Studio' },
              to: [{ email: adminEmail, name: 'Admin' }],
              subject: `📩 New Contact Form Submission — ${fullName}`,
              htmlContent: `
                <h2 style="color:#333">New Contact Form Submission</h2>
                <table style="border-collapse:collapse;width:100%">
                  <tr><td style="padding:8px;border:1px solid #ddd"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd">${fullName}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${doc.email}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #ddd"><strong>Phone</strong></td><td style="padding:8px;border:1px solid #ddd">${doc.phone}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #ddd"><strong>Country</strong></td><td style="padding:8px;border:1px solid #ddd">${doc.country || '—'}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #ddd"><strong>Location</strong></td><td style="padding:8px;border:1px solid #ddd">${doc.location || '—'}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #ddd"><strong>Project Type</strong></td><td style="padding:8px;border:1px solid #ddd">${projectLabel}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #ddd"><strong>Message</strong></td><td style="padding:8px;border:1px solid #ddd">${doc.message}</td></tr>
                </table>
                <p style="color:#999;font-size:12px">Submitted on ${submittedAt}</p>
              `,
            })
            console.log('✅ Admin notification sent to', adminEmail)
          } catch (err) {
            console.error('❌ Failed to send admin email:', err)
          }
        }

        if (doc.email) {
          try {
            await sendBrevo({
              sender: { email: verifiedSender, name: 'Al Huzaifa Design Studio' },
              to: [{ email: doc.email, name: fullName }],
              subject: 'Thank you for contacting Al Huzaifa Design Studio',
              htmlContent: `
                <h2 style="color:#333">Thank you, ${doc.firstName}!</h2>
                <p>We've received your message and will get back to you shortly.</p>
                <h3 style="color:#555">Your submission summary:</h3>
                <table style="border-collapse:collapse;width:100%">
                  <tr><td style="padding:8px;border:1px solid #ddd"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd">${fullName}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${doc.email}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #ddd"><strong>Phone</strong></td><td style="padding:8px;border:1px solid #ddd">${doc.phone}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #ddd"><strong>Project Type</strong></td><td style="padding:8px;border:1px solid #ddd">${projectLabel}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #ddd"><strong>Message</strong></td><td style="padding:8px;border:1px solid #ddd">${doc.message}</td></tr>
                </table>
                <p style="margin-top:24px">Warm regards,<br/><strong>Al Huzaifa Design Studio</strong></p>
                <p style="color:#999;font-size:12px">Submitted on ${submittedAt}</p>
              `,
            })
            console.log('✅ Confirmation email sent to user:', doc.email)
          } catch (err) {
            console.error('❌ Failed to send user confirmation email:', err)
          }
        }
      },
    ],
  },
}
