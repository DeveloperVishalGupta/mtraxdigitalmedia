import { title } from '../../components/primitives';
import Team from '../../components/team';

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>Meet the Team</h1>
      <Team />
    </div>
  );
}
