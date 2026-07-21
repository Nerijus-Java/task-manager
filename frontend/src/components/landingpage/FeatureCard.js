import { Card, CardContent, Typography } from '@mui/material';


function FeatureCard({ icon, title, description }) {
    return (
        <Card
            variant="outlined"
            sx={{
                height: '100%',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4,
                }
            }}
        >
            <CardContent
                sx={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'flex-start', height: '100%'
                }}
            >
                {icon}

                <Typography variant="h6" fontWeight="bold">
                    {title}
                </Typography>

                <Typography variant="body2" color="text.secondary" align="center">
                    {description}
                </Typography>
            </CardContent>

        </Card>
    )

}

export default FeatureCard;