const { Schema, model } = require('mongoose');

const projectSchema = Schema(
    {
        title: {
            type: String,
            required: [true, 'title field is required'],
        },
        description: {
            type: String,
            required: [true, 'description field is required'],
        },
        location: {
            type: String,
        },
        project_type: {
            type: String
        },
        association: {
            type: String
        },
        year_started: {
            type: Number,
        },
        year_completed: {
            type: Number,
        },
        image_path: {
            type: [String]
        },
    },
    { timestamps: true }
);

module.exports = model('Project', projectSchema);