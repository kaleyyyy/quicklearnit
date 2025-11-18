document.addEventListener('DOMContentLoaded', function () {
	var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReduced) {
		document.querySelector('.homepage')?.classList.add('animate');
		var lang = document.querySelector('.language');
		if (lang) { lang.style.visibility = 'visible'; lang.textContent = lang.dataset.full || lang.textContent; }
		return;
	}

	setTimeout(function () {
		document.querySelector('.homepage')?.classList.add('animate');
	}, 60);

	var titleFadeDuration = 800;
	var delayAfterFade = 140;
	var languageEl = document.querySelector('.language');
	if (languageEl) {
		var full = languageEl.textContent.trim();
		languageEl.dataset.full = full;
		languageEl.textContent = '';
		languageEl.style.visibility = 'visible';

		setTimeout(function () {
			languageEl.classList.add('typing');
			var i = 0;
			var speed = 95;
			function typeChar() {
				if (i <= full.length - 1) {
					languageEl.textContent += full.charAt(i);
					i++;
					setTimeout(typeChar, speed);
				} else {
					languageEl.classList.remove('typing');
				}
			}
			typeChar();
		}, titleFadeDuration + delayAfterFade);
	}

	setTimeout(function () {
		var heart = document.querySelector('.italy-heart');
		if (heart && !prefersReduced) {
			heart.classList.add('pulse');
		}
	}, 500);
});


document.addEventListener('DOMContentLoaded', function () {
	var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (prefersReduced) return;

	var swooshes = document.querySelectorAll('.swoosh');
	if (!swooshes.length) return;

	function triggerSwooshes() {
		
		placeSwooshesNonOverlapping(Array.from(swooshes));

		
		swooshes.forEach(function (swoosh, i) {
			var delay = Number(swoosh.dataset.delay || (i * 320));
			animateSwoosh(swoosh, delay);
		});

		function animateSwoosh(swoosh, delay) {
			setTimeout(function () {
				var path = swoosh.querySelector('path');
				if (!path) return;

				var len = path.getTotalLength();
				path.style.strokeDasharray = len;
				path.style.strokeDashoffset = len;
				path.style.transition = 'none';

				swoosh.classList.add('active');
				// disable CSS-based swoosh animation so we control opacity/position in JS
				swoosh.style.animation = 'none';
				// ensure visible at start
				swoosh.style.opacity = 1;

				// compute a small random movement vector so each swoosh drifts while fading
				var rect = swoosh.getBoundingClientRect();
				var initialLeft = parseInt(swoosh.style.left || Math.round(rect.left), 10) || Math.round(rect.left);
				var initialTop = parseInt(swoosh.style.top || Math.round(rect.top), 10) || Math.round(rect.top);
				var maxDX = Math.max(80, Math.round(window.innerWidth * 0.12));
				var maxDY = Math.max(60, Math.round(window.innerHeight * 0.08));
				var dx = Math.round((Math.random() * 2 - 1) * maxDX);
				var dy = Math.round((Math.random() * 2 - 1) * maxDY);

				var brush = swoosh.querySelector('.brush');
				if (!brush) {
					brush = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
					brush.setAttribute('class', 'brush');
					brush.setAttribute('r', 6);
					brush.setAttribute('fill', path.getAttribute('stroke') || '#000');
					swoosh.appendChild(brush);
				}

				var duration = 2600; // ms
				var start = performance.now();

				function frame(now) {
					var t = Math.max(0, now - start);
					var progress = Math.min(1, t / duration);
					path.style.strokeDashoffset = (1 - progress) * len;
					// move the whole svg a little and fade out over the same duration
					var curLeft = Math.round(initialLeft + dx * progress);
					var curTop = Math.round(initialTop + dy * progress);
					swoosh.style.left = curLeft + 'px';
					swoosh.style.top = curTop + 'px';
					// opacity: stay visible during draw then fade to 0 by the end
					swoosh.style.opacity = String(Math.max(0, 1 - progress));
					try {
						var pt = path.getPointAtLength(len * progress);
						brush.setAttribute('cx', pt.x);
						brush.setAttribute('cy', pt.y);
					} catch (e) {}
					if (progress < 1) requestAnimationFrame(frame);
				}

				requestAnimationFrame(function (ts) { start = ts; requestAnimationFrame(frame); });

				// cleanup for this swoosh after the draw duration + small buffer
				setTimeout(function () {
					path.style.transition = 'none';
					path.style.strokeDashoffset = len;
					var b = swoosh.querySelector('.brush'); if (b) b.remove();
					swoosh.classList.remove('active');
				}, duration + 300);
			}, delay);
		}

		function placeSwooshesNonOverlapping(swooshArray) {
			var viewportW = window.innerWidth;
			var viewportH = window.innerHeight;

			var protectedEls = Array.from(document.querySelectorAll('.title-block, .app-title, .language, .start-btn, .italy-wrapper'));
			var protectedRects = protectedEls.map(function (el) {
				var r = el.getBoundingClientRect();
				var pad = Math.max(80, Math.round(Math.min(viewportW, viewportH) * 0.12));
				return { left: r.left - pad, top: r.top - pad, right: r.right + pad, bottom: r.bottom + pad };
			});

			var assignedRects = [];

			function rectsOverlap(a, b) { return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom); }

			function tryPlaceRandom(swoosh, attempts) {
				attempts = attempts || 120;
				var b = swoosh.getBoundingClientRect();
				
				var w = Math.max(48, Math.round(b.width) || Math.min(viewportW * 0.42, 380));
				var h = Math.max(48, Math.round(b.height) || Math.min(viewportH * 0.42, 380));
				var effW = Math.round(w * 0.8);
				var effH = Math.round(h * 0.8);

				var minLeft = Math.max(-Math.round(w * 0.5), -Math.round(viewportW * 0.15));
				var maxLeft = Math.min(Math.round(viewportW - effW * 0.2), Math.round(viewportW + Math.round(w * 0.3)));
				var minTop = Math.max(-Math.round(h * 0.5), -Math.round(viewportH * 0.15));
				var maxTop = Math.min(Math.round(viewportH - effH * 0.2), Math.round(viewportH + Math.round(h * 0.3)));

				if (maxLeft <= minLeft) { minLeft = 0; maxLeft = Math.max(1, viewportW - effW); }
				if (maxTop <= minTop) { minTop = 0; maxTop = Math.max(1, viewportH - effH); }

				for (var t = 0; t < attempts; t++) {
					var left = Math.floor(minLeft + Math.random() * (maxLeft - minLeft));
					var top = Math.floor(minTop + Math.random() * (maxTop - minTop));
					var rect = { left: left, top: top, right: left + w, bottom: top + h };
					var bad = protectedRects.some(function (p) { return rectsOverlap(rect, p); }) || assignedRects.some(function (a) { return rectsOverlap(rect, a); });
					if ((rect.right < -0.25 * viewportW) || (rect.left > viewportW + 0.25 * viewportW) || (rect.bottom < -0.25 * viewportH) || (rect.top > viewportH + 0.25 * viewportH)) bad = true;
					if (!bad) {
						assignedRects.push(rect);
						swoosh.style.left = left + 'px';
						swoosh.style.top = top + 'px';
						swoosh.style.right = '';
						swoosh.style.bottom = '';
						return true;
					}
				}
				return false;
			}

			var candidates = [
				{ x: 0.04, y: 0.06 }, { x: 0.72, y: 0.06 }, { x: 0.04, y: 0.36 }, { x: 0.72, y: 0.36 },
				{ x: 0.04, y: 0.66 }, { x: 0.72, y: 0.66 }, { x: 0.38, y: 0.22 }, { x: 0.38, y: 0.62 },
				{ x: 0.18, y: 0.5 }, { x: 0.56, y: 0.12 }, { x: 0.56, y: 0.78 }, { x: 0.28, y: 0.12 }
			];

			function shuffle(arr) { for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }

			swooshArray.forEach(function (swoosh) {
				swoosh.style.left = '';
				swoosh.style.top = '';
				swoosh.style.right = '';
				swoosh.style.bottom = '';

				var placed = tryPlaceRandom(swoosh, 72);
				if (!placed) {
					var shuffled = shuffle(candidates.slice());
					for (var i = 0; i < shuffled.length && !placed; i++) {
						var c = shuffled[i];
						var left = Math.round(c.x * viewportW);
						var top = Math.round(c.y * viewportH);
						var rect = { left: left, top: top, right: left + (swoosh.clientWidth || 200), bottom: top + (swoosh.clientHeight || 200) };
						if (!protectedRects.some(function (p) { return rectsOverlap(rect, p); }) && !assignedRects.some(function (a) { return rectsOverlap(rect, a); })) {
							swoosh.style.left = left + 'px';
							swoosh.style.top = top + 'px';
							swoosh.style.right = '';
							swoosh.style.bottom = '';
							assignedRects.push(rect);
							placed = true;
						}
					}
				}
			});
		}
	}

	setTimeout(function () {
		triggerSwooshes();
		setInterval(triggerSwooshes, 5000);
	}, 2000);
});
