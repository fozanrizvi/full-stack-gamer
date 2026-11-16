// Generates the favicon set and the share-card image from the brand sources in public/.
// Run with `npm run assets` after replacing fsg-avatar.png or fsg-youtube-banner.png.
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const avatar = path.join(root, "public", "fsg-avatar.png");
const banner = path.join(root, "public", "fsg-youtube-banner.png");
const appDir = path.join(root, "src", "app");

// ensureAlpha: ICO decoders (including Next's) only accept RGBA PNGs.
const squarePng = (size) =>
  sharp(avatar).resize(size, size).ensureAlpha().png().toBuffer();

/** Wraps PNG images in an ICO container (PNG-in-ICO, supported by every current browser). */
function toIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + 16 * images.length;
  const entries = images.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size, 0);
    entry.writeUInt8(size, 1);
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });

  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(
  icoSizes.map(async (size) => ({ size, data: await squarePng(size) })),
);

// Next.js picks these up by file name and adds the <link> tags.
await writeFile(path.join(appDir, "favicon.ico"), toIco(icoImages));
await writeFile(path.join(appDir, "icon.png"), await squarePng(192));
await writeFile(path.join(appDir, "apple-icon.png"), await squarePng(180));

// 2560x1440 banner -> 1200x630 centre crop for OpenGraph and Twitter cards.
await sharp(banner)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .png()
  .toFile(path.join(root, "public", "og.png"));

console.log(
  "Wrote src/app/favicon.ico, icon.png, apple-icon.png and public/og.png",
);
