import { CardContent, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

function PostData({ data, onClickHandler }) {
  const [readMore, setReadMore] = React.useState(false);
  const history = useHistory();

  const formatHashtags = (string) => {
    return string
      .split(/((?:^|\s)(?:#[a-z\d-]+))/gi)
      .filter(Boolean)
      .map((v, i) => {
        if (v.includes("#")) {
          return (
            <Typography
              component="span"
              variant="body1"
              key={i}
              color="primary"
              style={{ whiteSpace: "pre-wrap" }}
              onClick={(e) => {
                e.stopPropagation();
                history.push("/search", { string: v.substring(2, v.length) });
              }}
            >
              {v}
            </Typography>
          );
        } else {
          return (
            <Typography
              component="span"
              key={i}
              style={{ whiteSpace: "pre-wrap" }}
            >
              {v}
            </Typography>
          );
        }
      });
  };

  // console.log(data);
  return (
    <CardContent
      style={{ textAlign: "justify", cursor: "pointer" }}
      onClick={onClickHandler}
    >
      {/* <Typography variant="body1" style={{ whiteSpace: "pre-wrap" }}>
        {data}
      </Typography> */}
      {data &&
        (data.length >= 150
          ? formatHashtags(data.substring(0, 150))
          : formatHashtags(data))}
      {readMore && formatHashtags(data && data.substring(150, data.length))}
      {data && data.length > 150 && (
        <Typography
          component="span"
          variant="body2"
          style={{
            marginLeft: 5,
            color: "#969696",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setReadMore(!readMore);
          }}
        >
          {readMore ? "...See Less" : "...See More"}
        </Typography>
      )}
    </CardContent>
  );
}

export default PostData;
