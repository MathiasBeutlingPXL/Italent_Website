const activities = [
    {
        title: "Pitch Please Hackathon powered by Cegeka",
        type: "Hackathon",
        description: "Een hackaton waarin we een team kregen, hiermee teambuilding deden en vervolgens een maatschappelijk probleem moesten uitwerken.",
        location: "Cegeka: Corda 3 Corda Campus Kempische Steenweg 293, Hasselt",
        date: "2023-12-01",
        time: "16:00 – 00:00",
        image: "../images/pitch-please.jpg",
        imageAlt: "Studenten werken samen tijdens de Pitch Please Hackathon"
    },
    {
        title: "Hackavond",
        type: "Workshop",
        description: "Een hackingavond waarin we in een groep CTF-oefeningen deden om hackingproblemen op te lossen.",
        location: "PXL, iSpace, Corda 7",
        date: "2023-12-07",
        time: "18:00-21:00",
        image: "../images/picture3.jpg",
        imageAlt: "Studenten tijdens de hackavond workshop"
    },
    {
        title: "Ballonvaart",
        type: "Analyse-opdracht",
        description: "Voor het vak Software Analysis van Nathalie Fuchs gingen we naar de ballonsvaardersdag 2023 om op basis hiervan een contextdiagram, een BUC-diagram en een domeinmodel te maken.",
        location: "PXL/Upconsulting, 't Bau-Huis, Slachthuisstraat 60 Sint Niklaas",
        date: "2023-11-25",
        time: "13:00-18:00"
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
            <img src="${activity.image}" alt="${activity.imageAlt}" loading="lazy">
        </div>
        ` : ''}
        <div class="activity-content">
            <div class="type">${activity.type}</div>
            <h2>${activity.title}</h2>
            <div class="date">${formatDate(activity.date)}</div>
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