import "./Footer.css";

export default function Footer({ profile, ui }) {
  return (
    <footer>
      <div className="w">
        <span>{profile.name} — {profile.company}</span>
        <span>{ui.built}</span>
      </div>
    </footer>
  );
}