document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.search-form');
    const input = document.querySelector('.search-input');
    const container = document.querySelector('.container');

    let suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'search-suggestions';
    container.insertBefore(suggestionsDiv, form.nextSibling);

    let resultsDiv = document.createElement('div');
    resultsDiv.className = 'search-results';
    container.appendChild(resultsDiv);

    let students = [
        { name: "Reyes, Raver Jaidel Bautista", gradeSection: "Grade 12 - Babbage", offenses: { minor: 2, major: 0, serious: 0 }, actions: "Verbal Warning", penalty: "1 day suspension", dateOfOffense: "2023-01-15", teacher: "Ms. Reyes" },
        { name: "Masilungan, Katrina Angela", gradeSection: "Grade 11 - Pascal", offenses: { minor: 0, major: 1, serious: 0 }, actions: "Written Warning", penalty: "3 days suspension", dateOfOffense: "2023-02-01", teacher: "Mr. Tan" },
        { name: "Capina, Brent", gradeSection: "Grade 10 - Turing", offenses: { minor: 1, major: 0, serious: 1 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2023-03-10", teacher: "Ms. Santos" },
        { name: "Zuckerberg, Mark", gradeSection: "Grade 9 - Lovelace", offenses: { minor: 3, major: 1, serious: 0 }, actions: "Detention", penalty: "2 weeks suspension", dateOfOffense: "2023-04-20", teacher: "Mr. Lim" },
        { name: "Ansay, Ann", gradeSection: "Grade 12 - Babbage", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2023-05-05", teacher: "Ms. Rivera" },
        { name: "Patin, Kevin Arnold", gradeSection: "Grade 11 - Pascal", offenses: { minor: 2, major: 2, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2023-06-15", teacher: "Mr. Chen" },
        { name: "Seguerra, Harold", gradeSection: "Grade 10 - Turing", offenses: { minor: 1, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2023-07-25", teacher: "Ms. Tan" },
        { name: "Aquino, Zhianne", gradeSection: "Grade 9 - Lovelace", offenses: { minor: 0, major: 0, serious: 1 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2023-08-10", teacher: "Mr. Lim" },
        { name: "Caponpon, Joseph Ivan Miguel", gradeSection: "Grade 12 - Babbage", offenses: { minor: 1, major: 1, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2023-09-15", teacher: "Ms. Santos" },
        { name: "Apordo, Chaterlyn Jamella", gradeSection: "Grade 11 - Pascal", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2023-10-20", teacher: "Mr. Chen" },
        { name: "Talisayon, Mia Angela Mhielle", gradeSection: "Grade 10 - Turing", offenses: { minor: 2, major: 0, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2023-11-05", teacher: "Ms. Tan" },
        { name: "Suayan, Daniel Naruto", gradeSection: "Grade 9 - Lovelace", offenses: { minor: 0, major: 1, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2023-12-10", teacher: "Mr. Lim" },
        { name: "De Marco, Mac", gradeSection: "Grade 12 - Babbage", offenses: { minor: 1, major: 0, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2024-01-15", teacher: "Ms. Santos" },
        { name: "Marquez, Matthew John", gradeSection: "Grade 11 - Pascal", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-02-20", teacher: "Mr. Chen" },
        { name: "Hospecio, Olivia Genevieve", gradeSection: "Grade 10 - Turing", offenses: { minor: 3, major: 0, serious: 0 }, actions: "Detention", penalty: "2 weeks suspension", dateOfOffense: "2024-03-05", teacher: "Ms. Tan" },
        { name: "Pulido, Jack Mackarell", gradeSection: "Grade 9 - Lovelace", offenses: { minor: 0, major: 2, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2024-04-10", teacher: "Mr. Lim" },
        { name: "Pagkaliwagan, Ma. Agatha Jade", gradeSection: "Grade 12 - Babbage", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-05-15", teacher: "Ms. Santos" },
        { name: "Cantos, Benjamin Charles Derrick", gradeSection: "Grade 11 - Pascal", offenses: { minor: 1, major: 1, serious: 1 }, actions: "Detention", penalty: "2 weeks suspension", dateOfOffense: "2024-06-20", teacher: "Mr. Chen" },
        { name: "De Ramos, Lily Jade Precious", gradeSection: "Grade 10 - Turing", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-07-25", teacher: "Ms. Tan" },
        { name: "Masilungan, Anna Dorothea", gradeSection: "Grade 9 - Lovelace", offenses: { minor: 2, major: 0, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2024-08-10", teacher: "Mr. Lim" },
        { name: "Masilungan, John Rafael", gradeSection: "Grade 12 - Babbage", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-09-15", teacher: "Ms. Santos" },
        { name: "Asilo, Zhaira", gradeSection: "Grade 11 - Pascal", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-10-20", teacher: "Mr. Chen" },
        { name: "Marcos, Elizabeth", gradeSection: "Grade 10 - Turing", offenses: { minor: 1, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-11-05", teacher: "Ms. Tan" },
        { name: "Dimaunahan, David Johnson", gradeSection: "Grade 9 - Lovelace", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" }
    ];

    students = students.map(student => {
      const noOffense = student.offenses.minor === 0 && student.offenses.major === 0 && student.offenses.serious === 0;
      if (noOffense) {
        return {
          ...student,
          dateOfOffense: "N/A",
          teacher: "N/A"
        };
      } else {
        return {
          ...student,
          teacher: "Louie Leocadio"
        };
      }
    });

    //Suggestionds
    input.addEventListener('input', function () {
        const query = input.value.trim().toLowerCase();
        suggestionsDiv.innerHTML = '';

        //kapag walang nakalagay
        if (!query) return;

        //kapag may laman
        const suggestions = students.filter(student => student.name.toLowerCase().includes(query));
        if (suggestions.length > 0) {
            suggestions.forEach(student => {
                const suggestionItem = document.createElement('div');
                suggestionItem.className = 'suggestion-item';
                suggestionItem.textContent = student.name;
                suggestionItem.addEventListener('mousedown', function (e) {
                    e.preventDefault();
                    input.value = student.name;
                    suggestionsDiv.innerHTML = '';
                });
                suggestionsDiv.appendChild(suggestionItem);
            });
        }
    });

    input.addEventListener('blur', function () {
        setTimeout(() => suggestionsDiv.innerHTML = '', 100);
    });



    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = input.value.trim().toLowerCase();
        resultsDiv.innerHTML = '';
        suggestionsDiv.innerHTML = '';

        //walang laman
        if (!query) return;
        const matches = students.filter(student => student.name.toLowerCase().includes(query));
        if (matches.length === 0) {
            resultsDiv.innerHTML = '<p class="no-results">No student found.</p>';
        } else {
            matches.forEach(student => {
                const studentDiv = document.createElement('div');
                studentDiv.className = 'student-result';
                // Determine if there are no offenses
                const noOffense = student.offenses.minor === 0 && student.offenses.major === 0 && student.offenses.serious === 0;
                let detailsHtml = '';
                if (!noOffense) {
                    detailsHtml = `
                        <div class="violation-details">
                            <span><b>Action:</b> ${student.actions}</span><br>
                            <span><b>Penalty:</b> ${student.penalty}</span><br>
                            <span><b>Date of Offense:</b> ${student.dateOfOffense}</span><br>
                            <span><b>${student.teacher === 'Violator Handler' ? 'Violator Handler' : 'Teacher'}:</b> ${student.teacher}</span>
                        </div>
                    `;
                }
                studentDiv.innerHTML = `
                    <div class="student-info">
                        <strong>${student.name}</strong><br>
                        <span>${student.gradeSection}</span><br>
                        <div class="offenses">
                            <span>Offenses:</span>
                            <ul>
                                <li>Minor: ${student.offenses.minor}</li>
                                <li>Major: ${student.offenses.major}</li>
                                <li>Serious: ${student.offenses.serious}</li>
                            </ul>
                        </div>
                        ${detailsHtml}
                    </div>
                `;
                resultsDiv.appendChild(studentDiv);
            });
        }
    });
});
