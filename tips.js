// Tips page - expandable grammar tips

document.addEventListener('DOMContentLoaded', () => {
	// Get all tip items
	const tipItems = document.querySelectorAll('.tip-item');
	
	tipItems.forEach(item => {
		const header = item.querySelector('.tip-header');
		
		header.addEventListener('click', () => {
			// Toggle expanded state
			const isExpanded = item.classList.contains('expanded');
			
			// Close all other tips
			tipItems.forEach(otherItem => {
				if (otherItem !== item) {
					otherItem.classList.remove('expanded');
				}
			});
			
			// Toggle current tip
			if (isExpanded) {
				item.classList.remove('expanded');
			} else {
				item.classList.add('expanded');
			}
		});
	});
});
