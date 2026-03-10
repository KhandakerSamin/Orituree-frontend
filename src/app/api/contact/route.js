import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, service, budget, details } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim()) {
      return Response.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Project Enquiry — Oriture</title>
</head>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:20px;overflow:hidden;box-shadow:0 8px 48px rgba(0,0,0,0.13);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a0e42 0%,#0d0820 60%,#000000 100%);padding:44px 40px 36px;text-align:center;">
              <!-- Logo mark -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto 18px;">
                <tr>
                  <td style="
                    width:56px;height:56px;
                    background:linear-gradient(135deg,#D1FF52 0%,#a8d400 100%);
                    border-radius:14px;
                    text-align:center;vertical-align:middle;
                    font-size:26px;font-weight:900;color:#0d0820;
                    letter-spacing:-1px;
                    line-height:56px;
                  ">O</td>
                </tr>
              </table>
              <p style="margin:0 0 6px;font-size:10px;font-weight:700;letter-spacing:3.5px;text-transform:uppercase;color:#D1FF52;">
                New Project Enquiry
              </p>
              <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;line-height:1.2;">
                Oriture
              </h1>
              <p style="margin:6px 0 0;font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:1.5px;text-transform:uppercase;">
                Software Agency
              </p>
            </td>
          </tr>

          <!-- Lime accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#D1FF52 0%,#b8e600 60%,#e0ffaa 100%);"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#111118;padding:36px 40px;">

              <!-- Intro -->
              <p style="margin:0 0 6px;font-size:20px;font-weight:700;color:#ffffff;line-height:1.3;">
                You've got a new message 👋
              </p>
              <p style="margin:0 0 28px;font-size:14px;color:rgba(255,255,255,0.5);line-height:1.6;">
                Submitted via the contact form on
                <a href="https://oriture.co" style="color:#D1FF52;text-decoration:none;font-weight:600;">oriture.co</a>.
              </p>

              <!-- Info cards -->
              <table width="100%" cellpadding="0" cellspacing="0">
                ${renderRow("Full Name", name)}
                ${company ? renderRow("Company", company) : ""}
                ${phone ? renderRow("Phone", phone) : ""}
                ${renderRow("Email", `<a href="mailto:${email}" style="color:#7c3aed;text-decoration:none;font-weight:600;">${email}</a>`)}
                ${service ? renderRow("Service Requested", service) : ""}
                ${budget ? renderRow("Project Budget", budget) : ""}
              </table>

              <!-- Project details -->
              ${
                details?.trim()
                  ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px;">
                <tr>
                  <td style="
                    background:rgba(255,255,255,0.04);
                    border:1px solid rgba(255,255,255,0.08);
                    border-left:4px solid #D1FF52;
                    border-radius:10px;
                    padding:18px 20px;
                  ">
                    <p style="margin:0 0 8px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#D1FF52;">
                      Project Details
                    </p>
                    <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.8);line-height:1.75;white-space:pre-wrap;">${escapeHtml(details)}</p>
                  </td>
                </tr>
              </table>`
                  : ""
              }

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}?subject=Re: Your enquiry to Oriture"
                       style="
                         display:inline-block;
                         background:#0d0820;
                         color:#D1FF52;
                         text-decoration:none;
                         font-size:14px;
                         font-weight:700;
                         letter-spacing:0.3px;
                         padding:14px 36px;
                         border-radius:999px;
                       ">
                      Reply to ${name.split(" ")[0]} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0d0d14;border-radius:0 0 16px 16px;padding:22px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.07);">
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.3);line-height:1.7;">
                This email was automatically generated by the Oriture contact form.<br/>
                © ${new Date().getFullYear()} Oriture · <a href="https://oriture.co" style="color:rgba(255,255,255,0.3);text-decoration:none;">oriture.co</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;

    await transporter.sendMail({
      from: `"Oriture" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New Enquiry from ${name}${company ? ` · ${company}` : ""}`,
      html,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("[contact/route] SMTP error:", err);
    return Response.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}

/* ── helpers ── */
function renderRow(label, value) {
  return `
    <tr>
      <td style="padding:0 0 12px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="
              background:rgba(255,255,255,0.05);
              border:1px solid rgba(255,255,255,0.08);
              border-radius:10px;
              padding:12px 16px;
            ">
              <p style="margin:0 0 3px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.35);">${label}</p>
              <p style="margin:0;font-size:14px;color:#ffffff;font-weight:600;">${value}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
