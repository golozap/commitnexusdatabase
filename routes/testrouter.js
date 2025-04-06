const express = require('express');
const router = express.Router();
const Folder = require('../models/test.js'); // Your Folder model

// 🔹 Create folder or subfolder
router.post('/create', async (req, res) => {
  try {
    const { name, code, parentFolder } = req.body;

    const newFolder = new Folder({
      name,
      code,
      parentFolder: parentFolder || null,
    });

    const savedFolder = await newFolder.save();

    // If it’s a subfolder, push to parent’s subfolders
    if (parentFolder) {
      await Folder.findByIdAndUpdate(parentFolder, {
        $push: { subfolders: savedFolder._id },
      });
    }

    res.status(201).json(savedFolder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Get folder with subfolders & files
router.get('/:id', async (req, res) => {
  try {
    const folder = await Folder.findById(req.params.id)
      .populate('subfolders')
      .exec();

    if (!folder) return res.status(404).json({ message: 'Folder not found' });

    res.json(folder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Add file to a folder
router.post('/:id/add-file', async (req, res) => {
  try {
    const { file } = req.body;

    const folder = await Folder.findById(req.params.id);
    if (!folder) return res.status(404).json({ message: 'Folder not found' });

    folder.files.push(file);
    await folder.save();

    res.json(folder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
