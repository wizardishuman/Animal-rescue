// controllers/incidentController.js
import Incident from '../models/incident.model.js';

export const createIncident = async (req, res) => {
  const { title, description, location, date } = req.body;

  if (!title || !description || !location || !date) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newIncident = new Incident({
      title,
      description,
      location,
      date,
    });

    await newIncident.save();

    res.status(201).json({
      message: 'Incident reported successfully',
      incident: newIncident,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error reporting incident' });
  }
};
export const getAllIncidents = async (req, res) => {
    try {
      const incidents = await Incident.find();
      res.status(200).json(incidents);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching incidents' });
    }
  };