export default function Chart({ data }: { data: number[] }) {
  return (
    <div className="chart-container">
      {data.map((i, index) => (
        <div
          className="chart"
          key={index}
          style={{
            height: `${i * 4}px`,
          }}
        ></div>
      ))}
    </div>
  );
}
