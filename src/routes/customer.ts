////// This is just for an example

import {Router} from 'express'

const router = Router();

// Create
router.post('/add', (req, res) => {
    res.json({message: 'Hello World'})
})

// Update
router.put('/update', (req, res) => {
    res.json({message: 'Hello World'})
})

// Retrive
router.get('/', (req, res) => {
    res.json({message: 'Hello World'})
})

// Delete
router.delete('/delete', (req, res) => {
    res.json({message: 'Hello World'})
})


export default router;