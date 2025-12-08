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
        status: "gjennomført"
    }
];

// Hent alle saker
const getAllObjects = () => {
    return supportCases;
};

// Add object

const addObject = (object) => {
    const id = objects.length ? objects[objects.length - 1].id + 1 : 1; // Ensure the ID is unique by checking the length of the movies array
    const newObject = { id, ...object };
    objects.push(newObject);
    return newObject;
};

// Get object by id

const getObjectById = (id) => {
    id = parseInt(id);
    if (isNaN(id)) return null; // Return null if id is not a number
    return objects.find((object) => object.id === id); // Ensure the id is a number with parseInt
};

// Delete object by id
const deleteObjectById = (id) => {
    id = parseInt(id); // Ensure the ID is a number
    if (isNaN(id)) return false; // Handle invalid IDs

    // makes index = id of movie
    const index = objects.findIndex((object) => object.id === id);

    if (index === -1) return false;

    objects.splice(index, 1);
    return true;
};

// Update object by id
const updateObjectById = (id, updatedData) => {
    id = parseInt(id);

    if (isNaN(id)) return null;

    const index = objects.findIndex((object) => object.id === id);
    if (index === -1) return null;

    objects[index] = { ...objects[index], ...updatedData };
    return objects[index];
};

module.exports = {
    getAllObjects,
    addObject,
    getObjectById,
    deleteObjectById,
    updateObjectById
};
