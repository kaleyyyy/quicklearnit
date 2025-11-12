// Simplified modules.js — no branching
(function(){
	document.addEventListener('DOMContentLoaded', function(){
		var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (!prefersReduced) {
			document.querySelectorAll('.swoosh').forEach(function (s) {
				try {
					var p = s.querySelector('path');
					if (!p) return;
					var L = p.getTotalLength();
					p.style.strokeDasharray = L;
					p.style.strokeDashoffset = L;
					setTimeout(function () { p.style.transition = 'stroke-dashoffset 700ms ease'; p.style.strokeDashoffset = '0'; }, 40);
				} catch (e) { }
			});
		}

		// Main module click: first click expands, second click navigates
		document.querySelectorAll('.main-module').forEach(function(m){
			m.addEventListener('click', function(e){
				e.stopPropagation();
				if(m.disabled) return;
				var pn = m.closest('.path-node');
				if(!pn) return;

				if(pn.classList.contains('expanded')){
					// Second click navigates
					window.location.href = 'lesson.html?module=' + encodeURIComponent(m.dataset.unit || '1');
					return;
				}

				// Collapse others
				document.querySelectorAll('.path-node.expanded').forEach(function(o){
					if(o !== pn) o.classList.remove('expanded');
				});

				// Expand this one
				pn.classList.add('expanded');
			});
		});

		// Tips modal functionality
		var tipsModal = document.getElementById('tips-modal');
		var tipsBtn = document.getElementById('tips-btn');
		var closeBtn = document.getElementById('close-modal');

		if (tipsBtn && tipsModal) {
			tipsBtn.addEventListener('click', function() {
				tipsModal.classList.add('active');
			});
		}

		if (closeBtn && tipsModal) {
			closeBtn.addEventListener('click', function() {
				tipsModal.classList.remove('active');
			});
		}

		// Close modal when clicking outside
		if (tipsModal) {
			tipsModal.addEventListener('click', function(e) {
				if (e.target === tipsModal) {
					tipsModal.classList.remove('active');
				}
			});
		}

		// Close modal with Escape key
		document.addEventListener('keydown', function(e) {
			if (e.key === 'Escape' && tipsModal && tipsModal.classList.contains('active')) {
				tipsModal.classList.remove('active');
			}
		});
	});
})();
