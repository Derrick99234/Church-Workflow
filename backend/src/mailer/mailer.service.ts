/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendEmailDto } from './mail.interface';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class MailerService {
  constructor(private readonly configService: ConfigService) {}
  mailTransport() {
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      auth: {
        user: this.configService.get<string>('USER'),
        pass: this.configService.get<string>('PASSWORD'),
      },
      tls: {
        rejectUnauthorized: false, // Disable certificate validation
      },
    });

    return transporter;
  }

  async sendEmail(dto: SendEmailDto) {
    const { from, subject, html } = dto;

    const transport = this.mailTransport();

    const options: Mail.Options = {
      from: from,
      to: [
        {
          name: this.configService.get<string>('APP_NAME'),
          address: this.configService.get<string>('EMAIL'),
        },
      ],
      subject,
      html,
    };

    try {
      const result = await transport.sendMail(options);
      return result;
    } catch (error) {
      console.error('Error sending email:', error.message);
      console.error('Full error details:', error);
      throw new Error(`Failed to send email: ${error.message}`);
    }
  }
}
