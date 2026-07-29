import { Grid } from '@mui/material';
import ThemeCard from './ThemeCard';
import { THEME_OPTIONS } from '../../constants/themeOptions';

export default function ThemeSettings({ currentFlavor, onFlavorChange }) {
    return (
        <Grid container spacing={3}>
            {THEME_OPTIONS.map((t) => (
                <ThemeCard 
                    key={t.id}
                    theme={t}
                    isSelected={currentFlavor === t.id}
                    onSelect={() => onFlavorChange(t.id)}
                />
            ))}
        </Grid>
    );
}