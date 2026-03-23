
const fs = require('fs');
const path = require('path');

const target = 'packages/mcp-server/node_modules/vra_iaas';
const absTarget = path.resolve(target);

console.log(`Checking ${absTarget}`);

if (fs.existsSync(absTarget)) {
    const stats = fs.lstatSync(absTarget);
    console.log(`Is symbolic link: ${stats.isSymbolicLink()}`);
    if (stats.isSymbolicLink()) {
        console.log(`Points to: ${fs.readlinkSync(absTarget)}`);
    } else {
        console.log('It is a real directory (not symlink).');
    }

    // Check if client.mjs exists inside
    const clientPath = path.join(absTarget, 'client.mjs'); // or dist/index.mjs?
    // checking package.json of vra_iaas to see main
    try {
        const pkg = require(path.join(absTarget, 'package.json'));
        console.log('Main:', pkg.main);
        console.log('Exports:', pkg.exports);
    } catch (e) { console.log("No package.json found"); }

} else {
    console.log('Does not exist');
}
