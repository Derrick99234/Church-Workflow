/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendEmailDto } from './mail.interface';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('/send_email')
  async sendMail(@Body() waitListDetails: Record<string, string>) {
    const dto: SendEmailDto = {
      from: {
        name: 'CHURCH WORKFLOW',
        address: 'mailtrap@demomailtrap.com',
      },
      subject: 'Church Workflow',
      html: `
        <h2>Church workflow waitlist details</h2>
        <p>This message is from church workflow website</p>
        <p><strong>Name</strong>: ${waitListDetails.name}</p>
        <p><strong>Email</strong>: ${waitListDetails.email}</p>
        <p><strong>Church</strong>: ${waitListDetails.church}</p>
      `,
    };
    return await this.mailerService.sendEmail(dto);
  }
}
