export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title">
      <h2 className="grad">{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}