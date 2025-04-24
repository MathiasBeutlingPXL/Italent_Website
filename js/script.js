const seminars = [
    {
        title: "Gluo: Multicloud workshop",
        description: "Een workshop georganiseerd door Gluo waarin stap voor stap een multicloud infrastructuur wordt opgezet, van manuele deployment tot een volledig geautomatiseerde pipeline.",
        location: "Gluo - G410 Elfde Liniestraat 24 Gebouw G Hasselt, 3500 België",
        date: "2024-04-23T09:00:00",
        duration: "09:00 - 12:00"
    },
    {
        title: "Ordina: CI/CD use case",
        description: "Een workshop door Ordina over CI/CD en Infrastructure as Code, met focus op het automatiseren van software- en infrastructuurveranderingen via pipelines, Docker, Kubernetes en versiebeheer.",
        location: "Ordina - G410 Elfde Liniestraat 24 Gebouw G Hasselt, 3500 België",
        date: "2024-04-16T09:00:00",
        duration: "09:00 - 12:00"
    },
    {
        title: "Toreon: Ethical hacking",
        description: "Workshop door Toreon waarin samen met een ethical hacker beveiligingschallenges oplost werden en vervolgens de kwetsbaarheden in de code werde geanalyseerd.",
        location: "Toreon - G410 Elfde Liniestraat 24 Gebouw G Hasselt, 3500 België",
        date: "2024-03-19T09:00:00",
        duration: "09:00 - 12:00"
    },
    {
        title: "Easi: Microsoft Cloud: Azure & Intone",
        description: "Introductie door Easi over de mogelijkheden van Microsoft Cloud, met focus op Azure en Intune voor beheer en beveiliging in de cloudomgeving.",
        location: "Easi - G410 Elfde Liniestraat 24 Gebouw G Hasselt, 3500 België",
        date: "2024-03-12T08:30:00",
        duration: "08:30 - 12:30"
    },
    {
        title: "The value hub: How to facilitate a workshop",
        description: "Seminarie van The Value Hub over het faciliteren van workshops met de Design Sprint methodologie, gericht op het snel ontwikkelen van softwareoplossingen.",
        location: "The value hub - Corda 7 - CC713",
        date: "2024-12-04T13:30:00",
        duration: "13:30 - 17:30"
    },
    {
        title: "Cegeka: Enterprise Architecture",
        description: "Seminarie door Cegeka over het creëren van stabiliteit in snel veranderende technologische omgevingen en het effect van disruptieve technologieën.",
        location: "Cegeka - Corda 7 CC712",
        date: "2024-11-20T13:30:00",
        duration: "13:30 - 17:30"
    },
    {
        title: "IBM: Discover the meeting point of GenAI, Prompt Engineering and Quantum Computing",
        description: "Seminarie door IBM over de synergie tussen Generative AI en Quantum Computing, met verschillende toepassingen.",
        location: "IBM - Corda 7 CC712",
        date: "2024-11-06T13:15:00",
        duration: "13:15 - 16:00"
    },
    {
        title: "Nocomputer: prompt engineering",
        description: "Seminarie over prompt engineering waarin wordt geleerd hoe over Large Language Models, prompting en valkuilen.",
        location: "IBM - Corda 7 CC714",
        date: "2024-12-23T13:30:00",
        duration: "13:30 - 17:30"
    },
    {
        title: "Web Development Best Practices",
        type: "Workshop",
        description: "Leer de beste praktijken voor moderne webontwikkeling",
        location: "PXL Hasselt",
        startDate: "2025-05-15T14:00:00",
        endDate: "2025-05-15T17:00:00",
        duration: "3 uur"
    }
];

function formatDate(dateString) {
    const options = { 
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('nl-BE', options);
}

function createSeminarCard(seminar) {
    const card = document.createElement('div');
    card.className = 'seminar-card';
    
    const now = new Date();
    const seminarStartDate = new Date(seminar.startDate);
    if (seminarStartDate < now) {
        card.classList.add('verleden');
    }

    card.innerHTML = `
        <h2>${seminar.title}</h2>
        <div class="type">${seminar.type}</div>
        <div class="date">${formatDate(seminar.startDate)} - ${formatDate(seminar.endDate)}</div>
        <div class="time">${seminar.duration}</div>
        <div class="location">${seminar.location}</div>
        <div class="description">${seminar.description}</div>
    `;

    return card;
}

function filterSeminars(filter) {
    const container = document.querySelector('.seminars-container');
    container.innerHTML = '';

    const now = new Date();
    const filteredSeminars = seminars.filter(seminar => {
        const seminarStartDate = new Date(seminar.startDate);
        if (filter === 'komend') return seminarStartDate >= now;
        if (filter === 'verleden') return seminarStartDate < now;
        return true;
    });

    filteredSeminars.forEach(seminar => {
        container.appendChild(createSeminarCard(seminar));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initiële weergave
    filterSeminars('alles');

    // Voeg event listeners toe aan filterknoppen
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterSeminars(button.dataset.filter);
        });
    });
}); 