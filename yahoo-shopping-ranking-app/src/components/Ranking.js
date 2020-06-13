import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";

export default class Ranking extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.onMount(this.props.categoryId);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.categoryId !== nextProps.categoryId) {
      this.props.onUpdate(nextProps.categoryId);
    }
  }

  render() {
    const { category, ranking, error } = this.props;
    return (
      <div>
        <h2>
          {typeof category !== "undefined"
            ? `${category.name}のランキング`
            : ""}
        </h2>
        {(() => {
          if (error) {
            return <p>エラーが発生しました。リロードしてください</p>;
          } else if (typeof ranking === "undefined") {
            return <p>読み込み中...</p>;
          } else {
            return ranking.map((item, i) => (
              <Card
                key={`ranking-item-${item.code}`}
                style={{ maxWidth: "500px", margin: "32px auto" }}
              >
                <CardActionArea>
                  <CardMedia
                    image={item.imageUrl}
                    title={`${i + 1}位 ${item.name}`}
                    style={{ height: "200px" }}
                  />
                  <CardContent>
                    <Typography>{`${i + 1}位 ${item.name}`}</Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    href={item.url}
                    target="_blank"
                  >
                    商品ページへ
                  </Button>
                </CardActions>
              </Card>
            ));
          }
        })()}
      </div>
    );
  }
}

Ranking.propTypes = {
  categoryId: PropTypes.string.isRequired,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  ranking: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ),
  error: PropTypes.bool.isRequired,
};

Ranking.defaultProps = {
  categoryId: "1",
};
