const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  parentFolder: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder', default: null },
  subfolders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Folder' }],
  files: [{ name: String, content: String }]
});

module.exports = mongoose.model('Folder', folderSchema);
