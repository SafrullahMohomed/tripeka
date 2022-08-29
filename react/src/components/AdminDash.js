import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import blog1 from '../assets/coverpage1.jpg'

const AdminDash = () => {
    return (
      <section class="w-full text-gray-600 body-font mt-20">
        
        <div class="container px-5 py-1 mx-auto">
          <div class="flex flex-wrap -m-2">

            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
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
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
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
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
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
            </div>
            <div class="p-2 lg:w-1/4 md:w-1/2 w-full">
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
            </div>
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
                  <div className='p-1'>
                    {/* Insert Chart Here! */}
                    <img src={blog1} alt="" />
                  </div>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
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
                  <div className='p-1'>
                    {/* Insert Chart Here! */}
                    <img src={blog1} alt="" />
                  </div>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
}
 
export default AdminDash;