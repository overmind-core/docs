export const Ascii = ({ lines, cols }) => (
  <div className="om-ascii-frame" style={{ "--om-ascii-cols": cols || Math.max(...lines.map((line) => line.length)) }}>
    <pre className="om-ascii">{lines.join("\n")}</pre>
  </div>
);
