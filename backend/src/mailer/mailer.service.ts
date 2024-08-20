/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer from 'nodemailer';
import { SendEmailDto } from './mail.interface';
import Mail from 'nodemailer/lib/mailer';

@Injectable()
export class MailerService {
  constructor(private readonly configService: ConfigService) {}
  mailTransport() {
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('PORT'),
      secure: true,
      auth: {
        user: this.configService.get<string>('USERNAME'),
        pass: this.configService.get<string>('PASSWORD'),
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    return transporter;
  }

  async sendEmail(dto: SendEmailDto) {
    const { from, recipients, subject, html, placeholderReplacements } = dto;

    const transport = this.mailTransport();

    const options: Mail.Options = {
      from: from ?? {
        name: this.configService.get<string>('APP_NAME'),
        address: this.configService.get<string>('EMAIL'),
      },
      to: recipients,
      subject,
      html,
    };

    try {
      const result = await transport.sendMail(options);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
