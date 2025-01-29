import styles from './page.module.css'

export default function Home() {
	return (
		<div className={`${styles.page} grid content-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}>
			<a href='/' className='text-blue-500'>
				Back to home
			</a>

			<div className='grid content-start gap-8'>
				<h1 className='text-5xl text-center'>About</h1>

				<h2 className='text-2xl'>Choices</h2>
				<ul>
					<li>Next.js</li>
					<li>
						With <a href='https://www.typescriptlang.org/'>TypeScript</a> (optional)
					</li>
					<li>No ESLint</li>
					<li>
						With <a href='https://tailwindcss.com/'>Tailwind CSS</a>
					</li>
					<li>
						With <a href='https://turbo.build/'>Turbopack</a> (Vercel's bundler)
					</li>
					<li>No SCSS by default (for now) since main style option is Tailwind, with CSS modules if needed</li>
					<li>
						No <a href='https://storybook.js.org/'>Storybook</a> (seems overkill)
					</li>
				</ul>
			</div>
		</div>
	)
}
