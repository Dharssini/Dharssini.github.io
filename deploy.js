import ghPages from 'gh-pages';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

ghPages.publish(
    path.join(__dirname, 'dist'),
    {
        branch: 'gh-pages',
        dotfiles: true,
        nojekyll: true,
        // Remove .gitignore from the deployed branch so it doesn't filter out .md files
        beforeAdd: async (git) => {
            await git.rm(['-f', '--ignore-unmatch', '.gitignore']).catch(() => { });
        },
        src: ['**/*', 'blogs/*.md', 'blogs/**'],
    },
    (err) => {
        if (err) {
            console.error('Deploy failed:', err);
            process.exit(1);
        } else {
            console.log('Successfully deployed!');
        }
    }
);
