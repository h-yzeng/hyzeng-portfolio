export const SOCIAL_LINKS = [
	{
		name: 'GitHub',
		href: 'https://github.com/h-yzeng',
		icon: 'github',
		ariaLabel: 'Visit my GitHub profile'
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/henry-zeng-/',
		icon: 'linkedin',
		ariaLabel: 'Connect with me on LinkedIn'
	},
	{
		name: 'Email',
		href: 'mailto:thyzeng@gmail.com',
		icon: 'email',
		ariaLabel: 'Send me an email'
	}
] as const;

export type SocialLink = (typeof SOCIAL_LINKS)[number];
