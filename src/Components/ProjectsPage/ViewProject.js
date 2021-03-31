// import { useMediaQuery } from "@material-ui/core";
// import React from "react";
// import { useParams } from "react-router";

// function ViewProject() {
//     const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));
//   const { id } = useParams();
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);
//   const [upvoted, setUpvoted] = React.useState(false);
//   const { userProfile } = useContext(UserContext);
//   const checkRequested =
//     project && project.project_requests.indexOf(userProfile.uid);
//   const [requested, setrequested] = React.useState(checkRequested > -1);
//   const checkMember =
//     project && project.project_members.indexOf(userProfile.uid);
//   const [member, setMember] = React.useState(checkMember > -1);
//   const [copy, setCopy] = React.useState(false);
//   const history = useHistory();

//   const btnClass = classNames(
//     classes.btnspace,
//     clsx(classes.expand, {
//       [classes.expandOpen]: expanded,
//     })
//   );

//   const btnRequest = classNames(
//     classes.btnspace,
//     clsx(classes.upvote, {
//       [classes.expandOpen]: requested,
//     })
//   );

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const cardHeader = (
//     <CardHeader
//       style={{ paddingBottom: 0 }}
//       avatar={
//         <StyledBadge
//           overlap="circle"
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "right",
//           }}
//           variant="dot"
//         >
//           <Avatar
//             src={project.thumbnail_pic !== "" ? project.thumbnail_pic : user}
//             alt="N"
//             aria-label="Name"
//             className={classes.avatar}
//           />{" "}
//         </StyledBadge>
//       }
//       action={
//         <IconButton color="inherit" aria-label="settings">
//           <MoreVertIcon />
//         </IconButton>
//       }
//       title={project.fname + " " + project.lname}
//       subheaderTypographyProps={{
//         style: {
//           fontSize: 13.5,
//           // width: "70%",
//         },
//       }}
//       subheader={project.title}
//       subheadertime={beautifiedDate(project.createdAt)}
//       subheaderTimeTypographyProps={{
//         style: {
//           fontSize: 12,
//         },
//       }}
//     />
//   );

//   const cardData = (
//     <CardContent>
//       <Grid
//         container
//         direction="column"
//         justify="flex-start"
//         alignItems="flex-start"
//       >
//         <Grid item>
//           <Typography variant="h6">{project.project_title}</Typography>
//         </Grid>
//         <Grid item>
//           <PostData
//             data={project.project_description}
//             onClickHandler={viewProjectHandler}
//           />
//         </Grid>
//         <Grid item>
//           <Typography variant="h6" style={{ fontSize: "1.05rem" }}>
//             Current Team Members: {project.project_members.length}
//           </Typography>
//         </Grid>
//         {/* Loop here */}
//         {/* <Grid item>
//           <Typography variant="body1" style={{ margin: 2, marginLeft: 15 }}>
//             {"name: Technology"}
//           </Typography>
//         </Grid>
//         <Grid item>
//           <Typography variant="body1" style={{ margin: 2, marginLeft: 15 }}>
//             {"name: Technology"}
//           </Typography>
//         </Grid>
//         <Grid item>
//           <Typography variant="body1" style={{ margin: 2, marginLeft: 15 }}>
//             {"name: Technology"}
//           </Typography>
//         </Grid> */}
//         <Grid item>
//           <Typography
//             variant="h6"
//             style={{ fontSize: "1.05rem", marginTop: 10 }}
//           >
//             Requirements:{" "}
//             {project.project_requirement.map((requirement, index) => (
//               <Typography
//                 component="span"
//                 variant="body1"
//                 key={index}
//                 color="primary"
//               >
//                 {requirement}
//               </Typography>
//             ))}
//           </Typography>
//         </Grid>
//         <Grid item>
//           <Typography variant="body1" style={{ margin: 2, marginLeft: 15 }}>
//             {project.requirement_description}
//           </Typography>
//         </Grid>
//       </Grid>
//     </CardContent>
//   );

//   const commentHandler = (e) => {
//     e.preventDefault();
//   };

//   const requestHandler = () => {
//     // console.log(project._id);
//     fetch(kBaseUrl + "join_project", {
//       credentials: "include",
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         flag: requested,
//         pid: project._id,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setrequested(data.requested);
//       })
//       .catch((e) => console.log(e));
//   };

//   const commentBox = (
//     <Paper
//       elevation={0}
//       component="form"
//       onSubmit={commentHandler}
//       className={classes.commentBox}
//     >
//       <Avatar
//         src={user}
//         alt="N"
//         aria-label="Name"
//         className={classes.commentAvatar}
//       />
//       <InputBase
//         className={classes.input}
//         placeholder="Leave a Comment here..."
//       />
//       <Divider className={classes.dividerVert} orientation="vertical" />
//       <IconButton type="submit" color="primary" aria-label="Send">
//         <SendIcon />
//       </IconButton>
//     </Paper>
//   );

//   const cardAction = (
//     <CardActions className={classes.actions}>
//       <Grid container>
//         {/* <Grid item xs={matches ? 3 : 4}>
//           <Button
//             fullWidth
//             aria-label="upvote"
//             className={btnUpvote}
//             onClick={upvoteHandler}
//           >
//             <PublishIcon />{" "}
//             <Typography variant="button" style={{ marginLeft: 10 }}>
//               {upvoted ? "Upvoted" : "Upvote"}
//             </Typography>
//           </Button>
//         </Grid> */}
//         <Grid item xs={4}>
//           <Button
//             fullWidth
//             aria-label="request"
//             className={btnRequest}
//             onClick={requestHandler}
//             disabled={member || project.project_leader === userProfile.uid}
//           >
//             <GroupAddIcon />{" "}
//             <Typography variant="button" style={{ marginLeft: 10 }}>
//               {requested ? "Requested" : "Request"}
//             </Typography>
//           </Button>
//         </Grid>
//         <Grid item xs={4}>
//           <Button
//             fullWidth
//             aria-label="comment"
//             className={btnClass}
//             onClick={handleExpandClick}
//             aria-expanded={expanded}
//           >
//             <CommentIcon />
//             <Typography variant="button" style={{ marginLeft: 10 }}>
//               Comment
//             </Typography>
//           </Button>
//         </Grid>
//         {/* {matches && ( */}
//         <Grid item xs={4}>
//           <Button
//             fullWidth
//             aria-label="share"
//             className={classes.btnspace}
//             onClick={() => {
//               navigator.clipboard.writeText(
//                 "www.localhost:3001/" + "projects/" + project._id
//               );
//               setCopy(true);
//               setTimeout(() => {
//                 setCopy(false);
//               }, 3000);
//             }}
//           >
//             <ShareIcon />{" "}
//             <Typography variant="button" style={{ marginLeft: 10 }}>
//               Share
//             </Typography>
//           </Button>
//         </Grid>
//         {/* )} */}
//       </Grid>
//     </CardActions>
//   );

//   const comment = (
//     <Paper
//       elevation={0}
//       component="form"
//       onSubmit={commentHandler}
//       className={classes.comment}
//     >
//       <Avatar
//         src={user}
//         alt="N"
//         aria-label="Name"
//         className={classes.commentAvatar}
//       />
//       <Grid container style={{ marginLeft: 5 }}>
//         <Grid item xs={12}>
//           <Typography variant="body2" style={{ fontWeight: "bold" }}>
//             Dishang Patel
//           </Typography>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="body2">Awesome!</Typography>
//         </Grid>
//       </Grid>
//     </Paper>
//   );

//   return (
//     <Card className={classes.root}>
//       {cardHeader}
//       {cardData}
//       <Divider
//         className={classes.divider}
//         style={{ margin: 8, marginBottom: 0 }}
//       />
//       {cardAction}
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <Divider
//           className={classes.divider}
//           style={{ marginLeft: 10, marginRight: 10 }}
//         />
//         <CardContent>
//           {commentBox}
//           {comment}
//           {comment}
//           {comment}
//         </CardContent>
//       </Collapse>
//       {copy && <Alert severity="success">Post-link copied to clipboard!</Alert>}
//     </Card>
//   );
// }

// export default ViewProject;

import { Box, Grid, Typography, useMediaQuery } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { MoonLoader } from "react-spinners";
import { kBaseUrl } from "../../constants";
import { ThemeContext } from "../../Context/ThemeContext";
import { useToast } from "../../Context/ToastProvider";
import Project from "./Project";

function ViewProject() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [data, setData] = useState();
  const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const { messageType } = useToast();
  const history = useHistory();
  const { defaultTheme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(kBaseUrl + `getproject?pid=${id}`, {
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.is_deleted) {
          setDeleted(true);
          setTimeout(() => {
            history.push("/home");
          }, 3000);
        } else {
          setData(data);
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [id, messageType]);

  return (
    <Box my={matches ? 10 : 15} mx={3}>
      <Grid container direction="row" justify="center" alignContent="center">
        {loading ? (
          <MoonLoader
            size={60}
            color={defaultTheme === "dark" ? "#B6B6B6" : "#006BA6"}
            loading={loading}
          />
        ) : deleted ? (
          <Typography
            color="textSecondary"
            variant="h5"
            style={{ marginTop: "5%" }}
          >
            This Project is Deleted by Owner. You are being redirected to Home
            Page
          </Typography>
        ) : (
          <Grid item xs={matches ? 6 : 12}>
            <Project project={data} single={true} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default ViewProject;
