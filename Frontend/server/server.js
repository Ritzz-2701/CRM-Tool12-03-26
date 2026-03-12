import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main health check endpoint
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        message: 'Arthouse CRM API is running successfully.',
        version: '1.0.0'
    });
});

// Mock endpoint for login
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        res.json({ success: true, token: 'mock-jwt-token-123', user: { name: 'John Doe', email } });
    } else {
        res.status(400).json({ success: false, message: 'Email and password required' });
    }
});

// Mock endpoint for dashboard stats
app.get('/api/dashboard/stats', (req, res) => {
    res.json({
        revenue: '$45,231.89',
        activeProjects: 12,
        newClients: 144,
        pendingInvoices: '$12,050.00'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
