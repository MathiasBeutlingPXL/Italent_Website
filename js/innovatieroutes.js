const activities = [
    {
        title: "Innovatieroute genAI",
        type: "Innovatieroute",
        description: "Een driedaagse innovatieroute georganiseerd door Flexso van een diepgaande introductie in Generative AI en Prompt Engineering, met focus op de toepassing binnen bedrijfscontext.",
        location: "Flexso - PXL Digital Elfde-Liniestraat 25 - gebouw G Hasselt, 3500 België",
        startDate: "2024-09-24",
        endDate: "2024-10-15",
        time: "08:30 - 17:00"
    },
    {
        title: "PXL Hackathon @PXL in samenwerking met PXL Ergo/Healthcare",
        type: "Hackaton",
        description: "Leerspel ontwikkelen voor mensen met verstandelijke beperking in een groep van 4",
        location: "PXL Ergo/Healthcare - Corda 7 CC712",
        startDate: "2025-01-10",
        endDate: "2025-01-11",
        time: "09:00 – 17:00"
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
            <div class="date">${formatDate(activity.startDate)} - ${formatDate(activity.endDate)}</div>
            <div class="time">${activity.time}</div>
            <div class="location">${activity.location}</div>
            <div class="description">${activity.description}</div>
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