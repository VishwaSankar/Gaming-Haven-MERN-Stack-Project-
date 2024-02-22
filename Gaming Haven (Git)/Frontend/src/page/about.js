import React from 'react'
import { Container, Typography, Paper, List, ListItem, ListItemText, CardMedia, Card } from '@mui/material';
import Myimg from './My pic.png'
const About = () => {
  return (
    <div>
 <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
      <Card  sx={{ width: 200, height: 200, margin: 'auto', borderRadius: '50%', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="200"
            alt="Vishwa S"
            src={Myimg}
            sx={{ borderRadius: '50%', }}  // Replace with the URL or path to your image
          />
        </Card>
        <Typography variant="h4" gutterBottom paddingTop="30px"  fontFamily="monospace">
          About Me
        </Typography>
        <Typography variant="body1" paragraph fontFamily="Arial" fontSize="18px">
          Hi there! I'm Vishwa S, a passionate web developer with a love for creating engaging and
          user-friendly applications. As an Electronics and Communication Engineering student at Karpagam College of Engineering, I am passionate about learning and applying new technologies in software, AI, IT, and video game design sectors. I am expected to graduate in 2025 with a Bachelor of Engineering degree.

I have developed good programming skills in C, Java, and Python, and have completed multiple projects using these languages. I am also interested in story writing and communication skills, and have participated in various contests and events to showcase my creativity and talent. My goal is to pursue a career that combines my technical and artistic abilities, and to contribute to innovative and impactful solutions.
        </Typography>
        <Typography variant="body1" paragraph>
          My skills include:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="JavaScript (ES6+)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="React.js" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Node.js" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Express.js" />
          </ListItem>
          {/* Add more skills */}
        </List>
        <Typography variant="body1" paragraph>
          In my free time, I enjoy exploring new technologies, contributing to open-source projects,
          and staying up-to-date with industry trends. I'm also a fan of [Your Hobbies or Interests].
        </Typography>
        <Typography variant="body1" paragraph>
          Let's connect! Feel free to reach out to me on [LinkedIn/GitHub/Twitter] or through my
          [personal website or portfolio].
        </Typography>
      </Paper>
    </Container>

    </div>
  )
}

export default About