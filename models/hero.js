const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: String,
    avator: {
        type: String
    },
    banner: {
        type: String
    },
    title: {
        type: String
    },
    categories: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }],
    scores: {
        difficult: Number,
        skills: Number,
        attack: Number,
        survive: Number
    },
    skills: [{
        icon: String,
        name: String,
        description: String,
        tips: String,
        delay: String,
        cost: String,
    }],
    items1: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Items'
    }],
    items2: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Items'
    }],
    usageTips: {
        type: String
    },
    battleTips: {
        type: String
    },
    teamTips: {
        type: String
    },
    partners: [{
        hero: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Hero'
        },
        description: String
    }],
    restraint: [{
        hero: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Hero'
        },
        description: String
    }],
    continent: [{
        hero: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Hero'
        },
        description: String
    }],
    inscriptionChoice: [{
        inscription: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Inscription'
        }
    }]
})
module.exports = mongoose.model('Hero', schema, 'heroes')