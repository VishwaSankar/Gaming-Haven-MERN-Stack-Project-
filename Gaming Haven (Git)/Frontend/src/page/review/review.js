import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  List,
  ListItem,
  TextareaAutosize,
  Box,
  Rating,
  Snackbar,
  SnackbarContent,
  Alert,
  Divider,
} from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import AllReviewCard from './allrev';

const Review = (props) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      try {
        const response = await newRequest.post("/reviews");
        return response.data;
      } catch (error) {
        throw new Error("Error posting review");
      }
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (handlereview) => {
      return newRequest.post('/reviews/put', handlereview);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
      setSnackbarOpen(true); // Open the Snackbar on successful review submission
    },
  });

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handlereview = () => {
    if (newReview.trim() === '' || newRating === 0) {
      console.error('Please provide both a review text and a rating.');
      return;
    }

    const reviewData = {
      img:currentUser?.img,
      username:currentUser?.username,
      desc: newReview,
      star: newRating,
      gamename: props.gamename,
    };

    mutation.mutate(reviewData);

    setNewReview('');
    setNewRating(0);
  };

  return (
    <>
      <Box>
        <List>
          {reviews.map((review) => (
            <ListItem key={review._id} mb={1}>
              {review.text}
            </ListItem>
          ))}
        </List>
        <TextareaAutosize
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review..."
          style={{
            width: '75%',
            minHeight: '100px',
            marginBottom: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            fontFamily: 'monospace',
            color: 'white',
          }}
        />
        <Box mb={2}>
          <Typography sx={{ fontFamily: 'monospace' }}>
            Rate this game!
          </Typography>
          <Rating
            name="rating"
            size="medium"
            value={newRating}
            onChange={(event, newValue) => setNewRating(newValue)}
            precision={0.5}
          />
        </Box>
        <Button variant="contained" color="error" onClick={handlereview}>
          Submit Review
        </Button>
      </Box>

      <Box paddingTop="20px">
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontSize: '30px',
            paddingTop: '20px',
            paddingBottom: '-20px',
          }}
        >
          Global Reviews
        </Typography>
        <Divider color="white"/>
        <AllReviewCard gamename={props.gamename}/>
      </Box>

      {/* Snackbar for showing review success message */}
      <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={4000}
                    onClose={handleCloseSnackbar}
                    sx={{size:"large"}}
                  >
                    <Alert
                      onClose={handleCloseSnackbar}
                      severity="success"
                      sx={{ width: "100%", height: "100%" }}
                    >
                      Thanks for your review!!
                    </Alert>
                  </Snackbar>
    </>
  );
};

export default Review;
