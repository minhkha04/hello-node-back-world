import resend from '../utils/resend.js';
import { EMAIL_CONFIG } from '../constants/email.constant.js';
import { renderHtmlTemplate } from './template.service.js';

export const sendMail = async (type, to, templateData = {}) => {
    const config = EMAIL_CONFIG[type];
    if (!config) throw new Error(`Email type "${type}" không hợp lệ`);

    const html = renderHtmlTemplate(config.template, templateData);

    return await resend.emails.send({
        from: 'RagDB <no-rely@techleaf.pro>',
        to,
        subject: config.subject,
        html,
    });
};
