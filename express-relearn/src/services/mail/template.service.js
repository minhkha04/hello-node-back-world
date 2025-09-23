import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const renderHtmlTemplate = (templateFile, data = {}) => {
    const filePath = path.join(__dirname, `../templates/${templateFile}.html`);
    let html = fs.readFileSync(filePath, 'utf8');

    for (const [key, value] of Object.entries(data)) {
        const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
        html = html.replace(regex, value);
    }

    return html;
};
