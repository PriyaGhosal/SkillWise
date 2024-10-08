// Fetch upcoming events from the server
fetch('/api/upcoming-events')
    .then(response => response.json())
    .then(events => {
        const upcomingEventsList = document.getElementById('upcoming-events-list');
        events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');
            eventDiv.innerHTML = `
                <h3>${event.title}</h3>
                <p>Date: ${event.date}</p>
                <p>Time: ${event.time}</p>
                <button class="sign-up-btn">Sign Up</button>
            `;
            upcomingEventsList.appendChild(eventDiv);
        });
    });

// Fetch past events from the server
fetch('/api/past-events')
    .then(response => response.json())
    .then(events => {
        const pastEventsList = document.getElementById('past-events-list');
        events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('past-event');
            eventDiv.innerHTML = `
                <h3>${event.title}</h3>
                <p>Date: ${event.date}</p>
                <a href="${event.recordingUrl}" class="watch-recording-btn">Watch Recording</a>
            `;
            pastEventsList.appendChild(eventDiv);
        });
    });
