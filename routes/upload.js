const upload = (app) => {
    app.post('/api/upload', (req, res) => {
        try {
            if (!req.files || !req.files.file) {
                return res.status(400).json({ message: 'File is required.' });
            }

            const file = req.files.file;
            const fileName = file.name;

            file.mv(`images/${fileName}`, (err) => {
                if (err) {
                    return res.status(500).json({ message: 'Error uploading the file.' });
                }

                res.json({ message: 'File uploaded successfully.', filePath: `images/${fileName}` });
            });
        } catch (error) {
            res.status(500).json({ message: 'Upload failed.' });
        }
    });
}

module.exports = upload