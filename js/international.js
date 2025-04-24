const activities = [
    {
        title: "Studentenreis Linz-Hagenberg-Salzburg",
        type: "Studiereis",
        description: "Een reis waarin we in Linz naar het Ars Electronica Centrum geweest zijn en naar de universiteit van Salzburg.",
        location: "Linz, Hagenberg en Salzburg",
        startDate: "2025-03-19T00:00:00",
        endDate: "2025-03-23T00:00:00",
        duration: "5 dagen",
        image: "../images/ars-electronica.webp",
        imageAlt: "Ars Electronica Center 's nachts met kleurrijke LED-gevel weerspiegeld in de Donau"
    }
];

function formatDate(dateString) {
    const options = { 
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('nl-BE', options);
}

function createActivityCard(activity) {
    const card = document.createElement('div');
    card.className = 'activity-card';

    card.innerHTML = `
        ${activity.image ? `
        <div class="activity-image">
            <img src="${activity.image}" alt="${activity.imageAlt}" loading="lazy" onerror="console.error('Afbeelding laad fout:', this.src)">
        </div>
        ` : ''}
        <div class="activity-content">
            <div class="type">${activity.type}</div>
            <h2>${activity.title}</h2>
            <div class="date">${formatDate(activity.startDate)} - ${formatDate(activity.endDate)}</div>
            <div class="time">${activity.duration}</div>
            <div class="location">${activity.location}</div>
            <div class="description">${activity.description}</div>
            <a href="BuitenlandseReis.html" class="details-link">Lees meer</a>
        </div>
    `;

    return card;
}

function filterActivities(filter) {
    const container = document.querySelector('.activities-container');
    container.innerHTML = '';

    const now = new Date();
    const filteredActivities = activities.filter(activity => {
        const activityStartDate = new Date(activity.startDate);
        if (filter === 'komend') return activityStartDate >= now;
        if (filter === 'verleden') return activityStartDate < now;
        return true;
    });

    filteredActivities.forEach(activity => {
        container.appendChild(createActivityCard(activity));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.activities-container');
    
    if (container && activities.length > 0) {
        container.appendChild(createActivityCard(activities[0]));
    }

    filterActivities('alles');

    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterActivities(button.dataset.filter);
        });
    });
});