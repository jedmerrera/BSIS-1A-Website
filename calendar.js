function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
}

const calendarData = [
    {
        month: "JANUARY 2026", startDay: 4, days: 31, 
        highlights: {23: 'bg-red'}, 
        events: [
            {week: "WEEK 1", desc: "<strong>JAN 16:</strong> START OF CLASSES"},
            {week: "WEEK 2", desc: "<span class='text-red'>JAN 23: Bulacan Day (Non-Working holiday)</span>"},
            {week: "WEEK 3", desc: ""}
        ]
    },
    {
        month: "FEBRUARY 2026", startDay: 0, days: 28, 
        highlights: {
            3: 'bg-red', 4: 'bg-pink', 5: 'bg-pink', 6: 'bg-pink', 7: 'bg-pink',
            9: 'bg-gray', 10: 'bg-gray', 11: 'bg-gray', 12: 'bg-gray', 13: 'bg-gray', 14: 'bg-gray',
            16: 'bg-green', 17: 'bg-red', 18: 'bg-red', 19: 'bg-green', 20: 'bg-green', 21: 'bg-green',
            26: 'bg-blue', 27: 'bg-blue', 28: 'bg-blue'
        }, 
        events: [
            {week: "WEEK 4", desc: "<span class='text-red'>FEB 3: Blas Ople Bulacan Day (Working Holiday)</span><br><span class='text-pink'>FEB 6-8: HM Week Celebration</span>"},
            {week: "WEEK 5", desc: "<ul><li><strong>FEB 9 TO 14:</strong> 1ST INSTALLMENT</li><li><span class='text-blue'>FEB 12-14: IT Week Celebration</span></li></ul>"},
            {week: "WEEK 6", desc: "<ul><li><span class='text-red'>FEB 17: CHINESE NEW YEAR (Tentative)</span></li><li><span class='text-red'>FEB 18: START OF RAMADAN (Tentative)</span></li><li><span class='text-green'>FEB 16, 19-22, 24-25: SUMMATIVE Examination</span></li></ul>"},
            {week: "WEEK 7", desc: "<strong>FEB 26-28 and MAR 1:</strong><br>LCC's 28th Founding Anniversary Celebration"}
        ]
    },
    {
        month: "MARCH 2026", startDay: 0, days: 31, 
        highlights: {1: 'bg-blue', 19: 'bg-yellow', 20: 'bg-yellow', 21: 'bg-yellow', 26: 'bg-green', 27: 'bg-green', 28: 'bg-green', 30: 'bg-red', 31: 'bg-red'}, 
        events: [
            {week: "WEEK 8", desc: "<strong>MAR 2 TO 7:</strong> 2ND INSTALLMENT"},
            {week: "WEEK 9", desc: ""},
            {week: "WEEK 10", desc: "<span class='text-brown'>BA WEEK: MAR 19-21</span>"},
            {week: "WEEK 11", desc: "<span class='text-green'>MAR 26-29: MIDTERM Examination</span>"},
            {week: "WEEK 12", desc: "<span class='text-red'>MAR 30 - APR 5: HOLY WEEK BREAK</span>"}
        ]
    },
    {
        month: "APRIL 2026", startDay: 3, days: 30, 
        highlights: {1: 'bg-red', 2: 'bg-red', 3: 'bg-red', 4: 'bg-red', 5: 'bg-red', 9: 'bg-red', 23: 'bg-brown', 24: 'bg-brown', 25: 'bg-brown'}, 
        events: [
            {week: "WEEK 12", desc: "<span class='text-red'>MAR 30 - APR 5: HOLY WEEK BREAK</span>"},
            {week: "WEEK 13", desc: "<strong>APR 6: Resumption of Regular Classes</strong><br><span class='text-red'>APR 9: ARAW NG KAGITINGAN (Holiday)</span>"},
            {week: "WEEK 14", desc: ""},
            {week: "WEEK 15", desc: "<span class='text-brown'>APR 23-25: CAD WEEK CELEBRATION</span>"},
            {week: "WEEK 16", desc: ""}
        ]
    },
    {
        month: "MAY 2026", startDay: 5, days: 31, 
        highlights: {1: 'bg-red', 4: 'bg-blue', 7: 'bg-green', 8: 'bg-green', 9: 'bg-green', 10: 'bg-green', 15: 'bg-darkblue', 20: 'bg-darkblue', 27: 'bg-darkblue'}, 
        events: [
            {week: "WEEK 16", desc: "<span class='text-red'>MAY 1: LABOR DAY (Holiday)</span><br><strong>MAY 2 TO 7:</strong> 3rd INSTALLMENT"},
            {week: "WEEK 17", desc: "<ul><li><strong>MAY 4:</strong> Deadline for Candidates for Graduation to Complete Academic Requirements</li><li><span class='text-green'>MAY 7-10: SEMI-FINAL Examination</span></li></ul>"},
            {week: "WEEK 18", desc: "<ul><li><strong>MAY 11-15:</strong> Last Week of Completion of Final Requirements</li><li><strong>MAY 15:</strong> Last Day of Classes</li></ul>"},
            {week: "", desc: "<strong>MAY 20:</strong> Deadline of Faculty Members' Submission of Grades"},
            {week: "", desc: "<ul><li><strong>MAY 25 TO JUN 1:</strong> 4th INSTALLMENT</li><li><strong>MAY 27:</strong> Deliberation of Division Heads for Final Lists of Candidates for Graduation</li></ul>"}
        ]
    },
    {
        month: "JULY 2026", startDay: 3, days: 31, highlights: {}, 
        events: [
            {week: "", desc: "<strong>JUL 29:</strong> RECOGNITION RITES 2026 (Tentative)"},
            {week: "", desc: "<strong>JUL 31:</strong> COMMENCEMENT EXERCISES 2026 (Tentative)"}
        ]
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('calendar-container');
    
    calendarData.forEach(data => {
        const card = document.createElement('div');
        card.className = 'month-card';

        const header = document.createElement('div');
        header.className = 'month-header';
        header.innerText = data.month;
        card.appendChild(header);

        const content = document.createElement('div');
        content.className = 'month-content';

                const gridWrapper = document.createElement('div');
        gridWrapper.className = 'calendar-grid-wrapper';
        const grid = document.createElement('div');
        grid.className = 'calendar-grid';

        ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].forEach((day, index) => {
            const dayDiv = document.createElement('div');
            dayDiv.className = `day-name ${index === 0 ? 'sun' : ''}`;
            dayDiv.innerText = day;
            grid.appendChild(dayDiv);
        });

        for (let i = 0; i < data.startDay; i++) {
            const empty = document.createElement('div');
            empty.className = 'date-cell empty';
            grid.appendChild(empty);
        }

        for (let i = 1; i <= data.days; i++) {
            const dateCell = document.createElement('div');
            dateCell.className = 'date-cell';
            if (data.highlights[i]) dateCell.classList.add(data.highlights[i]);
            dateCell.innerText = i;
            grid.appendChild(dateCell);
        }

        gridWrapper.appendChild(grid);
        content.appendChild(gridWrapper);

               const eventsWrapper = document.createElement('div');
        eventsWrapper.className = 'events-wrapper';
        data.events.forEach(ev => {
            const eventItem = document.createElement('div');
            eventItem.className = 'event-item';
            eventItem.innerHTML = `<div class="event-week">${ev.week}</div><div class="event-details">${ev.desc}</div>`;
            eventsWrapper.appendChild(eventItem);
        });

        content.appendChild(eventsWrapper);
        card.appendChild(content);
        container.appendChild(card);
    });
});