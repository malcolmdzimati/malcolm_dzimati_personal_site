/** @type {import('next').NextConfig} */

module.exports = {
  output: 'export',
  basePath: '/malcolm_dzimati_personal_site',
  assetPrefix: '/malcolm_dzimati_personal_site/', // Note the trailing slash
  env: {
    NEXT_PUBLIC_BASE_PATH: '/malcolm_dzimati_personal_site',
  },
};