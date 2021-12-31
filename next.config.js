// @ts-check

/**
 * @type { import('next').NextConfig }
 **/

module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["image.tmdb.org"],
	},

	eslint: {
		// Warning: Dangerously allow production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};
