export const MAIN_NAV = [
	{ href: '#about', label: 'About' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#education', label: 'Education' },
	{ href: '#currently-learning', label: 'Learning' },
	{ href: '/resume/Henry_Zeng_2025Resume.pdf', label: 'Resume', isDownload: true }
] as const;

export type NavLink = (typeof MAIN_NAV)[number];
