// Progress page - displays user's learning progress using localStorage

document.addEventListener('DOMContentLoaded', () => {
	// Initialize progress data
	loadProgress();
	
	// Reset button handler
	document.getElementById('reset-progress').addEventListener('click', resetProgress);
});

// Units data
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
		lessonsCompleted: 0,
		streak: 0,
		lastVisit: null,
		activities: []
	};
	
	const stored = localStorage.getItem('quicklearnit-progress');
	return stored ? JSON.parse(stored) : defaultData;
}

// Save progress data to localStorage
function saveProgressData(data) {
	localStorage.setItem('quicklearnit-progress', JSON.stringify(data));
}

// Load and display progress
function loadProgress() {
	const data = getProgressData();
	
	// Update overall stats
	updateOverallProgress(data);
	
	// Display units breakdown
	displayUnitsBreakdown(data);
	
	// Display recent activity
	displayRecentActivity(data);
}

// Update overall progress circle and stats
function updateOverallProgress(data) {
	const totalUnits = 6;
	const completedCount = data.completedUnits.length;
	const percentage = Math.round((completedCount / totalUnits) * 100);
	
	// Update percentage text
	document.querySelector('.stat-percentage').textContent = `${percentage}%`;
	
	// Update progress ring
	const circumference = 2 * Math.PI * 50; // radius = 50
	const offset = circumference - (percentage / 100) * circumference;
	document.querySelector('.progress-ring-fill').style.strokeDashoffset = offset;
	
	// Update stats
	document.getElementById('units-completed').textContent = `${completedCount} / ${totalUnits}`;
	document.getElementById('lessons-completed').textContent = data.lessonsCompleted;
	
	// Update streak
	const streakText = data.streak > 0 ? `${data.streak} days 🔥` : '0 days';
	document.getElementById('current-streak').textContent = streakText;
}

// Display units breakdown
function displayUnitsBreakdown(data) {
	const unitsList = document.getElementById('units-list');
	unitsList.innerHTML = '';
	
	units.forEach(unit => {
		const isCompleted = data.completedUnits.includes(unit.id);
		
		const unitItem = document.createElement('div');
		unitItem.className = `unit-item ${isCompleted ? 'completed' : ''}`;
		
		unitItem.innerHTML = `
			<div class="unit-icon">
				<i class="fa-solid ${unit.icon}"></i>
			</div>
			<div class="unit-info">
				<div class="unit-name">${unit.name}</div>
				<div class="unit-status">${isCompleted ? 'Completed' : 'Not started'}</div>
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
	
	// Show last 5 activities
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

// Calculate time ago from timestamp
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
		
		// Show confirmation
		alert('Your progress has been reset!');
	}
}

// Public function to mark unit as complete (called from lesson page)
window.completeUnit = function(unitId) {
	const data = getProgressData();
	
	if (!data.completedUnits.includes(unitId)) {
		data.completedUnits.push(unitId);
		data.lessonsCompleted += 1;
		
		// Add activity
		const unit = units.find(u => u.id === unitId);
		if (unit) {
			data.activities.push({
				title: `Completed ${unit.name}`,
				icon: unit.icon,
				timestamp: Date.now()
			});
		}
		
		// Update streak
		updateStreak(data);
		
		saveProgressData(data);
	}
};

// Update streak based on last visit
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
			// Streak broken
			data.streak = 1;
		}
		// If daysDiff === 0, same day, don't change streak
	}
	
	data.lastVisit = Date.now();
}
