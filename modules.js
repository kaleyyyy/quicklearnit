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

			// (Vine animation removed)
		}

		// Update progress stat from localStorage
		updateProgressStat();
		markCompletedModules();

		// DEBUG: unlock all modules for testing (remove in production)
		try {
			document.querySelectorAll('.path-node[data-status="locked"]').forEach(function(pn){
				pn.setAttribute('data-status','unlocked');
				// enable any disabled module buttons inside
				pn.querySelectorAll('button[disabled]').forEach(function(b){ b.removeAttribute('disabled'); });
				// remove lock icons if present
				pn.querySelectorAll('.lock-icon').forEach(function(li){ li.remove(); });
			});
		} catch(e) { /* ignore in non-DOM env */ }

		// Main module click: single click expands, double click goes to overview
		document.querySelectorAll('.main-module').forEach(function(m){
			var clickTimer = null;
			
			m.addEventListener('click', function(e){
				e.stopPropagation();
				if(m.disabled) return;
				
				var pn = m.closest('.path-node');
				if(!pn) return;
				
				// Clear any existing timer
				if(clickTimer) {
					clearTimeout(clickTimer);
					clickTimer = null;
					
					// This is a double click - navigate to unit overview
					var unitId = m.dataset.unit;
					if(unitId) {
						window.location.href = 'lesson.html?unit=' + encodeURIComponent(unitId);
					}
					return;
				}
				
				// Set timer for single click
				clickTimer = setTimeout(function() {
					clickTimer = null;
					
					// Single click - toggle expansion
					var isExpanded = pn.classList.contains('expanded');

					// Collapse all others
					document.querySelectorAll('.path-node.expanded').forEach(function(o){
						if(o !== pn) o.classList.remove('expanded');
					});

					// Toggle current
					if (isExpanded) {
						pn.classList.remove('expanded');
					} else {
						pn.classList.add('expanded');
					}
				}, 250); // 250ms delay to detect double click
			});
		});

		// Sub lesson click: navigate to lesson
		document.querySelectorAll('.sub-lesson').forEach(function(sl){
			sl.addEventListener('click', function(e){
				e.stopPropagation();
				var lessonId = sl.getAttribute('data-lesson');
				console.log('Clicked lesson ID:', lessonId); // Debug
				if(lessonId) {
					window.location.href = 'lesson.html?lesson=' + encodeURIComponent(lessonId);
				}
			});
		});

		// Click outside to collapse
		document.addEventListener('click', function(e) {
			if (!e.target.closest('.path-node')) {
				document.querySelectorAll('.path-node.expanded').forEach(function(pn){
					pn.classList.remove('expanded');
				});
			}
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

function updateProgressStat() {
	try {
		var statEl = document.querySelector('.progress-stat .stat-value');
		if (!statEl) return;
		var raw = localStorage.getItem('quicklearnit-progress');
		if (!raw) {
			// No progress saved -> show 0%
			statEl.textContent = '0%';
			return;
		}
		var data = JSON.parse(raw);
		if (!data || !Array.isArray(data.completedLessons)) {
			statEl.textContent = '0%';
			return;
		}
		var totalLessons = 24; // 6 units * 4 lessons (overview + 3 subs)
		var pct = Math.round((data.completedLessons.length / totalLessons) * 100);
		statEl.textContent = pct + '%';
	} catch (e) { /* ignore */ }
}

function markCompletedModules() {
	try {
		var raw = localStorage.getItem('quicklearnit-progress');
		if (!raw) return;
		var data = JSON.parse(raw);
		if (!data || !Array.isArray(data.completedUnits)) return;
		var completed = new Set(data.completedUnits.map(String));
		document.querySelectorAll('.main-module').forEach(function(btn){
			var unit = btn.getAttribute('data-unit');
			if (unit && completed.has(unit)) {
				btn.classList.add('module-complete');
			}
		});
	} catch(e) { /* ignore */ }
}
