const activities = [
    {
        title: "Projectweek 2TIN",
        type: "Projectweek",
        description: "Tijdens deze projectweek kregen we veel informatie over reflectie en hoe je als team moet werken.",
        location: "PXL - Elfde Liniestraat 24 Gebouw G Hasselt, 3500 België",
        startDate: "2024-02-12",
        endDate: "2024-02-16"
    },
    {
        title: "Webinar: Contact - Hoe communiceren? - i.s.m. TRIXXO",
        type: "POP-sessie 3TIN",
        description: "Een online meeting waarin werd uitgelegd hoe men het best kan communiceren op een werkplek, en vooral voor een sollicitatiegesprek.",
        location: "Online",
        startDate: "2025-03-18",
        endDate: "2025-03-18",
        time: "19:00 - 21:00"
    },
    {
        title: "Assertiviteit sessie 2: Verbale communicatie",
        type: "POP-sessie 3TIN",
        description: "Een interactieve les waarin werd uitgelegd hoe met het beste assertief kan overkomen zonder dat dit belastend wordt. Er werd ook gekeken naar de studenten hun problemen en hier werden oplossingen voor gezocht.",
        location: "Gebouw B (Elfde Liniestraat) – lokaal EB101",
        startDate: "2025-02-18",
        endDate: "2025-02-18",
        time: "16:00 - 18:00"
    },
    {
        title: "POP-sessie: My Team and I",
        type: "POP-sessie 3TIN",
        description: "Een reeks teambuilding activiteiten met het projectteam, zoals een zeil volledig omdraaien terwijl iedereen er opstaat.",
        location: "PXL,  iSpace",
        startDate: "2024-10-09",
        endDate: "2024-10-09",
        time: "15:30"
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
        <div class="activity-content">
            <div class="type">${activity.type}</div>
            <h2>${activity.title}</h2>
            <div class="date">${formatDate(activity.startDate)}${activity.endDate !== activity.startDate ? ` – ${formatDate(activity.endDate)}` : ''}</div>
            ${activity.time ? `<div class="time">${activity.time}</div>` : ''}
            <div class="location">${activity.location}</div>
            <div class="description">${activity.description}</div>
            ${activity.title.includes("Assertiviteit") ? `
            <a href="Assertiviteitstraining.html" class="details-link">Lees meer</a>
            ` : ''}
        </div>
    `;

    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.activities-container');
    
    if (container) {
        activities.forEach(activity => {
            container.appendChild(createActivityCard(activity));
        });
    }
});