import React from "react";
import PropTypes from "prop-types";

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
            return (
              <ol>
                {ranking.map((item) => (
                  <li key={`ranking-item-${item.code}`}>
                    <img src={item.imageUrl} alt={item.name} />
                    <a href={item.url} target="_blank">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ol>
            );
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
