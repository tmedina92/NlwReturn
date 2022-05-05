import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4cc97db14bb73c",
    pass: "09a501f88df5ad"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Thâmis Medina <thamismedina@gmail.com>',
      subject,
      html: body,
    });
  };
}