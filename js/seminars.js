const activities = [
    {
        title: "Gluo: Multicloud workshop",
        type: "Workshop",
        description: "Een workshop georganiseerd door Gluo waarin stap voor stap een multicloud infrastructuur wordt opgezet, van manuele deployment tot een volledig geautomatiseerde pipeline.",
        location: "Gluo - G410 Elfde Liniestraat 24 Gebouw G Hasselt, 3500 België",
        date: "2024-04-23",
        time: "09:00 - 12:00"
    },
    {
        title: "Ordina: CI/CD use case",
        type: "Workshop",
        description: "Een workshop door Ordina over CI/CD en Infrastructure as Code, met focus op het automatiseren van software- en infrastructuurveranderingen via pipelines, Docker, Kubernetes en versiebeheer.",
        location: "Ordina - G410 Elfde Liniestraat 24 Gebouw G Hasselt, 3500 België",
        date: "2024-04-16",
        time: "09:00 - 12:00"
    },
    {
        title: "Toreon: Ethical hacking",
        type: "Workshop",
        description: "Workshop door Toreon waarin samen met een ethical hacker beveiligingschallenges oplost werden en vervolgens de kwetsbaarheden in de code werde geanalyseerd.",
        location: "Toreon - G410 Elfde Liniestraat 24 Gebouw G Hasselt, 3500 België",
        date: "2024-03-19",
        time: "09:00 - 12:00"
    },
    {
        title: "Easi: Microsoft Cloud: Azure & Intone",
        type: "Workshop",
        description: "Introductie door Easi over de mogelijkheden van Microsoft Cloud, met focus op Azure en Intune voor beheer en beveiliging in de cloudomgeving.",
        location: "Easi - G410 Elfde Liniestraat 24 Gebouw G Hasselt, 3500 België",
        date: "2024-03-12",
        time: "08:30 - 12:30"
    },
    {
        title: "The value hub: How to facilitate a workshop",
        type: "Seminarie",
        description: "Seminarie van The Value Hub over het faciliteren van workshops met de Design Sprint methodologie, gericht op het snel ontwikkelen van softwareoplossingen.",
        location: "The value hub - Corda 7 - CC713",
        date: "2024-12-04",
        time: "13:30 - 17:30"
    },
    {
        title: "Cegeka: Enterprise Architecture",
        type: "Seminarie",
        description: "Seminarie door Cegeka over het creëren van stabiliteit in snel veranderende technologische omgevingen en het effect van disruptieve technologieën.",
        location: "Cegeka - Corda 7 CC712",
        date: "2024-11-20",
        time: "13:30 - 17:30"
    },
    {
        title: "IBM: Discover the meeting point of GenAI, Prompt Engineering and Quantum Computing",
        type: "Seminarie",
        description: "Seminarie door IBM over de synergie tussen Generative AI en Quantum Computing, met verschillende toepassingen.",
        location: "IBM - Corda 7 CC712",
        date: "2024-11-06",
        time: "13:15 - 16:00"
    },
    {
        title: "Nocomputer: prompt engineering",
        type: "Seminarie",
        description: "Seminarie over prompt engineering waarin wordt geleerd hoe over Large Language Models, prompting en valkuilen.",
        location: "IBM - Corda 7 CC714",
        date: "2024-12-23",
        time: "13:30 - 17:30"
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