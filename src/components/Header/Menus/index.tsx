import { NavMobile } from './NavMobile';
import { NavWeb } from './NavWeb';

export function Menus() {
  return (
    <div className="flex">
      <title>Premium Social Service</title>
      <NavWeb />
      <NavMobile />
    </div>
  );
}
