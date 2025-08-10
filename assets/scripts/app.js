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
        { name: "Alvarez, Samuel Jared Marcaida", gradeSection: "Grade 12 - Babbage", gender: "Male", lrn: "123123123123", guardianNumber: "21312", adviser: "123123", photo: "/assets/photos/sassa.jpg", offenses: { minor: 2, major: 0, serious: 0 }, actions: "Verbal Warning", penalty: "1 day suspension", dateOfOffense: "2023-01-15", teacher: "Ms. Reyes" },
        { name: "Bacsa, John Carlo Paradilla", gradeSection: "Grade 12 - Babbage", gender: "Bading", lrn: "10863566627", guardianNumber: "09887654567", adviser: "Vicente F. Porto", photo: "", offenses: { minor: 0, major: 1, serious: 0 }, actions: "Written Warning", penalty: "3 days suspension", dateOfOffense: "2023-02-01", teacher: "Mr. Tan" },
        { name: "Basit, Samuel Magnaye", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 1, major: 0, serious: 1 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2023-03-10", teacher: "Ms. Santos" },
        { name: "Bautista, Keith Martin Villano", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 3, major: 1, serious: 0 }, actions: "Detention", penalty: "2 weeks suspension", dateOfOffense: "2023-04-20", teacher: "Mr. Lim" },
        { name: "Briton, Justine Raver Dolandolan", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2023-05-05", teacher: "Ms. Rivera" },
        { name: "Bungay, Axel Wayne Diana", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 2, major: 2, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2023-06-15", teacher: "Mr. Chen" },
        { name: "Capina, Brent Lenard Quiozon", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 1, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2023-07-25", teacher: "Ms. Tan" },
        { name: "Casimero, John Howard Barcelona", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 1 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2023-08-10", teacher: "Mr. Lim" },
        { name: "Chumacera, Rayver Cholo-", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 1, major: 1, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2023-09-15", teacher: "Ms. Santos" },
        { name: "Dailo, Ivan James Malto", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2023-10-20", teacher: "Mr. Chen" },
        { name: "De Guzman, Jaycris Alcala", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 2, major: 0, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2023-11-05", teacher: "Ms. Tan" },
        { name: "De Luna, Calvin Kurt", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 1, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2023-12-10", teacher: "Mr. Lim" },
        { name: "Dela Cruz, Archie-", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 1, major: 0, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2024-01-15", teacher: "Ms. Santos" },
        { name: "Dela Cruz, Tere Nigel Eliseo", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-02-20", teacher: "Mr. Chen" },
        { name: "Dela Vega, Alexandrew Cabrera", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 3, major: 0, serious: 0 }, actions: "Detention", penalty: "2 weeks suspension", dateOfOffense: "2024-03-05", teacher: "Ms. Tan" },
        { name: "Floralde, Bryan Jay Cezar", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 2, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2024-04-10", teacher: "Mr. Lim" },
        { name: "Guzon, Clint Josh Estrella", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-05-15", teacher: "Ms. Santos" },
        { name: "Magnaye, Rian Thom Garcia", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 1, major: 1, serious: 1 }, actions: "Detention", penalty: "2 weeks suspension", dateOfOffense: "2024-06-20", teacher: "Mr. Chen" },
        { name: "Manalo, Paul Ian Trinidad", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-07-25", teacher: "Ms. Tan" },
        { name: "Monticer, Mark Raven", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 2, major: 0, serious: 0 }, actions: "Detention", penalty: "1 week suspension", dateOfOffense: "2024-08-10", teacher: "Mr. Lim" },
        { name: "Payson, Yexel Welgas", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-09-15", teacher: "Ms. Santos" },
        { name: "Pias, Nathan Angello Jabon", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-10-20", teacher: "Mr. Chen" },
        { name: "Reyes, Raver Jaidel Bautista", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 1, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-11-05", teacher: "Ms. Tan" },
        { name: "Ros, Kent Tehran Dayo", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Taruza, PF Valiente", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Tortal, Roderick Grajo", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Valdez, Angelo Octoman", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Abragon, Sofia Irah Carandang", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Batangon, Janelle Grace Kakiputan", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Doce, Joyce Margarette Acuna", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Marasigan, Aimee Tatlonghari", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Masilungan, Jhenniel Faith Belen", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Masilungan, Katrina Angela Perez", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Pacer, Alyssa Eunice Corpuz", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Vergara, Mae Ashley Louise Bandola", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Alcala, Bien Mar Briones", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Bahoy, Harich Fule", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Briones, Rogie Ivan Pasia", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Buan, Creighton Yael De Jesus", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Buan, Mark Andrei Soltabo", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Cabatian, Jerwin Ferrer", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Castillo, Khian Mike Jay Macasaet", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Comia, John Carlo Gunda", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Delgado, Matt Zedrick Depositario", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Gonzales, Jeremie Mendoza", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Ilao, Andrei Amarante", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Laylo, Aron James Mercado", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Pacia, Danzel Raver Bartolo", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Lacuata, Erielle Lyn Manalo", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Oseo, Aliyah Koulyn Futo", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo: "", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
        { name: "Paderagao, Janina Cernicula", gradeSection: "Grade 12 - Babbage", gender: "", lrn: "", guardianNumber: "", adviser: "", photo:"", address: "Bukal sur, candelaria, quezon", offenses: { minor: 0, major: 0, serious: 0 }, actions: "None", penalty: "None", dateOfOffense: "2024-12-10", teacher: "Mr. Lim" },
    ];

    students = students.map(student => {
  const noOffense = student.offenses.minor === 0 && student.offenses.major === 0 && student.offenses.serious === 0;
  const defaultPhoto = '/TWA1.jpeg';
  return {
    ...student,
    photo: student.photo || defaultPhoto,
    ...(noOffense
      ? { dateOfOffense: "N/A", teacher: "N/A" }
      : { teacher: "Louie Leocadio" }
    )
  };
});

    //Suggestions
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
                    <div class="student-info-row">
                        <div class="student-info-main">
                        <strong>${student.name}</strong><br>
                        <span>${student.gradeSection}</span><br>
                        <span>Gender: ${student.gender}</span><br>
                        <span>LRN: ${student.lrn}</span><br>
                        <span>Guardian Number: ${student.guardianNumber}</span><br>
                        <span>Adviser: ${student.adviser}</span><br>
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
                        <div class="student-photo">
                        <img src="${student.photo}" alt="Photo of ${student.name}">
                        </div>
                    </div>
                    `;
                resultsDiv.appendChild(studentDiv);
            });
        }
    });
});
