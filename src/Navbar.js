import React, { Component } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import styles from "./styles/NavbarStyles";
import "rc-slider/assets/index.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }
  handleLike(e) {
    e.preventDefault();
    this.props.likePalette(this.props.id);
  }
  render() {
    const {
      name,
      creator,
      likes,
      isLiked,
      isSinglePalette,
      classes,
    } = this.props;
    console.log(isLiked);
    return (
      <nav className={classes.Navbar}>
        <div className={classes.BackButton}>
          <Link to="/" className={classes.BackLink}>
            <HomeIcon className={classes.BackIcon} />
          </Link>
        </div>
        {name}
        <span className={classes.CreatorName}>by {creator.split("@")[0]}</span>
        {!isSinglePalette && (
          <div className={classes.LikeButton}>
            <Link to="/" onClick={this.handleLike} className={classes.LikeLink}>
              {isLiked ? (
                <FavoriteIcon color="secondary" className={classes.LikeIcon} />
              ) : (
                <FavoriteBorderIcon className={classes.LikeIcon} />
              )}
            </Link>
            <span className={classes.LikeCount}>{likes}</span>
          </div>
        )}
      </nav>
    );
  }
}

export default withStyles(styles)(Navbar);
