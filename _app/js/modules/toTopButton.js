export default function backToTop() {
	const showButtonOnPx = 100;
	const backToTopButton = document.querySelector('.to-top__button')

	const scrollContainer = () => {
		return document.documentElement || document.body;
	};

	document.addEventListener('scroll', () => {
		if (scrollContainer().scrollTop > showButtonOnPx) {
			backToTopButton.classList.remove('hidden');
		} else {
			backToTopButton.classList.add('hidden');
		}
	})

	const goToTop = () => {
		document.body.scrollIntoView({
			behavior: 'smooth',
		});
	};
	
	backToTopButton.addEventListener('click', goToTop);
}