import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import blog1 from '../assets/coverpage1.jpg'

const AdminDash = () => {
    return (
      <section class="w-full h-screen text-gray-600 body-font pt-20 bg-gray-100">
        
        <div class="container px-5 py-1 mx-auto">
          <div class="flex flex-wrap -m-2">

            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  boxShadow: 1,
                  borderRadius: 2,
                  p: 2,
                  minWidth: 300,
                }}
              >
                <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
                <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                  98.3 K
                </Box>
                <Box
                  sx={{
                    color: 'success.dark',
                    display: 'inline',
                    fontWeight: 'bold',
                    mx: 0.5,
                    fontSize: 14,
                  }}
                >
                  +18.77%
                </Box>
                <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
                  vs. last week
                </Box>
              </Box>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  boxShadow: 1,
                  borderRadius: 2,
                  p: 2,
                  minWidth: 300,
                }}
              >
                <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
                <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                  98.3 K
                </Box>
                <Box
                  sx={{
                    color: 'success.dark',
                    display: 'inline',
                    fontWeight: 'bold',
                    mx: 0.5,
                    fontSize: 14,
                  }}
                >
                  +18.77%
                </Box>
                <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
                  vs. last week
                </Box>
              </Box>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  boxShadow: 1,
                  borderRadius: 2,
                  p: 2,
                  minWidth: 300,
                }}
              >
                <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
                <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                  98.3 K
                </Box>
                <Box
                  sx={{
                    color: 'success.dark',
                    display: 'inline',
                    fontWeight: 'bold',
                    mx: 0.5,
                    fontSize: 14,
                  }}
                >
                  +18.77%
                </Box>
                <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
                  vs. last week
                </Box>
              </Box>
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  boxShadow: 1,
                  borderRadius: 2,
                  p: 2,
                  minWidth: 300,
                }}
              >
                <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
                <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
                  98.3 K
                </Box>
                <Box
                  sx={{
                    color: 'success.dark',
                    display: 'inline',
                    fontWeight: 'bold',
                    mx: 0.5,
                    fontSize: 14,
                  }}
                >
                  +18.77%
                </Box>
                <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
                  vs. last week
                </Box>
              </Box>
            </div>
            {/* <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Total Users
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    583
                  </Typography>                  
                </CardContent>                
              </Card>
            </div> */}
          </div>

        </div>
      
        <div class="container p-6 mx-auto">
          <div class="flex justify-center flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 p-3">
              <div className="w-full">
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Chart-1
                    </Typography>
                  </CardContent>
                  <div className='p-3'>
                    {/* Insert Chart Here! */}
                  </div>
                </Card>
              </div>
            </div>
            <div class="sm:w-1/2 mb-10 p-3">
              <div className="w-full">
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Chart-2
                    </Typography>
                  </CardContent>
                  <div className='p-3'>
                    {/* Insert Chart Here! */}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
}
 
export default AdminDash;