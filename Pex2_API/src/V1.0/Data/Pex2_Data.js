// supportsaker
let supportCases = [
    {
        id: 1,
        title: "Nettverket fungerer ikke",
        description: "Klarer ikke koble meg til internett",
        status: "Åpen"
    },
    {
        id: 2,
        title: "PC starter ikke",
        description: "Skjermen forblir svart når jeg trykker på power",
        status: "Under arbeid"
    },
    {
        id: 3,
        title: "Printer fungerer ikke",
        description: "Får feilmelding: 'Paper Jam' selv uten papir.",
        status: "Gjennomført"
    }
];

// Hent alle saker
const getAllCases = () => {
    return supportCases;
};

// Legg til sak
const addCase = (newCase) => {
    const id = supportCases.length
        ? supportCases[supportCases.length - 1].id + 1
        : 1;

    const caseWithId = { id, ...newCase };
    supportCases.push(caseWithId);
    return caseWithId;
};

// Hent sak med ID
const getCaseById = (id) => {
    id = parseInt(id);
    if (isNaN(id)) return null;
    return supportCases.find(c => c.id === id);
};

// Slett sak
const deleteCaseById = (id) => {
    id = parseInt(id);
    const index = supportCases.findIndex(c => c.id === id);
    if (index === -1) return false;

    supportCases.splice(index, 1);
    return true;
};

// Oppdater sak
const updateCaseById = (id, updatedData) => {
    id = parseInt(id);
    const index = supportCases.findIndex(c => c.id === id);
    if (index === -1) return null;

    supportCases[index] = { ...supportCases[index], ...updatedData };
    return supportCases[index];
};

module.exports = {
    getAllCases,
    addCase,
    getCaseById,
    updateCaseById,
    deleteCaseById
};
