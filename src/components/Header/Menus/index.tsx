import { NavMobile } from './NavMobile';
import { NavWeb } from './NavWeb';

export function Menus() {
  return (
    <div className="flex">
      <title>Daniele Leão</title>
      <NavWeb />
      <NavMobile />
    </div>
  );
}
