import Header from '../../Header'
import { Box } from '@mui/material';

export const Dashboard = () => {
    return (
        <Box m="20px">
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Header title="DASHBOARD" subtitle="Welcome to yout dashboard" />
            </Box>
        </Box>
    )
}
export default Dashboard;