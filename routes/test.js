const upload = (app) => {
    app.post('/api/upload', (req, res) => {
        try {
            const file = req.files.file;
            if (!file) return res.status(401).json({ message: 'file is required!' })

            file.mv(`images/${file.name}`, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }

                res.json({ message: 'File uploaded successfully.', filePath: file.name });
            });

        } catch (error) {
            res.status(501).json({ message: 'Upload failed!' })
        }
    })
}

module.exports = upload