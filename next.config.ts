/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    typedRoutes: true, // se quiser usar rotas tipadas, ok deixar
  },
};

module.exports = nextConfig;
