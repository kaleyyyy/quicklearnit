// displays user's learning progress using localStorage

document.addEventListener('DOMContentLoaded', () => {
	
	loadProgress();
	
	
	document.getElementById('reset-progress').addEventListener('click', resetProgress);
});


const units = [
	{ id: 1, name: 'Unit 1: Greetings', icon: 'fa-message' },
	{ id: 2, name: 'Unit 2: Numbers', icon: 'fa-calculator' },
	{ id: 3, name: 'Unit 3: Food', icon: 'fa-pizza-slice' },
	{ id: 4, name: 'Unit 4: Travel', icon: 'fa-plane' },
	{ id: 5, name: 'Unit 5: Family', icon: 'fa-people-group' },
	{ id: 6, name: 'Unit 6: Verbs', icon: 'fa-cart-shopping' }
];

// Get progress data from localStorage
function getProgressData() {
	const defaultData = {
		completedUnits: [],
		completedLessons: [],
		lessonsCompleted: 0,
		streak: 0,
		lastVisit: null,
		activities: []
	};
	
	const stored = localStorage.getItem('quicklearnit-progress');
	const parsed = stored ? JSON.parse(stored) : defaultData;
	if (!Array.isArray(parsed.completedLessons)) parsed.completedLessons = [];
	parsed.lessonsCompleted = parsed.completedLessons.length; // derive
	return parsed;
}

// Save progress data to localStorage
function saveProgressData(data) {
	localStorage.setItem('quicklearnit-progress', JSON.stringify(data));
}


function loadProgress() {
	const data = getProgressData();
	
	
	updateOverallProgress(data);
	
	
	displayUnitsBreakdown(data);
	
	
	displayRecentActivity(data);
}


function updateOverallProgress(data) {
	
	const lessonsPerUnit = 4;
	const totalUnits = units.length || 10;
	const totalLessons = totalUnits * lessonsPerUnit;
	const completedLessonsCount = Array.isArray(data.completedLessons) ? data.completedLessons.length : 0;
	const percentage = Math.round((completedLessonsCount / totalLessons) * 100);

	
	document.querySelector('.stat-percentage').textContent = `${percentage}%`;
	
	
	const circumference = 2 * Math.PI * 50; 
	const offset = circumference - (percentage / 100) * circumference;
	const ringFill = document.querySelector('.progress-ring-fill');
	if (ringFill) ringFill.style.strokeDashoffset = offset;

	
	const completedUnitsCount = Array.isArray(data.completedUnits) ? data.completedUnits.length : 0;
	document.getElementById('units-completed').textContent = `${completedUnitsCount} / ${totalUnits}`;
	document.getElementById('lessons-completed').textContent = completedLessonsCount;
	
	// Update streak
	const streakText = data.streak > 0 ? `${data.streak} days 🔥` : '0 days';
	document.getElementById('current-streak').textContent = streakText;
}

// Display units breakdown
function displayUnitsBreakdown(data) {
	const unitsList = document.getElementById('units-list');
	unitsList.innerHTML = '';
	
	// Helper function to get lesson keys for each unit
	function getUnitLessonKeys(unitId) {
		switch(unitId) {
			case 1: return ['greetings-overview','greetings-basic','greetings-intro','greetings-wellbeing'];
			case 2: return ['numbers-overview','numbers-basic','numbers-advanced','numbers-time'];
			case 3: return ['food-overview','food-produce','food-restaurant','food-drinks'];
			case 4: return ['travel-overview','travel-directions','travel-transport','travel-accommodation'];
			case 5: return ['family-overview','family-members','family-relationships','family-activities'];
			case 6: return ['verbs-overview','verbs-common','verbs-daily','verbs-past'];
			case 7: return ['colors-overview','colors-basic','clothing-items','clothing-descriptions'];
			case 8: return ['weather-overview','weather-conditions','seasons','temperature'];
			case 9: return ['shopping-overview','shopping-phrases','money-prices','at-store'];
			case 10: return ['health-overview','body-parts','feeling-sick','at-doctor'];
			default: return [];
		}
	}
	
	units.forEach(unit => {
		const isCompleted = data.completedUnits.includes(unit.id);
		
		// Calculate lesson progress for this unit
		const unitLessons = getUnitLessonKeys(unit.id);
		const completedCount = unitLessons.filter(lesson => data.completedLessons.includes(lesson)).length;
		const totalCount = unitLessons.length;
		const progressText = `${completedCount} / ${totalCount} lessons`;
		
		let statusText;
		if (isCompleted) {
			statusText = 'Completed ✓';
		} else if (completedCount > 0) {
			statusText = `In Progress (${progressText})`;
		} else {
			statusText = 'Not started';
		}
		
		const unitItem = document.createElement('div');
		unitItem.className = `unit-item ${isCompleted ? 'completed' : ''}`;
		
		unitItem.innerHTML = `
			<div class="unit-icon">
				<i class="fa-solid ${unit.icon}"></i>
			</div>
			<div class="unit-info">
				<div class="unit-name">${unit.name}</div>
				<div class="unit-status">${statusText}</div>
			</div>
			${isCompleted ? '<i class="fa-solid fa-circle-check unit-check"></i>' : ''}
		`;
		
		unitsList.appendChild(unitItem);
	});
}

// Display recent activity
function displayRecentActivity(data) {
	const activityList = document.getElementById('activity-list');
	
	if (!data.activities || data.activities.length === 0) {
		activityList.innerHTML = '<p class="empty-state">No activity yet. Start learning to see your progress!</p>';
		return;
	}
	
	activityList.innerHTML = '';
	

	const recentActivities = data.activities.slice(-5).reverse();
	
	recentActivities.forEach(activity => {
		const activityItem = document.createElement('div');
		activityItem.className = 'activity-item';
		
		const timeAgo = getTimeAgo(activity.timestamp);
		
		activityItem.innerHTML = `
			<div class="activity-icon">
				<i class="fa-solid ${activity.icon}"></i>
			</div>
			<div class="activity-info">
				<div class="activity-title">${activity.title}</div>
				<div class="activity-time">${timeAgo}</div>
			</div>
		`;
		
		activityList.appendChild(activityItem);
	});
}


function getTimeAgo(timestamp) {
	const now = Date.now();
	const diff = now - timestamp;
	
	const minutes = Math.floor(diff / 60000);
	const hours = Math.floor(diff / 3600000);
	const days = Math.floor(diff / 86400000);
	
	if (minutes < 1) return 'Just now';
	if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
	if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
	return `${days} day${days > 1 ? 's' : ''} ago`;
}

// Reset all progress
function resetProgress() {
	if (confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
		localStorage.removeItem('quicklearnit-progress');
		loadProgress();
		
		
		alert('Your progress has been reset!');
	}
}


window.completeUnit = function(unitId) {
	const data = getProgressData();
	
	if (!data.completedUnits.includes(unitId)) {
		data.completedUnits.push(unitId);
		data.lessonsCompleted += 1;
		
		
		const unit = units.find(u => u.id === unitId);
		if (unit) {
			data.activities.push({
				title: `Completed ${unit.name}`,
				icon: unit.icon,
				timestamp: Date.now()
			});
		}
		
		
		updateStreak(data);
		
		saveProgressData(data);
	}
};


function updateStreak(data) {
	const today = new Date().setHours(0, 0, 0, 0);
	const lastVisit = data.lastVisit ? new Date(data.lastVisit).setHours(0, 0, 0, 0) : null;
	
	if (!lastVisit) {
		data.streak = 1;
	} else {
		const daysDiff = Math.floor((today - lastVisit) / 86400000);
		
		if (daysDiff === 1) {
			// Consecutive day
			data.streak += 1;
		} else if (daysDiff > 1) {
			
			data.streak = 1;
		}
		
	}
	
	data.lastVisit = Date.now();
}
