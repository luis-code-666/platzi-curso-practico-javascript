
// const notes = [
//     {
//         course: "Educación Física",
//         note: 3,
//         credit: 2,
//     },
//     {
//         course: "Programación",
//         note: 6,
//         credit: 1,
//     },
//     {
//         course: "Finanzas personales",
//         note: 7,
//         credit: 5,
//     },
// ];
[]
{}
function calculadoraPromedioPonderado(notes) {
    const notesWithCredit = notes.map(function (noteObject) {
        return noteObject.note * noteObject.credit;
    });
    const sumOfNotesWithCredit = notesWithCredit.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );
    const credits = notes.map(function (noteObject) {
        return noteObject.credit;
    });
    
    const sumOfCredits = credits.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );
    
    const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
    return promedioPonderadoNotasConCreditos;
    
}