/** @type {import('next').NextConfig} */

const basePath = '/malcolm_dzimati_personal_site';

module.exports = {
  output: 'export',
  basePath,
  assetPrefix: `${basePath}/`, // Note the trailing slash
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};