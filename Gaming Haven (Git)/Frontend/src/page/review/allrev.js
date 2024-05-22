import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { Alert, CircularProgress, Divider, Button } from "@mui/material";
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { Delete } from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit';

const MAX_DISPLAY_LENGTH = 100; // Adjust this value based on your preference

export default function AllReviewCard(props) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews", props.gamename],
    queryFn: async () => {
      try {
        const response = await newRequest.get(`/reviews/${props.gamename}`);
        return response.data;
      } catch (error) {
        throw new Error("Error fetching reviews");
      }
    },
  });

  const [expandedReviewId, setExpandedReviewId] = React.useState(null);

  function formatDateTime(dateTimeString) {
    const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDateTime = new Date(dateTimeString).toLocaleDateString(undefined, options);
    return formattedDateTime;
  }

  const handleExpandClick = (reviewId) => {
    setExpandedReviewId((prevId) => (prevId === reviewId ? null : reviewId));
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        >
          <CircularProgress />
        </div>
      ) : error ? (
        <Alert severity="error">Kindly login to access these features!</Alert>
      ) : data.length === 0 ? (
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100px",
          }}
          fontFamily="monospace"
          fontSize="40px"
          align="center"
        >
          No Reviews Yet!
        </Typography>
      ) : (
        <>
          {data.map((review) => (
            <Card key={review._id} sx={{ maxWidth: "350px", margin: "8px" }}>
              <CardHeader
                avatar={
                  <Avatar src={review.img} sx={{ bgcolor: red[500] }} />
                }
                title={review.username}
                subheader={formatDateTime(review.createdAt)}
              />
              <Divider color="gray" />
              <CardContent>
                <Typography variant="body2" color="white">
                  {expandedReviewId === review._id ? review.desc : review.desc.slice(0, MAX_DISPLAY_LENGTH)}
                  {review.desc.length > MAX_DISPLAY_LENGTH && expandedReviewId !== review._id && '...'}
                </Typography>
              </CardContent>
              {review.desc.length > MAX_DISPLAY_LENGTH && (
                <CardActions disableSpacing>
                  <Button onClick={() => handleExpandClick(review._id)}>
                    {expandedReviewId === review._id ? "View Less" : "View More"}
                  </Button>
                </CardActions>
              )}
              <Collapse in={expandedReviewId === review._id} timeout="auto" unmountOnExit>
                <CardContent sx={{margin:"-10px"}}>
                  
                </CardContent>
              </Collapse>
              <CardActions disableSpacing>
                <IconButton aria-label="delete-review">
                  <DeleteForeverSharpIcon color="error" />
                </IconButton>
                <IconButton aria-label="share">
                  <EditIcon color="primary" />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </>
      )}
    </div>
  );
}
