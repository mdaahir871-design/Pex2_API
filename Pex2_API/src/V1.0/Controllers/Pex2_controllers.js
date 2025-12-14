const data = require("../Data/Pex2_Data");

// Hent alle saker
const getAllCases = (req, res) => {
    res.json(data.getAllCases());
};

// Hent sak med ID
const getCaseById = (req, res) => {
    const foundCase = data.getCaseById(req.params.id);
    if (!foundCase) {
        return res.status(404).json({ message: "Sak ikke funnet" });
    }
    res.json(foundCase);
};

// Opprett ny sak
const createCase = (req, res) => {
    const { title, description, status } = req.body;

    if (!title || !description || !status) {
        return res.status(400).json({ message: "Alle felt må fylles ut" });
    }

    const newCase = data.addCase({ title, description, status });
    res.status(201).json(newCase);
};

// Oppdater sak
const updateCase = (req, res) => {
    const updated = data.updateCaseById(req.params.id, req.body);
    if (!updated) {
        return res.status(404).json({ message: "Sak ikke funnet" });
    }
    res.json(updated);
};

// Slett sak
const deleteCase = (req, res) => {
    const success = data.deleteCaseById(req.params.id);
    if (!success) {
        return res.status(404).json({ message: "Sak ikke funnet" });
    }
    res.json({ message: "Sak slettet" });
};

module.exports = {
    getAllCases,
    getCaseById,
    createCase,
    updateCase,
    deleteCase
};
