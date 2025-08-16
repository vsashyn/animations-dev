import "./App.css";

const LENGTH = 3;

export const StackedComponent = () => {
  return (
    <div className="stackedWrapper">
      {new Array(LENGTH).fill(0).map((_, i) => {
        return (
          <div
            className="stackedCard"
            key={i}
            style={{
              '--index': LENGTH - i - 1
            }}
          />
        );
      })}
    </div>
  );
};
