/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { SendEmailDto } from './mail.interface';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('/send_email')
  async sendMail() {
    const dto: SendEmailDto = {
      from: { name: 'Lucy', address: 'pshubomi@gmail.ccom' },
      recipients: [
        {
          name: 'Olatunbosun Olashubomi',
          address: 'olatunbosunolashubomi@gmail.com',
        },
      ],
      subject: 'Church Workflow',
      html: '<h2>Welcome</h2><p>This message is from church workflow website</p>',
    };
    return await this.mailerService.sendEmail(dto);
  }
}
