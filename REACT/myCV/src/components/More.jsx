export const More = ({ languages, habilities, volunteer }) => {
    return (
      <div>
        <div className="language card">
          {languages.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <p>{item.language}</p>
                <p>{item.wrlevel}</p>
                <p>{item.splevel}</p>
              </div>
            );
          })}
        </div>
        <div className="habilities card">
          {habilities.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <p>🪡{item}</p>
              </div>
            );
          })}
        </div>
        <div className="volunteer card">
          {volunteer.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <p className="name">🩶 {item.name}</p>
                <p>{item.where}</p>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };