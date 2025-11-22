//TIPS PAGE 

document.addEventListener('DOMContentLoaded', () => {
	
	const tipItems = document.querySelectorAll('.tip-item');
	
	tipItems.forEach(item => {
		const header = item.querySelector('.tip-header');
		
		header.addEventListener('click', () => {
			
			const isExpanded = item.classList.contains('expanded');
			
			
			tipItems.forEach(otherItem => {
				if (otherItem !== item) {
					otherItem.classList.remove('expanded');
				}
			});
			
			
			if (isExpanded) {
				item.classList.remove('expanded');
			} else {
				item.classList.add('expanded');
			}
		});
	});
});
